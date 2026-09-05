import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: {
    default: 'AMR Electrical | Premium Electrical Sales, Installation & Repair',
    template: '%s | AMR Electrical'
  },
  description: siteConfig.shortDescription,
  keywords: ['electrical services', 'wiring', 'installation', 'repair', 'electrical engineering'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'AMR Electrical',
    description: siteConfig.shortDescription,
    url: siteConfig.canonicalUrl,
    siteName: 'AMR Electrical',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMR Electrical',
    description: siteConfig.shortDescription
  }
};

export const viewport: Viewport = {
  themeColor: '#0a1c35'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} bg-slate-50 text-slate-900 antialiased`}>
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.12),transparent_30%)]" />
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
