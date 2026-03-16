import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getClientIp } from '@/lib/utils/getClientIp';
import { escapeHtml } from '@/lib/utils/sanitize';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limit: 5 messages per IP per hour (resets on cold start)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
// not exported — Next.js route files only allow HTTP handler exports

const ALLOWED_SERVICES = new Set([
  'Talent Acquisition',
  'Executive Hiring',
  'Contract Staffing',
  'Recruitment Process Outsourcing (RPO)',
  'Career Placement',
  'Resume Enhancement',
  'Interview Preparation',
  'Career Consulting',
  'Other',
]);

const ALLOWED_ENQUIRY_TYPES = new Set(['employer', 'candidate', 'other']);

export async function POST(request: NextRequest) {
  // Rate limiting: 5 messages per IP per hour
  const ip = getClientIp(request);
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry && entry.resetAt > now && entry.count >= 5) {
    return NextResponse.json(
      { error: 'Too many messages. Please try again later.' },
      { status: 429 }
    );
  }

  if (!entry || entry.resetAt <= now) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3600000 });
  } else {
    entry.count++;
  }

  try {
    const body = await request.json();

    const name = (body.name as string)?.trim();
    const email = (body.email as string)?.trim();
    const phone = (body.phone as string)?.trim() || '';
    const service = (body.service as string)?.trim();
    const enquiryType = (body.enquiryType as string)?.trim() || 'other';
    const message = (body.message as string)?.trim();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Name, email, service, and message are required.' },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json({ error: 'Name is too long.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!ALLOWED_SERVICES.has(service)) {
      return NextResponse.json({ error: 'Invalid service selection.' }, { status: 400 });
    }

    if (!ALLOWED_ENQUIRY_TYPES.has(enquiryType)) {
      return NextResponse.json({ error: 'Invalid enquiry type.' }, { status: 400 });
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be under 2000 characters.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Solvifie Website <jobs@solvifie.com>',
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New Enquiry: ${escapeHtml(service)} — ${escapeHtml(name)}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #0055d4; margin-bottom: 24px;">New Contact Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Phone</td><td style="padding: 8px 0;">${phone ? escapeHtml(phone) : 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Enquiry Type</td><td style="padding: 8px 0; text-transform: capitalize;">${escapeHtml(enquiryType)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Service</td><td style="padding: 8px 0;">${escapeHtml(service)}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f0f4ff; border-radius: 12px;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="margin: 0; font-size: 15px; color: #111827; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
