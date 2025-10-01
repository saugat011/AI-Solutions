import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./user/components/common/Navbar";
import Footer from "./user/components/common/Footer";



export const metadata: Metadata = {
  title: "AI-Solutions | Empowering Digital Employee Experience",
  description:
    "AI-Solutions provides AI-powered virtual assistants, prototyping tools, and innovative software solutions to transform the digital workplace.",
  keywords: [
    "AI Solutions",
    "Virtual Assistant",
    "AI-powered Prototyping",
    "Digital Employee Experience",
  ],
  authors: [{ name: "AI-Solutions Team" }],
  openGraph: {
    title: "AI-Solutions",
    description:
      "Transforming businesses with AI-powered virtual assistants and software solutions.",
    url: "https://ai-solutions.com",
    siteName: "AI-Solutions",
    images: [
      {
        url: "https://placehold.co/1200x630.png", // logo/banner
        width: 1200,
        height: 630,
        alt: "AI-Solutions Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main> {children}</main>
      </body>
    </html>
  );
}
