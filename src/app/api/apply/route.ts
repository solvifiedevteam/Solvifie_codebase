import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import {
  sendAdminNotification,
  sendCandidateConfirmation,
} from '@/lib/email';
import { getClientIp } from '@/lib/utils/getClientIp';

// Simple in-memory rate limiting (resets on cold start)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
export const _rateLimitMap = rateLimit; // exported for test resets only

export async function POST(request: NextRequest) {
  // Rate limiting: 3 applications per IP per hour
  const ip = getClientIp(request);
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry && entry.resetAt > now && entry.count >= 3) {
    return NextResponse.json(
      { error: 'Too many applications. Please try again later.' },
      { status: 429 }
    );
  }

  if (!entry || entry.resetAt <= now) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3600000 });
  } else {
    entry.count++;
  }

  try {
    const formData = await request.formData();

    const jobId = formData.get('job_id') as string;
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const phone = (formData.get('phone') as string)?.trim() || null;
    const message = (formData.get('message') as string)?.trim() || null;
    const resume = formData.get('resume') as File | null;

    // Validation
    if (!jobId || !name || !email) {
      return NextResponse.json(
        { error: 'Name, email, and job selection are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    // Verify job exists and is active
    const { data: job } = await supabase
      .from('jobs')
      .select('id, title')
      .eq('id', jobId)
      .eq('status', 'active')
      .single();

    if (!job) {
      return NextResponse.json(
        { error: 'This position is no longer accepting applications.' },
        { status: 404 }
      );
    }

    // Upload resume if provided
    let resumeUrl: string | null = null;
    if (resume && resume.size > 0) {
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];

      if (!allowedTypes.includes(resume.type)) {
        return NextResponse.json(
          { error: 'Only PDF and DOC files are accepted.' },
          { status: 400 }
        );
      }

      if (resume.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'Resume must be under 5MB.' },
          { status: 400 }
        );
      }

      // Sanitize filename
      const safeName = resume.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const filePath = `${jobId}/${Date.now()}-${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, resume);

      if (uploadError) {
        console.error('Resume upload error:', uploadError);
        return NextResponse.json(
          { error: 'Failed to upload resume. Please try again.' },
          { status: 500 }
        );
      }

      resumeUrl = filePath;
    }

    // Insert application
    const { error: insertError } = await supabase
      .from('applications')
      .insert({
        job_id: jobId,
        name,
        email,
        phone,
        resume_url: resumeUrl,
        message,
      });

    if (insertError) {
      console.error('Application insert error:', insertError);
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again.' },
        { status: 500 }
      );
    }

    // Send notification emails (non-blocking)
    Promise.allSettled([
      sendAdminNotification({
        jobTitle: job.title,
        name,
        email,
        phone: phone || undefined,
      }),
      sendCandidateConfirmation({
        jobTitle: job.title,
        name,
        email,
      }),
    ]).catch((err) => {
      console.error('Email sending error:', err);
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Application submission error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
