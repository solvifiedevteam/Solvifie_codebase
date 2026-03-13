import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR & Recruitment Blog | Solvifie Consultancy',
  description:
    'Expert insights on hiring trends, career advice, interview preparation, salary benchmarks, and HR compliance in India. Stay updated with Solvifie Consultancy.',
  keywords: [
    'HR blog India',
    'recruitment insights Chennai',
    'hiring trends 2026',
    'career advice',
    'interview preparation tips',
    'salary insights India',
    'HR compliance',
    'talent acquisition blog',
  ],
  openGraph: {
    title: 'HR & Recruitment Blog | Solvifie Consultancy',
    description:
      'Expert insights on hiring trends, career advice, and HR best practices from Chennai\'s trusted recruitment firm.',
    url: 'https://solvifie.com/blog',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Solvifie Consultancy HR & Recruitment Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HR & Recruitment Blog | Solvifie Consultancy',
    description:
      'Expert insights on hiring trends, career advice, and HR best practices.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://solvifie.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
