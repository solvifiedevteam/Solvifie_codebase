import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Solvifie Consultancy',
  description:
    'Terms of Service for Solvifie Consultancy — the terms and conditions governing the use of our recruitment website and HR consulting services.',
  keywords: ['terms of service', 'Solvifie terms', 'recruitment terms and conditions'],
  alternates: {
    canonical: 'https://solvifie.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Solvifie Consultancy',
    description:
      'Terms and conditions governing the use of Solvifie Consultancy recruitment and HR consulting services.',
    url: 'https://solvifie.com/terms',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Solvifie Consultancy',
    description:
      'Terms and conditions for Solvifie Consultancy services.',
  },
};

const lastUpdated = '28 February 2026';

export default function TermsOfServicePage() {
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
            Terms of Service
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
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
            use of the website{' '}
            <Link href="/" className="text-primary hover:underline">
              solvifie.com
            </Link>{' '}
            and the recruitment and HR consulting services provided by Solvifie
            Consultancy (&ldquo;Solvifie&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
            a firm registered in Chennai, Tamil Nadu, India. By accessing our
            website or using our services, you agree to be bound by these Terms.
          </p>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              1. Services Overview
            </h2>
            <p>
              Solvifie Consultancy provides recruitment, staffing, HR consulting,
              career guidance, and related human resource services. Our website
              serves as a platform for job seekers to browse and apply for open
              positions, and for employers to connect with us for hiring solutions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years of age to use our services or submit a
              job application. By using our website, you represent and warrant that
              you meet this age requirement and have the legal capacity to enter into
              these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              3. User Responsibilities
            </h2>
            <p className="mb-3">When using our website and services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, truthful, and complete information in all applications and communications.</li>
              <li>Not misrepresent your qualifications, work experience, or identity.</li>
              <li>Not upload any malicious files, viruses, or harmful content.</li>
              <li>Not attempt to gain unauthorised access to any part of our website or systems.</li>
              <li>Not use our website for any unlawful purpose or in violation of any applicable laws.</li>
              <li>Not scrape, crawl, or use automated tools to extract data from our website without written permission.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              4. Job Applications
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Submitting a job application through our website does not guarantee
                employment or an interview. All hiring decisions are made by the
                respective employer clients.
              </li>
              <li>
                Your resume and application details may be shared with the employer
                for the specific role you applied to. By submitting an application,
                you consent to this sharing.
              </li>
              <li>
                We reserve the right to reject or remove applications that contain
                false, misleading, or inappropriate content.
              </li>
              <li>
                Uploaded files (resumes, cover letters) must be in PDF or DOCX format
                and must not exceed 5 MB in size.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              5. Employer Clients
            </h2>
            <p>
              Employers engaging Solvifie for recruitment services agree to provide
              accurate job descriptions and hiring criteria. Placement fees,
              guarantee periods, and service-level terms are governed by separate
              agreements executed between Solvifie and the employer client. These
              Terms apply to the use of this website only.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, graphics, logos, icons,
              images, design elements, and software — is the property of Solvifie
              Consultancy or its licensors and is protected under Indian copyright
              and intellectual property laws. You may not reproduce, distribute,
              modify, or create derivative works from any content on this website
              without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              7. No Employment Guarantee
            </h2>
            <p>
              Solvifie acts as an intermediary between candidates and employers. We
              do not guarantee job placement, interview calls, or specific outcomes.
              While we strive to match the right talent with the right opportunity,
              all employment decisions rest solely with the hiring organisation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              8. Fees &amp; Payments
            </h2>
            <p>
              Solvifie does <strong>not</strong> charge candidates any fees for job
              placement or application processing. Our revenue comes exclusively from
              employer clients. If anyone claims to represent Solvifie and asks for
              payment from a candidate, please report it immediately to{' '}
              <a href="mailto:business@solvifie.com" className="text-primary hover:underline">
                business@solvifie.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by Indian law, Solvifie Consultancy
              shall not be liable for any indirect, incidental, consequential, or
              punitive damages arising from your use of our website or services.
              This includes but is not limited to loss of data, loss of employment
              opportunities, or business interruption. Our total liability for any
              claim shall not exceed the amount paid by you to us (if any) in the
              12 months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              10. Disclaimer
            </h2>
            <p>
              Our website and services are provided on an &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; basis without warranties of any kind, either
              express or implied. We do not warrant that the website will be
              uninterrupted, error-free, or free of viruses or other harmful
              components. Job listings are provided based on information from
              employer clients and may be subject to change without notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              11. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Solvifie Consultancy, its
              directors, employees, and agents from any claims, damages, losses, or
              expenses (including legal fees) arising from your violation of these
              Terms, misrepresentation of information, or misuse of our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              12. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to our website
              or services at any time, without prior notice, if we believe you have
              violated these Terms or engaged in conduct that may harm Solvifie or
              other users.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              13. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the laws
              of India. Any disputes arising from these Terms shall be subject to
              the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              14. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms at any time by updating this page. Changes
              take effect immediately upon posting. Your continued use of our website
              after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">
              15. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us:
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

          {/* Cross-link */}
          <p className="pt-4 text-sm text-gray-500">
            Please also review our{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{' '}
            to understand how we handle your personal data.
          </p>
        </div>
      </div>
      </section>
    </>
  );
}
