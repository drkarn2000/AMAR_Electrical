'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, LockKeyhole, Zap } from 'lucide-react';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const isLocalBypass = process.env.NEXT_PUBLIC_ADMIN_DEV_BYPASS === 'true';
      const localEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      const localPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

      if (isLocalBypass && email === localEmail && password === localPassword) {
        window.location.assign('/admin');
        return;
      }

      const supabase = createSupabaseBrowserClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) throw signInError;
      window.location.assign('/admin');
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : 'Unable to sign in. Check your details.');
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071a2f] px-5 py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.3),transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.16),transparent_32%)]" />
      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl lg:grid-cols-[1fr_0.9fr]">
        <div className="hidden bg-gradient-to-br from-[#1d4ed8] via-[#123a9c] to-[#071a2f] p-12 text-white lg:block">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-slate-950 shadow-lg"><Zap size={23} fill="currentColor" /></div>
          <p className="mt-20 text-xs font-bold uppercase tracking-[0.24em] text-blue-200">PowerFix control room</p>
          <h1 className="mt-4 max-w-sm text-4xl font-black leading-tight tracking-tight">Everything your electrical business needs, in one place.</h1>
          <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/80">Manage pages, services, products, projects, reviews, media and your team from a single workspace.</p>
        </div>

        <div className="p-7 sm:p-12">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-slate-950 lg:hidden"><Zap size={18} className="text-blue-600" fill="currentColor" /> PowerFix Admin</div>
          <div className="mt-8 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 lg:mt-0"><LockKeyhole size={20} /></div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">Secure sign in</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Welcome back</h2>
          <p className="mt-2 text-sm text-slate-500">Sign in to manage your website.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block text-sm font-bold text-slate-700">Email<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="admin@example.com" /></label>
            <label className="block text-sm font-bold text-slate-700">Password<input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="••••••••" /></label>
            {error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
            <button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3.5 text-sm font-extrabold text-white transition hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60">{loading ? 'Signing in...' : 'Sign in'} <ArrowRight size={16} /></button>
          </form>
        </div>
      </section>
    </main>
  );
}
