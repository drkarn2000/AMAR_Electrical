'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, ShieldCheck, X } from 'lucide-react';
import { useState } from 'react';
import { navigation, siteConfig } from '@/lib/constants';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname?.startsWith('/admin')) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-[0_12px_34px_rgba(15,23,42,0.07)] backdrop-blur-2xl">
      <div className="hidden border-b border-slate-200/70 bg-slate-950 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300 lg:block">
        <div className="container-shell flex h-8 items-center justify-between">
          <span>Engineer-led electrical solutions</span>
          <span className="inline-flex items-center gap-2 text-slate-400">
            <ShieldCheck size={13} className="text-amber-300" />
            Trusted service across homes and businesses
          </span>
        </div>
      </div>

      <div className="container-shell relative flex items-center justify-between gap-6 py-3">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="PowerFix home">
          <Image
            src="/Logo.png"
            alt="AMR Electrical Solution"
            width={250}
            height={74}
            quality={100}
            priority
            sizes="208px"
            className="h-14 w-52 object-contain transition duration-300 group-hover:-translate-y-0.5"
          />
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 p-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-underline relative rounded-full px-3.5 py-2 text-[13px] font-bold tracking-[0.01em] transition ${
                  isActive ? 'bg-[#1d4ed8] text-white shadow-[0_6px_16px_rgba(29,78,216,0.28)] ring-1 ring-blue-300/80' : 'text-slate-600 hover:bg-white/70 hover:text-[#0f172a]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl lg:hidden">
          <div className="container-shell flex flex-col gap-3 py-4">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#1d4ed8]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#0f172a] px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
