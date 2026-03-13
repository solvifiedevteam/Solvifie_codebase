import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import JobListings from '@/components/jobs/JobListings';

export const metadata: Metadata = {
  title: 'Current Job Openings | Solvifie Consultancy',
  description:
    'Browse active job opportunities across Chennai and India. Solvifie Consultancy connects you with top employers in IT, Finance, Healthcare, and more.',
  keywords: [
    'jobs in Chennai',
    'job openings Chennai',
    'IT jobs Chennai',
    'Solvifie jobs',
    'recruitment agency jobs',
    'career opportunities Chennai',
  ],
  alternates: {
    canonical: 'https://solvifie.com/jobs',
  },
  openGraph: {
    title: 'Current Job Openings | Solvifie Consultancy',
    description:
      'Browse active job opportunities placed by Solvifie Consultancy. Full-time, contract, and executive roles across Chennai.',
    url: 'https://solvifie.com/jobs',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Job Openings at Solvifie Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Current Job Openings | Solvifie Consultancy',
    description:
      'Browse active job opportunities placed by Solvifie Consultancy. Full-time, contract, and executive roles across Chennai.',
  },
};

export const dynamic = 'force-dynamic';

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    location?: string;
    type?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const supabase = await createClient();
  const page = Number(params.page) || 1;
  const perPage = 12;

  let query = supabase
    .from('jobs')
    .select('*', { count: 'exact' })
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .range((page - 1) * perPage, page * perPage - 1);

  if (params.q) {
    query = query.ilike('title', `%${params.q}%`);
  }
  if (params.location) {
    query = query.eq('location', params.location);
  }
  if (params.type) {
    query = query.eq('job_type', params.type);
  }

  const [{ data: jobs, count }, { data: locationRows }] = await Promise.all([
    query,
    supabase.from('jobs').select('location').eq('status', 'active'),
  ]);

  const uniqueLocations = [
    ...new Set(locationRows?.map((r) => r.location) || []),
  ].sort();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://solvifie.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Jobs',
        item: 'https://solvifie.com/jobs',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <JobListings
        jobs={jobs || []}
        totalCount={count || 0}
        currentPage={page}
        perPage={perPage}
        locations={uniqueLocations}
        filters={params}
      />
    </>
  );
}
