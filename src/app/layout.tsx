import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/components.css";
import "../styles/pages.css";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollUI from "@/components/ScrollUI";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.github }],
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Remote Developer",
    "Bangladesh",
    "Portfolio",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Marks the page as JS-enabled so scroll animations only hide content when they can run. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <ScrollUI />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
