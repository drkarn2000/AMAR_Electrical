'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Check, FileText, ImagePlus, LoaderCircle, X } from 'lucide-react';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser';

type PageRecord = {
  id?: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  button_text?: string;
  button_link?: string;
  image_url?: string;
  status: 'draft' | 'published';
  seo_title?: string;
  seo_description?: string;
  canonical_url?: string;
  og_image_url?: string;
  sort_order?: number;
};
type Tab = 'content' | 'images' | 'seo';

const pageDefaults: PageRecord[] = [
  { slug: 'home', title: 'Home', description: 'Hero, brand slider, projects, reviews, service areas, emergency, FAQ and CTA.', status: 'published' },
  { slug: 'about', title: 'About Us', description: 'Company story, experience, engineering expertise, trust points and brands.', status: 'published' },
  { slug: 'services', title: 'Our Services', description: '19 service cards, categories, hero, emergency CTA and service content.', status: 'published' },
  { slug: 'products', title: 'Products', description: 'Product catalogue, categories, brand filters, cards, images and CTA.', status: 'published' },
  { slug: 'blog', title: 'Blogs', description: 'Journal hero, featured article, blog grid, newsletter CTA and SEO.', status: 'published' },
  { slug: 'contact', title: 'Contact Us', description: 'Hero, phone, WhatsApp, email, address, hours and quote form settings.', status: 'published' }
];

export function WebsitePagesManager() {
  const hasSupabase = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const [pages, setPages] = useState<PageRecord[]>(pageDefaults);
  const [selected, setSelected] = useState<PageRecord | null>(null);
  const [form, setForm] = useState<PageRecord>(pageDefaults[0]);
  const [tab, setTab] = useState<Tab>('content');
  const [source, setSource] = useState<'upload' | 'url'>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [previewState, setPreviewState] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [loading, setLoading] = useState(hasSupabase);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (!hasSupabase) return;
    const supabase = createSupabaseBrowserClient();
    void supabase.from('pages').select('*').order('sort_order').then(({ data }) => {
      if (data?.length) setPages(data as PageRecord[]);
      setLoading(false);
    });
  }, [hasSupabase]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(''), 3000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function openEditor(page: PageRecord) {
    setSelected(page);
    setForm({ ...page });
    setTab('content');
    setSource('upload');
    setFile(null);
    setPreviewUrl(page.image_url ?? '');
    setPreviewState(page.image_url ? 'valid' : 'idle');
  }

  function closeEditor() {
    setSelected(null);
    setFile(null);
    setPreviewUrl('');
    setPreviewState('idle');
  }

  function updateField(key: keyof PageRecord, value: string | number) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const nextFile = event.target.files?.[0];
    if (!nextFile) return;
    setFile(nextFile);
    setPreviewUrl(URL.createObjectURL(nextFile));
    setPreviewState('valid');
  }

  function previewExternalUrl() {
    const url = form.image_url?.trim() ?? '';
    if (!url) {
      setPreviewState('invalid');
      setToast('Paste a direct public image URL first.');
      return;
    }
    setPreviewUrl(url);
    setPreviewState('idle');
  }

  async function savePage(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    try {
      if (!hasSupabase) {
        setToast('Demo mode: connect Supabase to save page changes.');
        return;
      }
      const supabase = createSupabaseBrowserClient();
      const payload = { ...form, image_url: previewUrl || form.image_url || null };
      delete payload.id;
      const { data, error } = await supabase.from('pages').upsert(payload, { onConflict: 'slug' }).select().single();
      if (error) throw error;
      if (data) setPages((current) => current.map((page) => page.slug === data.slug ? data as PageRecord : page));
      setToast('Page saved and published.');
      closeEditor();
    } catch (error) {
      setToast(error instanceof Error ? error.message : 'Unable to save this page.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#58caff]">AMR ELECTRICAL / Website Pages</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#eef6ff]">Website Pages</h2>
          <p className="mt-2 text-sm text-[#7890aa]">Control the content and visual sections of your existing frontend.</p>
        </div>
        <button type="button" onClick={() => openEditor({ slug: `page-${Date.now()}`, title: 'New Page', description: '', status: 'draft' })} className="rounded-[11px] bg-gradient-to-br from-[#ffdb39] to-[#ffba00] px-4 py-3 text-sm font-extrabold text-[#04101d] transition hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(255,201,40,0.3)] focus:outline-none focus:ring-2 focus:ring-[#ffc928]">+ New Page</button>
      </div>

      {loading ? <div className="mt-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0b1b2d] p-8 text-sm text-[#7890aa]"><LoaderCircle size={18} className="animate-spin" /> Loading website pages...</div> : <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{pages.map((page) => <PageCard key={page.slug} page={page} onClick={() => openEditor(page)} />)}</div>}

      {selected && <PageEditor form={form} selected={selected} tab={tab} source={source} file={file} previewUrl={previewUrl} previewState={previewState} saving={saving} setTab={setTab} setSource={setSource} updateField={updateField} handleFileChange={handleFileChange} previewExternalUrl={previewExternalUrl} onClose={closeEditor} onSubmit={savePage} />}
      {toast && <div role="status" className="fixed bottom-5 right-5 z-[70] rounded-[11px] border border-[#25d69b55] bg-[#09281f] px-4 py-3 text-xs font-bold text-[#baffea] shadow-[0_15px_50px_rgba(0,0,0,0.5)]">{toast}</div>}
    </div>
  );
}

function PageCard({ page, onClick }: { page: PageRecord; onClick: () => void }) {
  return <button type="button" onClick={onClick} className="group relative min-h-[155px] rounded-[17px] border border-white/10 bg-gradient-to-br from-[#0f253b]/95 to-[#071625]/95 p-5 text-left shadow-[0_22px_70px_rgba(0,0,0,0.3)] transition duration-200 hover:-translate-y-1 hover:border-[#238dff55] hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)] focus:outline-none focus:ring-2 focus:ring-[#35d8ff]">
    <span className="absolute right-4 top-4 text-[9px] font-extrabold uppercase text-[#58caff]">{page.status === 'published' ? 'LIVE' : 'DRAFT'}</span>
    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#238dff18] text-[#62c0ff]"><FileText size={19} /></span>
    <h3 className="mt-4 text-sm font-black text-[#eef6ff]">{page.title}</h3>
    <p className="mt-2 pr-2 text-[10px] leading-5 text-[#7890aa]">{page.description || 'Add a page description and content sections.'}</p>
  </button>;
}

type PageEditorProps = {
  form: PageRecord;
  selected: PageRecord;
  tab: Tab;
  source: 'upload' | 'url';
  file: File | null;
  previewUrl: string;
  previewState: 'idle' | 'valid' | 'invalid';
  saving: boolean;
  setTab: (tab: Tab) => void;
  setSource: (source: 'upload' | 'url') => void;
  updateField: (key: keyof PageRecord, value: string | number) => void;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  previewExternalUrl: () => void;
  onClose: () => void;
  onSubmit: (event: FormEvent) => void;
};

function PageEditor(props: PageEditorProps) {
  const { form, selected, tab, source, file, previewUrl, previewState, saving, setTab, setSource, updateField, handleFileChange, previewExternalUrl, onClose, onSubmit } = props;
  const isNew = selected.slug.startsWith('page-');
  return <div role="dialog" aria-modal="true" aria-labelledby="page-editor-title" className="fixed inset-0 z-[60] grid place-items-center bg-[#020913bd] p-3 backdrop-blur-md sm:p-6">
    <form onSubmit={onSubmit} className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[18px] border border-[#238dff45] bg-[#0b1d31] p-5 shadow-[0_35px_120px_rgba(0,0,0,0.65)] sm:p-6">
      <div className="flex items-center justify-between"><h2 id="page-editor-title" className="text-lg font-black text-[#eef6ff]">{isNew ? `Create ${form.title}` : `Edit ${form.title} Page`}</h2><button type="button" onClick={onClose} aria-label="Close editor" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[#dbe8f5] transition hover:border-[#238dff65] focus:outline-none focus:ring-2 focus:ring-[#35d8ff]"><X size={16} /></button></div>
      <div className="mt-4 grid grid-cols-3 gap-1 rounded-[11px] border border-white/10 bg-[#071625] p-1">{(['content', 'images', 'seo'] as Tab[]).map((item) => <button type="button" key={item} onClick={() => setTab(item)} className={`rounded-lg px-3 py-2 text-xs font-bold capitalize transition ${tab === item ? 'bg-[#238dff24] text-white shadow-[0_0_16px_rgba(35,141,255,0.12)]' : 'text-[#7890aa] hover:text-white'}`}>{item}</button>)}</div>
      {tab === 'content' && <ContentTab form={form} updateField={updateField} />}
      {tab === 'images' && <ImagesTab form={form} source={source} file={file} previewUrl={previewUrl} previewState={previewState} setSource={setSource} updateField={updateField} handleFileChange={handleFileChange} previewExternalUrl={previewExternalUrl} />}
      {tab === 'seo' && <SeoTab form={form} updateField={updateField} />}
      <div className="mt-6 flex justify-end gap-2 border-t border-white/10 pt-4"><button type="button" onClick={onClose} className="rounded-[10px] border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-bold text-[#dbe8f5] transition hover:border-[#238dff65] focus:outline-none focus:ring-2 focus:ring-[#35d8ff]">Cancel</button><button type="submit" disabled={saving} className="inline-flex items-center gap-2 rounded-[10px] bg-gradient-to-br from-[#ffdb39] to-[#ffba00] px-4 py-2.5 text-xs font-extrabold text-[#04101d] transition hover:-translate-y-0.5 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#ffc928]">{saving && <LoaderCircle size={14} className="animate-spin" />} Save & Publish</button></div>
    </form>
  </div>;
}

function ContentTab({ form, updateField }: { form: PageRecord; updateField: PageEditorProps['updateField'] }) {
  return <div className="mt-5 space-y-4"><Field label="Title" value={form.title} onChange={(value) => updateField('title', value)} /><Field label="Subheading" value={form.subtitle ?? ''} onChange={(value) => updateField('subtitle', value)} /><Field label="Description / Content" multiline value={form.description ?? ''} onChange={(value) => updateField('description', value)} /><div className="grid gap-4 sm:grid-cols-2"><Field label="Button text" value={form.button_text ?? ''} onChange={(value) => updateField('button_text', value)} /><Field label="Button link" value={form.button_link ?? ''} onChange={(value) => updateField('button_link', value)} /></div><div className="grid gap-4 sm:grid-cols-2"><Field label="Visibility" value={form.status} onChange={(value) => updateField('status', value)} select options={['published', 'draft']} /><Field label="Display order" type="number" value={String(form.sort_order ?? 0)} onChange={(value) => updateField('sort_order', Number(value))} /></div></div>;
}

function ImagesTab({ form, source, file, previewUrl, previewState, setSource, updateField, handleFileChange, previewExternalUrl }: Omit<PageEditorProps, 'selected' | 'tab' | 'saving' | 'setTab' | 'onClose' | 'onSubmit'>) {
  return <div className="mt-5 space-y-4"><p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#7890aa]">Image Source</p><div className="grid grid-cols-2 gap-1 rounded-[11px] border border-white/10 bg-[#071625] p-1">{(['upload', 'url'] as const).map((item) => <button type="button" key={item} onClick={() => setSource(item)} className={`rounded-lg px-3 py-2 text-xs font-bold transition ${source === item ? 'bg-[#238dff24] text-white' : 'text-[#7890aa] hover:text-white'}`}>{item === 'url' ? 'Image URL' : 'Upload'}</button>)}</div>{source === 'upload' && <label className="flex cursor-pointer flex-col items-center justify-center rounded-[13px] border border-dashed border-[#238dff55] bg-[#238dff07] px-4 py-6 text-center transition hover:border-[#35d8ff]"><ImagePlus size={22} className="mb-2 text-[#62c0ff]" /><strong className="text-sm text-[#dcecff]">{file ? file.name : 'Upload your image'}</strong><span className="mt-1 text-xs text-[#7890aa]">JPG · PNG · WebP · SVG</span><input type="file" accept="image/jpeg,image/png,image/webp,image/svg+xml" onChange={handleFileChange} className="sr-only" /></label>}<div><label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.16em] text-[#7890aa]">Or paste public image URL</label><div className="flex gap-2"><input value={form.image_url ?? ''} onChange={(event) => { updateField('image_url', event.target.value); }} placeholder="https://images.unsplash.com/..." className="min-w-0 flex-1 rounded-[10px] border border-white/10 bg-[#071625] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#238dff65]" /><button type="button" onClick={previewExternalUrl} className="rounded-[10px] border border-white/10 bg-white/[0.03] px-3 text-xs font-bold text-[#dbe8f5] transition hover:border-[#238dff65] focus:outline-none focus:ring-2 focus:ring-[#35d8ff]">Preview</button></div></div><div className="rounded-[13px] border border-dashed border-[#238dff42] bg-[#238dff06] p-3"><div className="grid h-36 place-items-center overflow-hidden rounded-[10px] bg-gradient-to-br from-[#123252] to-[#071625] text-center text-xs text-[#6c86a0]">{previewUrl && previewState !== 'invalid' ? <img src={previewUrl} alt="Selected page image preview" onLoad={() => updateField('image_url', previewUrl)} onError={() => updateField('image_url', '')} className="h-full w-full object-cover" /> : previewState === 'invalid' ? <span className="px-4 text-[#ff8191]">Could not load this URL. Use a direct public image URL.</span> : 'Image preview will appear here'}</div>{previewState === 'valid' && <p className="mt-2 flex items-center gap-1 text-[10px] text-[#4be3b0]"><Check size={12} /> Image loaded successfully</p>}</div><p className="text-[10px] leading-5 text-[#7890aa]">External URLs can point to a public image/CDN. Pinterest pin-page URLs are not direct image files; use the actual image URL or upload the image.</p></div>;
}

function SeoTab({ form, updateField }: { form: PageRecord; updateField: PageEditorProps['updateField'] }) {
  return <div className="mt-5 space-y-4"><Field label="SEO title" value={form.seo_title ?? ''} onChange={(value) => updateField('seo_title', value)} /><Field label="Meta description" multiline value={form.seo_description ?? ''} onChange={(value) => updateField('seo_description', value)} /><Field label="Canonical URL" value={form.canonical_url ?? ''} onChange={(value) => updateField('canonical_url', value)} /><Field label="OG image URL" value={form.og_image_url ?? ''} onChange={(value) => updateField('og_image_url', value)} /></div>;
}

function Field({ label, value, onChange, multiline, select, options, type = 'text' }: { label: string; value: string; onChange: (value: string) => void; multiline?: boolean; select?: boolean; options?: string[]; type?: string }) {
  return <label className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[#7890aa]">{label}{multiline ? <textarea value={value} onChange={(event) => onChange(event.target.value)} rows={4} className="mt-2 w-full resize-y rounded-[10px] border border-white/10 bg-[#071625] px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white outline-none focus:border-[#238dff65]" /> : select ? <select value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded-[10px] border border-white/10 bg-[#071625] px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white outline-none focus:border-[#238dff65]">{options?.map((option) => <option key={option}>{option}</option>)}</select> : <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded-[10px] border border-white/10 bg-[#071625] px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white outline-none focus:border-[#238dff65]" />}</label>;
}
