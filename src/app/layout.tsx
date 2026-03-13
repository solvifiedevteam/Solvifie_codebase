import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solvifie.com"),
  title: {
    default: "Solvifie Consultancy | Recruitment & HR Solutions in Chennai",
    template: "%s | Solvifie Consultancy",
  },
  description:
    "Chennai's leading Recruitment & HR Consultancy with 4+ years of expertise. Specialising in talent acquisition, executive hiring, contract staffing & workforce planning. 500+ successful placements across India.",
  keywords: [
    "HR consultancy Chennai",
    "recruitment agency Chennai",
    "staffing solutions Chennai",
    "executive hiring Chennai",
    "talent acquisition Chennai",
    "workforce planning India",
    "HR services India",
    "placement agency Chennai",
    "job consultancy Chennai",
    "contract staffing Chennai",
    "IT recruitment Chennai",
    "best recruitment agency Chennai",
    "top HR consultancy Tamil Nadu",
    "executive search firm Chennai",
    "permanent staffing Chennai",
  ],
  authors: [{ name: "Solvifie Consultancy", url: "https://solvifie.com" }],
  creator: "Solvifie Consultancy",
  publisher: "Solvifie Consultancy",
  category: "Business & HR Consultancy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://solvifie.com",
    siteName: "Solvifie Consultancy",
    title: "Solvifie Consultancy | Building Teams. Powering Growth.",
    description:
      "Chennai's leading Recruitment & HR Consultancy. Expert talent acquisition, executive hiring & workforce planning. 500+ placements. 4+ years of experience across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvifie Consultancy | Building Teams. Powering Growth.",
    description:
      "Chennai's leading Recruitment & HR Consultancy. 500+ successful placements. 4+ years of expertise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://solvifie.com",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0055d4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
