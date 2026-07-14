import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://asiagate.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Asia Gate — прямые поставки товаров из Китая в Россию",
    template: "%s | Asia Gate",
  },
  description:
    "Asia Gate — логистическая и торговая компания полного цикла. Прямые поставки товаров из Китая в Россию: закупка, контроль качества, таможенное оформление, доставка «под ключ».",
  keywords: [
    "поставки из Китая",
    "логистика Китай Россия",
    "карго доставка",
    "закупка товаров в Китае",
    "таможенное оформление",
    "оптовые поставки Китай",
    "Asia Gate",
  ],
  authors: [{ name: "Asia Gate" }],
  creator: "Asia Gate",
  publisher: "Asia Gate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Asia Gate",
    title: "Asia Gate — прямые поставки товаров из Китая в Россию",
    description:
      "Логистика и торговля полного цикла: закупка, контроль качества, доставка «под ключ» из Китая в Россию.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asia Gate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asia Gate — прямые поставки товаров из Китая в Россию",
    description:
      "Логистика и торговля полного цикла: закупка, контроль качества, доставка «под ключ» из Китая в Россию.",
    images: ["/og-image.jpg"],
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
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-[#00D4A5] selection:text-[#0A0A0A]">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <Header />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
