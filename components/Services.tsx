import { ArrowUpRight, Bolt, Building2, Cable, LampDesk, Wrench } from 'lucide-react';
import Link from 'next/link';
import { serviceItems } from '@/lib/constants';

const icons = [Bolt, Cable, Building2, LampDesk, Wrench];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="section-heading mt-5">End-to-End Electrical Solutions</h2>
          <p className="mt-4 text-base text-slate-600">From new installation to fault resolution and ongoing maintenance, we cover complete electrical requirements for modern spaces.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={service} className="group rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 text-brand-700">
                    <Icon size={20} />
                  </div>
                  <ArrowUpRight size={18} className="text-slate-400 transition group-hover:text-brand-600" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{service}</h3>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5">
            Explore Full Service List <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
