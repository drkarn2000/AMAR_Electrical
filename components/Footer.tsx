'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Globe, MapPin, MessageCircle, Phone, Send, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) return null;

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Our Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-slate-800/80 bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,14,29,0.95)_0%,rgba(5,25,48,0.86)_42%,rgba(6,31,55,0.7)_100%)]" />
      <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/footer1.png')" }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.2),transparent_28%)]" />

      <div className="relative container-shell py-11 sm:py-14">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          <div className="xl:pr-8">
            <div className="inline-flex overflow-hidden rounded-xl bg-white p-2 shadow-[0_18px_45px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(56,189,248,0.24)]">
              <Image
                src="/Logo.png"
                alt="AMR Electrical Solution"
                width={250}
                height={74}
                quality={100}
                sizes="256px"
                className="h-16 w-64 object-contain"
              />
            </div>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-100/90">
              {siteConfig.shortDescription}
            </p>

            <div className="mt-4 flex gap-3">
              {[Globe, MessageCircle, Send, ShieldCheck].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social link"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition duration-300 hover:border-blue-300 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-sky-100/90">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-100/90">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-sky-100/90">Our Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-100/90">
              <li>Home Wiring</li>
              <li>Commercial Installation</li>
              <li>Repair & Maintenance</li>
              <li>Panel Installation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-sky-100/90">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-100/90">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-amber-300" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-amber-300" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck size={16} className="mt-0.5 text-amber-300" />
                <span>{siteConfig.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-4 text-sm text-slate-100/85">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {siteConfig.companyName}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="transition hover:text-white">Terms & Conditions</Link>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <a
                href="https://reinsoft.tech/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-sky-200 transition hover:text-amber-300"
              >
                Designed &amp; developed by REINSOFT IT SOLUTIONS
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
