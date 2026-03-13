import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Solvifie Consultancy',
  description:
    'Privacy Policy of Solvifie Consultancy — how we collect, use, and protect your personal data when you use our recruitment and HR consulting services.',
  keywords: ['privacy policy', 'Solvifie privacy', 'data protection recruitment'],
  alternates: {
    canonical: 'https://solvifie.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Solvifie Consultancy',
    description:
      'How Solvifie Consultancy collects, uses, and protects your personal data.',
    url: 'https://solvifie.com/privacy',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Solvifie Consultancy',
    description:
      'How Solvifie Consultancy protects your personal data.',
  },
};

const lastUpdated = '28 February 2026';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Dark Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#001a6e] via-[#0040b8] to-[#1e3a8a] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-blue-200/70">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed text-gray-600">
          <p>
            Solvifie Consultancy (&ldquo;Solvifie&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
            headquartered in Chennai, Tamil Nadu, India, is committed to protecting
            the privacy and security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your data
            when you visit our website{' '}
            <Link href="/" className="text-primary hover:underline">
              solvifie.com
            </Link>{' '}
            or use our recruitment and HR consulting services.
          </p>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3">We may collect the following categories of personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Identity &amp; Contact Data:</strong> Full name, email address,
                phone number, postal address, and date of birth.
              </li>
              <li>
                <strong>Professional Data:</strong> Resume/CV, work history, education,
                skills, certifications, current and expected salary, and job preferences.
              </li>
              <li>
                <strong>Application Data:</strong> Cover letters, portfolio links, and
                any documents you upload through our job application forms.
              </li>
              <li>
                <strong>Employer Data:</strong> Company name, designation, hiring
                requirements, and business contact details (for employer clients).
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, device
                information, pages visited, and referral source — collected
                automatically via cookies and server logs.
              </li>
              <li>
                <strong>Communication Data:</strong> Messages sent through our contact
                form, emails, WhatsApp, or phone conversations.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Match candidates with suitable job opportunities.</li>
              <li>Process job applications and share profiles with prospective employers (with your consent).</li>
              <li>Communicate with you about job openings, interview schedules, and placement updates.</li>
              <li>Provide HR consulting, career guidance, and resume enhancement services.</li>
              <li>Respond to enquiries submitted through our contact form.</li>
              <li>Send occasional newsletters or job alerts (only if you opt in).</li>
              <li>Improve our website, services, and user experience.</li>
              <li>Comply with legal obligations and prevent fraud.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              3. Sharing of Information
            </h2>
            <p className="mb-3">
              We do <strong>not</strong> sell your personal data. We may share your
              information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Employer Clients:</strong> Your resume and professional details
                are shared with prospective employers only with your prior consent or
                when you apply for a specific role.
              </li>
              <li>
                <strong>Service Providers:</strong> Trusted third-party platforms we use
                to operate our website and services (e.g., hosting on Vercel, database
                on Supabase, email via Resend). These providers are contractually
                bound to protect your data.
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by applicable Indian
                law, court order, or government regulation.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              4. Data Storage &amp; Security
            </h2>
            <p>
              Your data is stored securely on servers managed by Supabase
              (PostgreSQL) and Vercel, with encryption in transit (TLS/SSL) and at
              rest. Uploaded resumes are stored in a private, access-controlled
              storage bucket. We implement industry-standard security measures
              including row-level security, input validation, rate limiting, and
              secure authentication to protect against unauthorised access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to fulfil
              the purposes described in this policy, or as required by law. Candidate
              profiles are typically retained for up to 2 years from the last
              interaction to facilitate future placement opportunities. You may
              request deletion at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              6. Cookies
            </h2>
            <p>
              Our website uses essential cookies for authentication and session
              management. We do not use third-party advertising or tracking cookies.
              Analytics data (if any) is collected in aggregate form without
              personally identifying you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              7. Your Rights
            </h2>
            <p className="mb-3">Under applicable Indian data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent for data processing at any time.</li>
              <li>Object to processing of your data for marketing purposes.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:business@solvifie.com" className="text-primary hover:underline">
                business@solvifie.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external websites (e.g., LinkedIn,
              job boards). We are not responsible for the privacy practices of these
              third-party sites. We encourage you to review their privacy policies
              independently.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18. We
              do not knowingly collect personal data from minors. If you believe we
              have inadvertently collected such data, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated &ldquo;Last updated&rdquo; date. We
              encourage you to review this page periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or how
              we handle your data, please contact us:
            </p>
            <div className="mt-4 p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-1 text-sm">
              <p className="font-bold text-gray-900">Solvifie Consultancy</p>
              <p>8, Venkata Balaji Apartment, Ponniamman Kovil Street, Aalapakkam, Chennai – 600116</p>
              <p>
                Email:{' '}
                <a href="mailto:business@solvifie.com" className="text-primary hover:underline">
                  business@solvifie.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+918248020159" className="text-primary hover:underline">
                  +91 8248020159
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
