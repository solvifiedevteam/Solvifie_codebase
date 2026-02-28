import type { Metadata } from 'next';
import ServicesContent from '@/components/ServicesContent';

export const metadata: Metadata = {
  title: 'HR & Recruitment Services in Chennai | Solvifie Consultancy',
  description:
    'Solvifie Consultancy offers talent acquisition, executive hiring, contract staffing, RPO, resume enhancement, and career consulting services in Chennai. 500+ placements. 8+ years of expertise.',
  keywords: [
    'recruitment services Chennai',
    'HR consulting services Chennai',
    'talent acquisition Chennai',
    'executive hiring Chennai',
    'contract staffing Chennai',
    'RPO services Chennai',
    'resume enhancement Chennai',
    'career consulting Chennai',
    'permanent staffing Chennai',
    'workforce planning India',
    'job placement services Chennai',
    'interview preparation Chennai',
  ],
  alternates: {
    canonical: 'https://solvifie.com/services',
  },
  openGraph: {
    title: 'Recruitment & HR Services in Chennai | Solvifie Consultancy',
    description:
      'Comprehensive recruitment and HR solutions for employers and job seekers in Chennai. Talent acquisition, executive hiring, contract staffing, RPO, career placement & more.',
    url: 'https://solvifie.com/services',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Solvifie Consultancy Services — Recruitment & HR Solutions Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recruitment & HR Services in Chennai | Solvifie Consultancy',
    description:
      'Talent acquisition, executive hiring, contract staffing & career services. 500+ placements. 8+ years of expertise in Chennai.',
    images: ['/og-image.png'],
  },
};

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Solvifie Consultancy — Recruitment & HR Services',
  description:
    'Comprehensive recruitment and HR consulting services in Chennai, India — for both employers and job seekers.',
  url: 'https://solvifie.com/services',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        '@id': 'https://solvifie.com/services#talent-acquisition',
        name: 'Talent Acquisition',
        description:
          'Full-cycle, end-to-end recruitment for permanent roles — sourcing, screening, interviewing, and onboarding high-quality candidates aligned with your culture and objectives.',
        provider: { '@type': 'Organization', name: 'Solvifie Consultancy' },
        areaServed: 'Chennai, India',
        url: 'https://solvifie.com/services#talent-acquisition',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        '@id': 'https://solvifie.com/services#executive-hiring',
        name: 'Executive Hiring',
        description:
          'Specialised C-suite and senior leadership recruitment. We identify, assess, and secure transformational leaders for your organisation.',
        provider: { '@type': 'Organization', name: 'Solvifie Consultancy' },
        areaServed: 'Chennai, India',
        url: 'https://solvifie.com/services#executive-hiring',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        '@id': 'https://solvifie.com/services#contract-staffing',
        name: 'Contract Staffing',
        description:
          'Flexible workforce solutions for project-based, seasonal, or specialised skill requirements — with quick deployment and zero long-term commitment.',
        provider: { '@type': 'Organization', name: 'Solvifie Consultancy' },
        areaServed: 'Chennai, India',
        url: 'https://solvifie.com/services#contract-staffing',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        '@id': 'https://solvifie.com/services#rpo',
        name: 'Recruitment Process Outsourcing (RPO)',
        description:
          'We manage your entire recruitment function — acting as an embedded extension of your HR team for complete hiring lifecycle management.',
        provider: { '@type': 'Organization', name: 'Solvifie Consultancy' },
        areaServed: 'Chennai, India',
        url: 'https://solvifie.com/services#rpo',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        '@id': 'https://solvifie.com/services#career-placement',
        name: 'Career Placement',
        description:
          "Personalised job matching and placement services for job seekers — connecting you with exclusive openings across Chennai's top employers.",
        provider: { '@type': 'Organization', name: 'Solvifie Consultancy' },
        areaServed: 'Chennai, India',
        url: 'https://solvifie.com/services#career-placement',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Service',
        '@id': 'https://solvifie.com/services#resume-enhancement',
        name: 'Resume Enhancement',
        description:
          'ATS-optimised resume writing and review that makes your profile stand out to recruiters and pass automated screening systems.',
        provider: { '@type': 'Organization', name: 'Solvifie Consultancy' },
        areaServed: 'Chennai, India',
        url: 'https://solvifie.com/services#resume-enhancement',
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'Service',
        '@id': 'https://solvifie.com/services#interview-preparation',
        name: 'Interview Preparation',
        description:
          'Structured interview coaching including mock sessions, industry-specific questions, salary negotiation strategies, and confidence building.',
        provider: { '@type': 'Organization', name: 'Solvifie Consultancy' },
        areaServed: 'Chennai, India',
        url: 'https://solvifie.com/services#interview-preparation',
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'Service',
        '@id': 'https://solvifie.com/services#career-consulting',
        name: 'Career Consulting',
        description:
          'One-on-one career strategy sessions to help you define your path, identify growth opportunities, and achieve your professional goals.',
        provider: { '@type': 'Organization', name: 'Solvifie Consultancy' },
        areaServed: 'Chennai, India',
        url: 'https://solvifie.com/services#career-consulting',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solvifie.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://solvifie.com/services' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What recruitment services does Solvifie Consultancy offer in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solvifie offers talent acquisition, executive hiring, contract staffing, and Recruitment Process Outsourcing (RPO) for employers. For candidates, we provide career placement, resume enhancement, interview preparation, and career consulting services.',
      },
    },
    {
      '@type': 'Question',
      name: "How does Solvifie's talent acquisition process work?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our process has four stages: Discovery (understanding your culture and requirements), Sourcing (leveraging our 10,000+ candidate network), Vetting (multi-stage screening, cultural fit assessment, background checks), and Placement (supported onboarding and post-placement follow-up). Most placements are completed within 2–4 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer contract staffing services in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our contract staffing solutions provide flexible, pre-vetted professionals for project-based, seasonal, or specialised needs. We can deploy staff quickly without long-term employment commitments, making it ideal for growing businesses and project-driven organisations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Recruitment Process Outsourcing (RPO)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "RPO is when Solvifie manages your entire recruitment function as an embedded extension of your HR team. We handle job profiling, sourcing, screening, interviewing, offer management, and onboarding — giving you a scalable, cost-effective hiring solution without building an in-house team.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can Solvifie help me find a job in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We provide personalised career placement services including job matching with exclusive openings, resume enhancement, interview coaching, and career strategy consulting. Register with us and our team will match you with opportunities that align with your skills and goals.',
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicesContent />
    </>
  );
}
