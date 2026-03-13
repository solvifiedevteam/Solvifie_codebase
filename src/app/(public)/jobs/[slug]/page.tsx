import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import JobDetail from '@/components/jobs/JobDetail';
import Link from 'next/link';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { sanitizeJobDescription } from '@/lib/utils/sanitize';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: job } = await supabase
    .from('jobs')
    .select('title, location, salary, description')
    .eq('slug', slug)
    .eq('status', 'active')
    .single();

  if (!job) return { title: 'Job Not Found' };

  const desc = job.description.replace(/<[^>]*>/g, '').slice(0, 160);

  return {
    title: `${job.title} in ${job.location}`,
    description: desc,
    keywords: [job.title, job.location, 'job opening', 'Solvifie Consultancy', 'careers'],
    alternates: { canonical: `https://solvifie.com/jobs/${slug}` },
    openGraph: {
      title: `${job.title} — ${job.location} | Solvifie Consultancy`,
      description: desc,
      url: `https://solvifie.com/jobs/${slug}`,
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `${job.title} at Solvifie Consultancy`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${job.title} in ${job.location} | Solvifie`,
      description: desc,
    },
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  // Fetch active job (RLS allows public read for active)
  const { data: job } = await supabase
    .from('jobs')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'active')
    .single();

  if (!job) {
    // Check if job exists but is closed (use admin client to bypass RLS)
    const adminClient = createAdminClient();
    const { data: closedJob } = await adminClient
      .from('jobs')
      .select('title, status')
      .eq('slug', slug)
      .single();

    if (closedJob) {
      return (
        <div className="pt-24 min-h-screen bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 py-20 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={32} className="text-orange-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Position Closed
            </h1>
            <p className="text-gray-600 mb-2">
              The position <strong>{closedJob.title}</strong> is no longer accepting applications.
            </p>
            <p className="text-gray-500 text-sm mb-8">
              Check out our other open positions below.
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all"
            >
              <ArrowLeft size={16} /> Browse Open Positions
            </Link>
          </div>
        </div>
      );
    }

    notFound();
  }

  // JobPosting structured data
  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.created_at,
    employmentType: job.job_type.toUpperCase().replace('-', '_'),
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'IN',
      },
    },
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Solvifie Consultancy',
      sameAs: 'https://solvifie.com',
      logo: 'https://solvifie.com/logo.png',
    },
    ...(job.salary && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: { '@type': 'QuantitativeValue', value: job.salary },
      },
    }),
    skills: job.skills?.join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solvifie.com' },
      { '@type': 'ListItem', position: 2, name: 'Jobs', item: 'https://solvifie.com/jobs' },
      {
        '@type': 'ListItem',
        position: 3,
        name: job.title,
        item: `https://solvifie.com/jobs/${job.slug}`,
      },
    ],
  };

  const sanitizedJob = {
    ...job,
    description: sanitizeJobDescription(job.description),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <JobDetail job={sanitizedJob} />
    </>
  );
}
