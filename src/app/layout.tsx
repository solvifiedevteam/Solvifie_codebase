import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solvifie Consultancy | Building Teams. Powering Growth.",
  description: "Chennai-based Recruitment & Development Consultancy for Scalable Success. Specializing in Talent Acquisition, Executive Hiring, and Workforce Planning.",
  keywords: "HR consultancy in Chennai, Recruitment agency Chennai, Staffing solutions Chennai, Hire employees in Chennai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-primary selection:text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

