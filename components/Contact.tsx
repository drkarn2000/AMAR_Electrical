'use client';

import { Clock3, Mail, MapPin, MessageCircleMore, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { serviceConfig } from '@/lib/constants';

const formSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Please provide a message')
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const onSubmit = async (values: FormValues) => {
    setSubmitState('sending');
    try {
      const response = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      if (!response.ok) throw new Error('Request failed');
      reset();
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container-shell">
        <div className="mb-10 text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="section-heading mt-5">Request A Free Quote</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-[1.8rem] border border-slate-200 bg-white/80 p-5 shadow-soft">
              <div className="flex items-center gap-3 text-slate-900">
                <Phone className="text-brand-600" size={18} />
                <span className="font-semibold">Call</span>
              </div>
              <a href={`tel:${serviceConfig.phone.replace(/\s+/g, '')}`} className="mt-3 block text-xl font-bold text-brand-700">{serviceConfig.phone}</a>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 bg-white/80 p-5 shadow-soft">
              <div className="flex items-center gap-3 text-slate-900">
                <MessageCircleMore className="text-brand-600" size={18} />
                <span className="font-semibold">WhatsApp</span>
              </div>
              <a href={serviceConfig.whatsapp} target="_blank" rel="noreferrer" className="mt-3 block text-xl font-bold text-brand-700">Chat on WhatsApp</a>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 bg-white/80 p-5 shadow-soft">
              <div className="flex items-center gap-3 text-slate-900">
                <Mail className="text-brand-600" size={18} />
                <span className="font-semibold">Email</span>
              </div>
              <a href={`mailto:${serviceConfig.email}`} className="mt-3 block text-xl font-bold text-brand-700">{serviceConfig.email}</a>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 bg-white/80 p-5 shadow-soft">
              <div className="flex items-center gap-3 text-slate-900">
                <MapPin className="text-brand-600" size={18} />
                <span className="font-semibold">Address</span>
              </div>
              <p className="mt-3 text-base text-slate-600">{serviceConfig.address}</p>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 bg-white/80 p-5 shadow-soft">
              <div className="flex items-center gap-3 text-slate-900">
                <Clock3 className="text-brand-600" size={18} />
                <span className="font-semibold">Business Hours</span>
              </div>
              <p className="mt-3 text-base text-slate-600">{serviceConfig.businessHours}</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-soft sm:p-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                  <input id="name" {...register('name')} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" placeholder="Your name" />
                  {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">Phone</label>
                  <input id="phone" {...register('phone')} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" placeholder="Your phone" />
                  {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                <input id="email" {...register('email')} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" placeholder="Your email" />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                <textarea id="message" rows={5} {...register('message')} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" placeholder="Tell us about your requirement" />
                {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              {submitState === 'success' && <p role="status" className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Thanks. Your inquiry has been sent.</p>}
              {submitState === 'error' && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">We could not send your inquiry right now. Please try again or call us directly.</p>}
              <button type="submit" disabled={submitState === 'sending'} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60">
                <Send size={16} />
                {submitState === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
