import Image from 'next/image';
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full bg-brand-200/40 blur-3xl md:block" />
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-soft">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                alt="Engineer reviewing electrical installation"
                width={900}
                height={1100}
                className="h-[540px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">About Us</span>
          <h2 className="section-heading mt-5 max-w-xl">Powering Your World With Safety & Expertise</h2>
          <p className="mt-5 max-w-xl text-base text-slate-600">
            With 10+ years of experience, we provide engineer-managed electrical services designed for safety, reliability and long-term performance.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Professional electrical installation',
              'Electrical repair and maintenance',
              'Residential, commercial and industrial solutions',
              'Engineer-managed service'
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 text-brand-600" size={20} />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-white p-5 shadow-soft">
              <ShieldCheck className="text-brand-600" size={26} />
              <h3 className="mt-4 text-xl font-bold text-slate-900">Safe by Design</h3>
              <p className="mt-2 text-sm text-slate-600">Every job prioritizes code-compliant installation and long-term protection.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-brand-50 p-5 shadow-soft">
              <Cpu className="text-brand-600" size={26} />
              <h3 className="mt-4 text-xl font-bold text-slate-900">Modern Systems</h3>
              <p className="mt-2 text-sm text-slate-600">Smart electrical planning to support efficient power flow and dependable operation.</p>
            </div>
          </div>

          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm transition hover:border-brand-200 hover:text-brand-700">
            Learn More <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
