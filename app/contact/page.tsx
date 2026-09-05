'use client';

import { Clock3, Mail, MapPin, MessageCircleMore, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { siteConfig } from '@/lib/constants';

const formSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Please provide a message')
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = (values: FormValues) => {
    console.log('Form submitted', values);
  };

  return (
    <main className="bg-[#f5f8ff] text-slate-900">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(2, 13, 34, 0.85) 0%, rgba(3, 22, 45, 0.72) 36%, rgba(11, 69, 128, 0.52) 100%), url('/contact_hero1.png')"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),transparent_25%)]" />

        <div className="container-shell relative z-10 py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex animate-[fadeInUp_0.6s_ease-out] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#facc15]" />
              Contact Us
            </div>

            <h1 className="animate-[fadeInUp_0.8s_ease-out] text-4xl font-black leading-[0.92] tracking-[-0.07em] sm:text-5xl lg:text-7xl">
              Let’s discuss your
              <span className="block text-[#dbeafe]">next electrical project.</span>
            </h1>

            <p className="mt-6 max-w-xl animate-[fadeInUp_0.9s_ease-out] text-lg leading-8 text-slate-200">
              Tell us your requirements and our expert team will help you with a reliable, safe, and efficient electrical solution tailored to your needs.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="inline-flex animate-[fadeInUp_1s_ease-out] items-center justify-center gap-2 rounded-full bg-[#facc15] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-slate-900 shadow-[0_18px_40px_rgba(250,204,21,0.3)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_45px_rgba(250,204,21,0.38)]"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex animate-[fadeInUp_1.1s_ease-out] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_18px_35px_rgba(148,163,184,0.18)]"
              >
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell relative z-20 -mt-10 pb-20">
        <div
          className="relative grid gap-8 overflow-hidden rounded-[2rem] border border-sky-100 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[0.85fr_1.15fr]"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(8, 15, 28, 0.68), rgba(12, 63, 110, 0.52)), url('/contact_hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),transparent_30%)]" />
          <div className="relative z-10 space-y-5">
            {[
              { icon: Phone, label: 'Call', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s+/g, '')}`, extra: 'text-sky-700' },
              { icon: MessageCircleMore, label: 'WhatsApp', value: 'Chat instantly', href: siteConfig.whatsapp, extra: 'text-sky-700' },
              { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, extra: 'text-sky-700' },
              { icon: MapPin, label: 'Address', value: siteConfig.address, href: '#', extra: 'text-slate-600' },
              { icon: Clock3, label: 'Business Hours', value: siteConfig.businessHours, href: '#', extra: 'text-slate-600' }
            ].map(({ icon: Icon, label, value, href, extra }, index) => (
              <div
                key={label}
                className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(14,116,144,0.08)]"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both` }}
              >
                <div className="flex items-center gap-3 text-slate-900">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 transition duration-300 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-bold">{label}</span>
                </div>
                {href === '#' ? (
                  <p className={`mt-4 text-base leading-7 ${extra}`}>{value}</p>
                ) : (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={`mt-4 block text-xl font-black tracking-[-0.04em] ${extra} transition duration-300 group-hover:text-sky-600`}>
                    {value}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/40 bg-white/15 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(14,116,144,0.22)] sm:p-7">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-35"
              style={{
                backgroundImage: "url('/contact_hero.png')",
                backgroundPosition: 'center center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-white/40 to-sky-100/35" />
            <div className="relative z-10 mb-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-800">Get in touch</div>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-900 sm:text-4xl">
                Request a free quote
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                  <input id="name" {...register('name')} className="w-full rounded-2xl border border-white/50 bg-white/45 px-4 py-3.5 text-slate-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] outline-none backdrop-blur-sm transition focus:border-sky-400 focus:bg-white/70 focus:ring-4 focus:ring-sky-100" placeholder="Your name" />
                  {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">Phone</label>
                  <input id="phone" {...register('phone')} className="w-full rounded-2xl border border-white/50 bg-white/45 px-4 py-3.5 text-slate-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] outline-none backdrop-blur-sm transition focus:border-sky-400 focus:bg-white/70 focus:ring-4 focus:ring-sky-100" placeholder="Your phone" />
                  {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                <input id="email" {...register('email')} className="w-full rounded-2xl border border-white/50 bg-white/45 px-4 py-3.5 text-slate-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] outline-none backdrop-blur-sm transition focus:border-sky-400 focus:bg-white/70 focus:ring-4 focus:ring-sky-100" placeholder="Your email" />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                <textarea id="message" rows={5} {...register('message')} className="w-full rounded-2xl border border-white/50 bg-white/45 px-4 py-3.5 text-slate-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] outline-none backdrop-blur-sm transition focus:border-sky-400 focus:bg-white/70 focus:ring-4 focus:ring-sky-100" placeholder="Tell us about your requirement" />
                {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-3.5 text-base font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.25)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(37,99,235,0.32)] active:scale-[0.99]">
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
