import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Solvifie Consultancy | HR & Recruitment Experts in Chennai',
  description:
    'Get in touch with Solvifie Consultancy — Chennai\'s leading HR & recruitment firm. Call +91 8248020159, WhatsApp us, or fill out our contact form. Free consultation available.',
  keywords: [
    'contact Solvifie Consultancy',
    'HR consultancy contact Chennai',
    'recruitment agency contact Chennai',
    'hire talent Chennai contact',
    'job placement contact Chennai',
    'Solvifie phone number',
    'Solvifie email address',
    'Solvifie office Chennai',
    'book HR consultation Chennai',
    'free recruitment consultation Chennai',
  ],
  alternates: {
    canonical: 'https://solvifie.com/contact',
  },
  openGraph: {
    title: 'Contact Solvifie Consultancy | Free HR & Recruitment Consultation',
    description:
      'Reach out to Chennai\'s most trusted recruitment & HR consultancy. Book a free consultation, call +91 8248020159, or WhatsApp us today.',
    url: 'https://solvifie.com/contact',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Contact Solvifie Consultancy — Chennai HR & Recruitment Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Solvifie Consultancy | Free HR Consultation in Chennai',
    description:
      'Call, WhatsApp, or email Chennai\'s leading recruitment & HR firm. Free consultation available.',
    images: ['/opengraph-image'],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  '@id': 'https://solvifie.com/#organization',
  name: 'Solvifie Consultancy',
  url: 'https://solvifie.com',
  logo: 'https://solvifie.com/logo.png',
  image: 'https://solvifie.com/opengraph-image',
  description:
    "Chennai's leading Recruitment & HR Consulting firm with 4+ years of expertise in talent acquisition, executive hiring, contract staffing, and workforce planning.",
  telephone: '+918248020159',
  email: 'business@solvifie.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8, Venkata Balaji Apartment, Ponniamman Kovil Street, Aalapakkam',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600116',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0382,
    longitude: 80.1585,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+918248020159',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'ta'],
    },
    {
      '@type': 'ContactPoint',
      email: 'business@solvifie.com',
      contactType: 'customer support',
    },
  ],
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
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://solvifie.com/contact' },
  ],
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://solvifie.com/contact#webpage',
  name: 'Contact Solvifie Consultancy',
  description:
    "Contact Chennai's leading recruitment & HR consultancy for talent acquisition, executive hiring, career consulting, and more. Free consultation available.",
  url: 'https://solvifie.com/contact',
  isPartOf: { '@id': 'https://solvifie.com/#website' },
  about: { '@id': 'https://solvifie.com/#organization' },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactContent />
    </>
  );
}
