import type { Metadata } from "next";
import { IBM_Plex_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { getMessages } from "next-intl/server";

const montserrat = IBM_Plex_Sans({
  variable: "--Montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

type Props = {
  children: React.ReactNode;
};

const inter = Quicksand({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Ecom webiste – Full-Service Next.js Agency for Scalable Design, Development & Growth",
  description:
    "TetraFlow is a premium Next.js agency delivering future-ready websites, conversion-focused design, smart social media marketing, and business automation. Trusted by ambitious brands to move fast, scale smarter, and grow stronger.",
  keywords: [
    "Next.js Agency",
    "Web Design",
    "Next.js Development",
    "Business Automation",
    "SMMA Services",
    "Scalable Web Solutions",
    "Conversion-Focused Design",
  ],
  openGraph: {
    title: "TetraFlow – Next.js Design & Development Experts",
    description:
      "Full-service Next.js agency delivering conversion-focused design, scalable development, and results-driven marketing automation.",
    url: "https://tetra-flow2.vercel.app/",
    siteName: "TetraFlow",
    images: [
      {
        url: "https://tetra-flow2.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TetraFlow – Next.js Agency Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TetraFlow – Next.js Design & Development Experts",
    description:
      "Next.js websites built for speed, growth, and scale. From design to launch, we help your business thrive online.",
    images: ["https://tetra-flow2.vercel.app/og-image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const massages = await getMessages();
  return (
    <NextIntlClientProvider messages={massages}>
      <html lang="en">
        <body
          className={`${montserrat.variable} ${inter.variable} antialiased`}
        >
          <Navbar />
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
