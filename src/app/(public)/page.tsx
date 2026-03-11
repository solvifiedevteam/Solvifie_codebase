import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import WhySolvifie, { BookingSection } from "@/components/WhySolvifie";
import Partners from "@/components/Partners";
import StatsSection from "@/components/StatsSection";
import FAQ from "@/components/FAQ";
import ProfessionalCTA from "@/components/ProfessionalCTA";

export const metadata: Metadata = {
  title: "Solvifie Consultancy | Recruitment & HR Solutions in Chennai",
  description:
    "Solvifie — Hiring. Simplified. Delivered. A trusted recruitment partner delivering skilled, pre-screened candidates for IT & Non-IT roles, contract & permanent staffing, US recruitment, and bulk hiring. Serving businesses across India and globally.",
  alternates: {
    canonical: "https://solvifie.com",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Solvifie Consultancy",
    image: "https://solvifie.com/logo.jpeg",
    "@id": "https://solvifie.com/#organization",
    url: "https://solvifie.com",
    telephone: "+918248020159",
    email: "business@solvifie.com",
    description:
      "Solvifie Recruitment Services — a professional talent acquisition partner delivering skilled, pre-screened, and job-ready candidates. IT & Non-IT hiring, contract & permanent staffing, US & global recruitment, and bulk hiring solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "8, Venkata Balaji Apartment, Ponniamman Kovil Street, Aalapakkam",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600116",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0382,
      longitude: 80.1585,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.linkedin.com/company/solvifie/",
      "https://www.instagram.com/solvifie",
      "https://www.facebook.com/share/1GczecWCGR/",
      "https://www.youtube.com/@solvifie",
    ],
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+918248020159",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["en", "ta"],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "100",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Solvifie Consultancy Services",
    description:
      "Comprehensive recruitment and HR consulting services offered by Solvifie Consultancy in Chennai, India.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Talent Acquisition",
          description:
            "Comprehensive recruitment solutions to identify and attract top talent aligned with your company culture and strategic objectives.",
          provider: { "@type": "Organization", name: "Solvifie Consultancy" },
          areaServed: "Chennai, India",
          url: "https://solvifie.com/services#talent-acquisition",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Executive Hiring",
          description:
            "Specialised leadership recruitment for C-suite and senior management positions across industries.",
          provider: { "@type": "Organization", name: "Solvifie Consultancy" },
          areaServed: "Chennai, India",
          url: "https://solvifie.com/services#executive-hiring",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Contract Staffing",
          description:
            "Flexible, scalable workforce solutions for project-based needs, seasonal requirements, or specialised skill gaps.",
          provider: { "@type": "Organization", name: "Solvifie Consultancy" },
          areaServed: "Chennai, India",
          url: "https://solvifie.com/services#contract-staffing",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Workforce Planning",
          description:
            "Strategic HR consulting to analyse, forecast, and optimise your organisation's future talent structure.",
          provider: { "@type": "Organization", name: "Solvifie Consultancy" },
          areaServed: "Chennai, India",
          url: "https://solvifie.com/services#workforce-planning",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Career Placement",
          description:
            "Personalised job placement services matching skills, career aspirations, and values with growth-focused organisations.",
          provider: { "@type": "Organization", name: "Solvifie Consultancy" },
          areaServed: "Chennai, India",
          url: "https://solvifie.com/services#career-placement",
        },
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://solvifie.com/#webpage",
    url: "https://solvifie.com",
    name: "Solvifie Consultancy | Recruitment & HR Solutions in Chennai",
    description:
      "Chennai's leading Recruitment & HR Consultancy with 8+ years of expertise in talent acquisition, executive hiring and workforce planning.",
    isPartOf: { "@id": "https://solvifie.com/#website" },
    about: { "@id": "https://solvifie.com/#organization" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://solvifie.com",
        },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".lead"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Hero />
      <ImpactStats />
      <Partners />
      <StatsSection />
      <ServicesOverview />
      <WhySolvifie />
      <ProfessionalCTA />
      <Testimonials />
      <FAQ />
      <BookingSection />
    </>
  );
}
