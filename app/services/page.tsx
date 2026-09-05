import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constants';
import { allServices } from '@/lib/services-data';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { ServicesEmergencyBanner } from '@/components/services/ServicesEmergencyBanner';

export const metadata: Metadata = {
  title: 'Our Electrical Services | Complete Electrical Solutions for Every Need',
  description:
    'Complete electrical wiring, maintenance, fault finding, panel installation, and 24/7 emergency repair solutions for homes, businesses, and industrial units by certified engineers.',
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/services`
  },
  openGraph: {
    title: 'Our Electrical Services | PowerFix Electrical Solutions',
    description:
      'Safe, reliable and professional electrical services for residential, commercial, and industrial spaces. Certified engineers, transparent pricing, 24/7 emergency support.',
    url: `${siteConfig.canonicalUrl}/services`,
    type: 'website'
  }
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Electrical Services',
    provider: {
      '@type': 'Electrician',
      name: siteConfig.companyName,
      telephone: siteConfig.phone,
      url: siteConfig.canonicalUrl
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Installation and Repair Services',
      itemListElement: allServices.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription
        },
        position: index + 1
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        {/* 1. Premium Interactive Hero Section with Trust Indicators & Engineer */}
        <ServicesHero />

        {/* 2. Services Showcase ("What We Do") with Interactive Filters and 19 Cards */}
        <ServicesGrid />

        {/* 3. Emergency Support Banner (24x7 Assistance & 4 Feature Columns) */}
        <ServicesEmergencyBanner />
      </main>
    </>
  );
}
