import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: "About Solvifie Consultancy | Chennai's Trusted HR & Recruitment Firm",
  description:
    "Discover Solvifie Consultancy — Chennai's premier recruitment & HR consulting firm with 8+ years of experience, 500+ successful placements, and partnerships with 200+ companies across India.",
  keywords: [
    'about Solvifie Consultancy',
    'HR consultancy Chennai history',
    'recruitment firm Chennai',
    'best HR consultancy Chennai',
    'Solvifie team',
    'Chennai recruitment experts',
    'HR consulting firm India',
    'talent acquisition specialists Chennai',
    'top recruitment agency Chennai about',
    'Solvifie consultancy story',
  ],
  alternates: {
    canonical: 'https://solvifie.com/about',
  },
  openGraph: {
    title: 'About Solvifie Consultancy | 8+ Years of HR Excellence in Chennai',
    description:
      "Meet the team behind Chennai's most trusted recruitment & HR consultancy. 500+ placements, 200+ client companies, and a proven process for finding the perfect fit.",
    url: 'https://solvifie.com/about',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Solvifie Consultancy — Chennai HR & Recruitment Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Solvifie Consultancy | 8+ Years of HR Excellence',
    description:
      '500+ placements. 200+ client companies. 8+ years of expertise. Learn the Solvifie story.',
    images: ['/og-image.png'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  '@id': 'https://solvifie.com/#organization',
  name: 'Solvifie Consultancy',
  url: 'https://solvifie.com',
  logo: 'https://solvifie.com/logo.png',
  description:
    "Solvifie Consultancy is Chennai's leading Recruitment & HR Consulting firm specialising in talent acquisition, executive hiring, contract staffing, and workforce planning with 8+ years of experience and 500+ successful placements.",
  foundingDate: '2016',
  areaServed: [
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'Country', name: 'India' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8, Venkata Balaji Apartment, Ponniamman Kovil Street, Aalapakkam',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600116',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+918248020159',
    email: 'business@solvifie.com',
    contactType: 'Customer Service',
    availableLanguage: ['en', 'ta'],
  },
  sameAs: [
    'https://www.linkedin.com/company/solvifie-consultancy',
    'https://www.facebook.com/solvifie',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solvifie.com' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://solvifie.com/about' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Solvifie Consultancy different from other recruitment firms in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solvifie combines deep local market expertise with global recruitment standards. We offer personalised solutions, rigorous cultural-fit assessments, and post-placement support — ensuring long-term success for both employers and candidates. Our consultants are industry veterans with 8+ years of hands-on experience in the Chennai market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you serve both employers and job seekers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide end-to-end recruitment and HR solutions for organisations of all sizes, as well as career consulting, resume enhancement, and placement services for job seekers across Chennai and India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which industries does Solvifie specialise in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have deep expertise across IT & technology, finance, healthcare, manufacturing, retail, and professional services. Our sector-specific consultants understand domain nuances and source candidates with the right technical and cultural fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the recruitment process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most placements are completed within 2–4 weeks. Executive and senior leadership searches may take longer to ensure the ideal fit. We guarantee full transparency and regular updates throughout the process.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get started with Solvifie Consultancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply call us at +91 8248020159, WhatsApp us, or fill out the contact form on our website. We will schedule a free consultation to understand your requirements and propose a tailored recruitment strategy.',
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AboutContent />
    </>
  );
}
