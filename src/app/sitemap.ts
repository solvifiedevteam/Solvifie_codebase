import type { MetadataRoute } from 'next';
import { createAdminClient } from '@/lib/supabase/admin';
import { blogPosts } from '@/lib/blog/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://solvifie.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/jobs`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Dynamic job pages from Supabase
  let jobPages: MetadataRoute.Sitemap = [];
  try {
    const supabase = createAdminClient();
    const { data: jobs } = await supabase
      .from('jobs')
      .select('slug, updated_at')
      .eq('status', 'active');

    if (jobs) {
      jobPages = jobs.map((job) => ({
        url: `${baseUrl}/jobs/${job.slug}`,
        lastModified: new Date(job.updated_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    }
  } catch (err) {
    console.error('Sitemap: failed to fetch jobs', err);
  }

  // Static blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...jobPages, ...blogPages];
}
