import { Resend } from 'resend';
import { escapeHtml } from '@/lib/utils/sanitize';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAdminNotification(data: {
  jobTitle: string;
  name: string;
  email: string;
  phone?: string;
}) {
  return resend.emails.send({
    from: 'Solvifie Jobs <jobs@solvifie.com>',
    to: process.env.ADMIN_EMAIL!,
    subject: `New Application: ${escapeHtml(data.jobTitle)} — ${escapeHtml(data.name)}`,
    html: `
      <div style="font-family: 'Inter', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px;">
        <h2 style="color: #0055d4; margin-bottom: 24px;">New Job Application Received</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Position</td>
            <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(data.jobTitle)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Candidate</td>
            <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
            <td style="padding: 8px 0;">${escapeHtml(data.email)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Phone</td>
            <td style="padding: 8px 0;">${data.phone ? escapeHtml(data.phone) : 'Not provided'}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f0f4ff; border-radius: 12px;">
          <p style="margin: 0; font-size: 14px; color: #374151;">
            Log in to the <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/applications" style="color: #0055d4; text-decoration: underline;">admin panel</a> to view the full application and download the resume.
          </p>
        </div>
      </div>
    `,
  });
}

export async function sendCandidateConfirmation(data: {
  jobTitle: string;
  name: string;
  email: string;
}) {
  return resend.emails.send({
    from: 'Solvifie Consultancy <jobs@solvifie.com>',
    to: data.email,
    subject: `Application Received — ${escapeHtml(data.jobTitle)}`,
    html: `
      <div style="font-family: 'Inter', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px;">
        <h2 style="color: #0055d4; margin-bottom: 8px;">Thank you, ${escapeHtml(data.name)}!</h2>
        <p style="color: #374151; line-height: 1.6;">
          We have received your application for <strong>${escapeHtml(data.jobTitle)}</strong>.
        </p>
        <p style="color: #374151; line-height: 1.6;">
          Our team will review your profile and get back to you within 3–5 business days.
          If your qualifications match our requirements, we will reach out to schedule an interview.
        </p>
        <div style="margin-top: 24px; padding: 16px; background: #f0f4ff; border-radius: 12px;">
          <p style="margin: 0; font-size: 14px; color: #374151;">
            Meanwhile, explore more opportunities at
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/jobs" style="color: #0055d4; text-decoration: underline;">solvifie.com/jobs</a>
          </p>
        </div>
        <p style="margin-top: 32px; color: #6b7280; font-size: 13px;">
          Best regards,<br/>
          <strong>Solvifie Consultancy</strong><br/>
          Chennai, India
        </p>
      </div>
    `,
  });
}
