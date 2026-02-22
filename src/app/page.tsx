import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import WhySolvifie, { BookingSection } from "@/components/WhySolvifie";
import Partners from "@/components/Partners";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "Solvifie Consultancy",
    "image": "https://solvifie.com/logo.png",
    "@id": "https://solvifie.com",
    "url": "https://solvifie.com",
    "telephone": "+917010264814",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8, Venkata Balaji Apartment, Ponniamman Kovil Street, Aalapakkam",
      "addressLocality": "Chennai",
      "postalCode": "600116",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0382,
      "longitude": 80.1585
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Partners />
      <ServicesOverview />
      <WhySolvifie />
      <Testimonials />
      <BookingSection />
    </>
  );
}

