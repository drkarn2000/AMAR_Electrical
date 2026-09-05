"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import {
  Copy,
  FileImage,
  LoaderCircle,
  Pencil,
  Plus,
  Search,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

type Section =
  | "services"
  | "products"
  | "blogs"
  | "brands"
  | "projects"
  | "reviews"
  | "faqs"
  | "service-areas"
  | "inquiries"
  | "media"
  | "page-seo"
  | "blog-seo"
  | "global-seo"
  | "business-information"
  | "contact-information"
  | "social-links"
  | "header-settings"
  | "footer-settings"
  | "users";
type RecordValue = Record<string, unknown>;
type Field = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "select" | "checkbox";
  options?: string[];
};
type Definition = {
  title: string;
  description: string;
  table: string;
  layout: "table" | "cards" | "media" | "settings";
  titleKey: string;
  subtitleKey?: string;
  fields: Field[];
};

const text = (record: RecordValue, key?: string) =>
  key ? String(record[key] ?? "") : "";
const commonStatus = {
  key: "status",
  label: "Status",
  type: "select" as const,
  options: ["draft", "published"],
};
const demoRecords = (section: Section): RecordValue[] => {
  const rows: Record<string, RecordValue[]> = {
    services: [
      {
        id: "service-1",
        title: "Home Electrical Wiring",
        category: "Residential",
        image_url: "yes",
        featured: true,
        status: "published",
      },
      {
        id: "service-2",
        title: "New House Wiring",
        category: "Residential",
        image_url: "yes",
        featured: true,
        status: "published",
      },
      {
        id: "service-3",
        title: "Office Wiring",
        category: "Commercial",
        image_url: "yes",
        featured: false,
        status: "published",
      },
      {
        id: "service-4",
        title: "Factory Wiring",
        category: "Industrial",
        image_url: "yes",
        featured: true,
        status: "published",
      },
      {
        id: "service-5",
        title: "Electrical Maintenance",
        category: "Maintenance",
        image_url: "yes",
        featured: true,
        status: "published",
      },
      {
        id: "service-6",
        title: "Panel Installation",
        category: "Industrial",
        image_url: "yes",
        featured: true,
        status: "draft",
      },
    ],
    products: [
      {
        id: "product-1",
        title: "FR PVC Insulated Cable 1.5mm",
        brand_id: "Havells",
        category: "Wires & Cables",
        image_url: "yes",
        featured: true,
        status: "published",
      },
      {
        id: "product-2",
        title: "MCB 32A Single Pole",
        brand_id: "Schneider Electric",
        category: "MCB",
        image_url: "yes",
        featured: true,
        status: "published",
      },
      {
        id: "product-3",
        title: "Modular Switch 6A",
        brand_id: "Anchor",
        category: "Switches",
        image_url: "yes",
        featured: false,
        status: "published",
      },
    ],
    blogs: [
      {
        id: "blog-1",
        title: "How to Choose the Right MCB for Your Home",
        category: "Electrical Safety",
        featured_image_url: "yes",
        author: "Admin",
        status: "published",
      },
      {
        id: "blog-2",
        title: "5 Signs Your Electrical Wiring Needs Attention",
        category: "Maintenance",
        featured_image_url: "yes",
        author: "Admin",
        status: "published",
      },
      {
        id: "blog-3",
        title: "Complete Guide to Home Earthing",
        category: "Guides",
        featured_image_url: "yes",
        author: "Admin",
        status: "draft",
      },
    ],
    brands: [
      "Havells",
      "Panasonic",
      "Polycab",
      "Finolex",
      "RR Kabel",
      "Philips",
      "Crompton",
      "Syska",
      "Schneider Electric",
      "Legrand",
      "Relaxo Home Appliances",
      "Hosper",
      "Eleczo",
      "V-Guard",
      "KEI",
    ].map((name, index) => ({
      id: `brand-${index}`,
      name,
      logo_url: "/Brands/official/havells.svg",
      source: "SVG",
      status: "published",
    })),
    projects: [
      {
        id: "project-1",
        title: "House Wiring",
        category: "Residential",
        description: "Residential installation · Gallery images · Published",
        status: "published",
      },
      {
        id: "project-2",
        title: "Office Installation",
        category: "Commercial",
        description: "Commercial project · Gallery images · Published",
        status: "published",
      },
      {
        id: "project-3",
        title: "Factory Project",
        category: "Industrial",
        description: "Industrial electrical work · Published",
        status: "published",
      },
    ],
    reviews: [
      {
        id: "review-1",
        customer_name: "Customer 01",
        rating: 5,
        quote: "Professional service and clean installation.",
        review_source: "Google",
        status: "published",
      },
      {
        id: "review-2",
        customer_name: "Customer 02",
        rating: 5,
        quote: "Quick response and excellent electrical work.",
        review_source: "Google",
        status: "draft",
      },
    ],
    "service-areas": [
      {
        id: "area-1",
        name: "Village & Rural Areas",
        area_type: "Local",
        description:
          "Local residential electrical services and emergency response.",
        coverage_status: "active",
        status: "published",
      },
      {
        id: "area-2",
        name: "Towns & Suburbs",
        area_type: "Residential",
        description: "Homes, shops and small business electrical support.",
        coverage_status: "active",
        status: "published",
      },
      {
        id: "area-3",
        name: "Commercial Zones",
        area_type: "Commercial",
        description: "Offices, shops and commercial installations.",
        coverage_status: "active",
        status: "published",
      },
      {
        id: "area-4",
        name: "Industrial Zones",
        area_type: "Industrial",
        description: "Factories, panels and industrial electrical work.",
        coverage_status: "active",
        status: "published",
      },
    ],
    faqs: [
      {
        id: "faq-1",
        question: "Do you provide emergency electrical services?",
        category: "General",
        sort_order: 1,
        status: "published",
      },
      {
        id: "faq-2",
        question: "What areas do you cover?",
        category: "Service Areas",
        sort_order: 2,
        status: "published",
      },
      {
        id: "faq-3",
        question: "Do you provide genuine electrical products?",
        category: "Products",
        sort_order: 3,
        status: "published",
      },
    ],
    inquiries: [
      {
        id: "inquiry-1",
        name: "Raj Kumar",
        service_requested: "House Wiring Quote",
        phone: "+91 ••••• 1284",
        status: "new",
      },
      {
        id: "inquiry-2",
        name: "Simran K.",
        service_requested: "Industrial Panel Installation",
        phone: "+91 ••••• 4312",
        status: "in_progress",
      },
    ],
    media: [
      {
        id: "media-1",
        file_name: "hero.webp",
        source: "upload",
      },
      { id: "media-2", file_name: "service-wiring.webp", source: "upload" },
      { id: "media-3", file_name: "product-mcb.webp", source: "upload" },
      {
        id: "media-4",
        file_name: "havells.svg",
        source: "upload",
        public_url: "/Brands/official/havells.svg",
      },
      { id: "media-5", file_name: "project-office.webp", source: "upload" },
      { id: "media-6", file_name: "footer-bg.webp", source: "upload" },
    ],
    "global-seo": [
      {
        id: "seo-1",
        page_slug: "/",
        seo_title: "AMR Electrical | Electrical Sales, Installation & Repair",
        meta_description:
          "Professional electrical sales, installation, repair and engineering solutions.",
      },
    ],
    "business-information": [
      {
        id: "settings-1",
        setting_key: "global",
        business_name: "AMR ELECTRICAL",
        phone: "+91 XXXXX XXXXX",
        whatsapp: "+91 XXXXX XXXXX",
        email: "hello@yourdomain.com",
        address: "Enter verified business address here.",
      },
    ],
  };
  return rows[section] ?? [];
};
const definitions: Record<Section, Definition> = {
  services: {
    title: "Services",
    description:
      "Manage all 19 electrical services, their images, descriptions and visibility.",
    table: "services",
    layout: "table",
    titleKey: "title",
    subtitleKey: "category",
    fields: [
      { key: "slug", label: "Slug" },
      { key: "title", label: "Service name" },
      { key: "category", label: "Category" },
      {
        key: "short_description",
        label: "Short description",
        type: "textarea",
      },
      { key: "long_description", label: "Full description", type: "textarea" },
      { key: "image_url", label: "Main image URL" },
      {
        key: "gallery_urls",
        label: "Gallery image URLs (JSON)",
        type: "textarea",
      },
      { key: "icon_name", label: "Icon name" },
      { key: "sort_order", label: "Display order", type: "number" },
      { key: "featured", label: "Featured", type: "checkbox" },
      commonStatus,
    ],
  },
  products: {
    title: "Products Catalogue",
    description:
      "Products, brands, specifications, galleries, featured status and SEO.",
    table: "products",
    layout: "table",
    titleKey: "title",
    subtitleKey: "category",
    fields: [
      { key: "slug", label: "Slug" },
      { key: "title", label: "Product name" },
      { key: "brand_id", label: "Brand ID" },
      { key: "category", label: "Category" },
      {
        key: "short_description",
        label: "Short description",
        type: "textarea",
      },
      { key: "full_description", label: "Full description", type: "textarea" },
      {
        key: "specifications",
        label: "Specifications (JSON)",
        type: "textarea",
      },
      { key: "image_url", label: "Main image URL" },
      {
        key: "gallery_urls",
        label: "Gallery image URLs (JSON)",
        type: "textarea",
      },
      { key: "sort_order", label: "Display order", type: "number" },
      { key: "featured", label: "Featured", type: "checkbox" },
      commonStatus,
    ],
  },
  blogs: {
    title: "Blog Manager",
    description: "Create, edit, schedule and publish SEO-friendly articles.",
    table: "blogs",
    layout: "table",
    titleKey: "title",
    subtitleKey: "category",
    fields: [
      { key: "slug", label: "Slug" },
      { key: "title", label: "Blog title" },
      { key: "category", label: "Category" },
      {
        key: "short_description",
        label: "Short description",
        type: "textarea",
      },
      { key: "content", label: "Full content", type: "textarea" },
      { key: "featured_image_url", label: "Featured image URL" },
      { key: "author", label: "Author" },
      { key: "published_at", label: "Publish date" },
      { key: "reading_time", label: "Reading time", type: "number" },
      { key: "featured", label: "Featured article", type: "checkbox" },
      commonStatus,
      { key: "seo_title", label: "SEO title" },
      { key: "meta_description", label: "Meta description", type: "textarea" },
    ],
  },
  brands: {
    title: "Brands We Deal In",
    description:
      "Manage the logos and ordering used across the homepage and brands section.",
    table: "brands",
    layout: "media",
    titleKey: "name",
    subtitleKey: "logo_url",
    fields: [
      { key: "name", label: "Brand name" },
      { key: "logo_url", label: "Logo URL" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "sort_order", label: "Display order", type: "number" },
      commonStatus,
    ],
  },
  projects: {
    title: "Completed Projects",
    description: "Control the project gallery displayed on the website.",
    table: "projects",
    layout: "cards",
    titleKey: "title",
    subtitleKey: "category",
    fields: [
      { key: "title", label: "Project title" },
      { key: "category", label: "Category" },
      { key: "location", label: "Location" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "image_url", label: "Main image URL" },
      {
        key: "gallery_urls",
        label: "Gallery image URLs (JSON)",
        type: "textarea",
      },
      { key: "sort_order", label: "Display order", type: "number" },
      { key: "featured", label: "Featured", type: "checkbox" },
      commonStatus,
    ],
  },
  
  "service-areas": {
    title: "Service Areas",
    description: "Manage locations, coverage labels and active service zones.",
    table: "service_areas",
    layout: "cards",
    titleKey: "name",
    subtitleKey: "area_type",
    fields: [
      { key: "name", label: "Area name" },
      { key: "area_type", label: "Area type" },
      { key: "description", label: "Description", type: "textarea" },
      {
        key: "coverage_status",
        label: "Coverage status",
        type: "select",
        options: ["active", "paused"],
      },
      { key: "sort_order", label: "Display order", type: "number" },
      commonStatus,
    ],
  },

  reviews: {
    title: "Customer Reviews",
    description:
      "Approve testimonials before they appear on the public website.",
    table: "reviews",
    layout: "table",
    titleKey: "customer_name",
    subtitleKey: "review_source",
    fields: [
      { key: "customer_name", label: "Customer name" },
      { key: "rating", label: "Rating (1-5)", type: "number" },
      { key: "quote", label: "Review", type: "textarea" },
      { key: "profile_image_url", label: "Profile image URL" },
      { key: "review_source", label: "Review source" },
      { key: "reviewed_at", label: "Review date" },
      { key: "featured", label: "Featured", type: "checkbox" },
      commonStatus,
    ],
  },
  
  faqs: {
    title: "FAQs",
    description: "Manage questions and answers shown on the website.",
    table: "faqs",
    layout: "table",
    titleKey: "question",
    subtitleKey: "category",
    fields: [
      { key: "question", label: "Question" },
      { key: "answer", label: "Answer", type: "textarea" },
      { key: "category", label: "Category" },
      { key: "sort_order", label: "Display order", type: "number" },
      commonStatus,
    ],
  },
  inquiries: {
    title: "Contact & Quote Inquiries",
    description:
      "Track customer messages and quote requests from your website.",
    table: "inquiries",
    layout: "table",
    titleKey: "name",
    subtitleKey: "service_requested",
    fields: [
      { key: "name", label: "Customer name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "service_requested", label: "Service requested" },
      { key: "message", label: "Message", type: "textarea" },
      {
        key: "status",
        label: "Status",
        type: "select",
        options: ["new", "in_progress", "converted", "closed"],
      },
    ],
  },
  media: {
    title: "Media Library",
    description:
      "One place for every website photo, logo, banner and product image.",
    table: "media",
    layout: "media",
    titleKey: "file_name",
    subtitleKey: "source",
    fields: [
      { key: "file_name", label: "File name" },
      { key: "public_url", label: "External image URL" },
      { key: "alt_text", label: "Alt text" },
      { key: "title", label: "Image title" },
      {
        key: "source",
        label: "Source",
        type: "select",
        options: ["upload", "external"],
      },
    ],
  },
  "page-seo": {
    title: "Page SEO",
    description:
      "Manage search titles, descriptions, slugs and social previews for website pages.",
    table: "seo_metadata",
    layout: "settings",
    titleKey: "page_slug",
    fields: [
      { key: "page_slug", label: "Page slug" },
      { key: "seo_title", label: "SEO title" },
      { key: "meta_description", label: "Meta description", type: "textarea" },
      { key: "canonical_url", label: "Canonical URL" },
      { key: "og_title", label: "OG title" },
      { key: "og_description", label: "OG description", type: "textarea" },
      { key: "og_image_url", label: "OG image URL" },
      { key: "robots", label: "Robots" },
    ],
  },
  "blog-seo": {
    title: "Blog SEO",
    description:
      "Manage search metadata and social previews for published blog posts.",
    table: "seo_metadata",
    layout: "settings",
    titleKey: "page_slug",
    fields: [
      { key: "page_slug", label: "Blog slug" },
      { key: "seo_title", label: "SEO title" },
      { key: "meta_description", label: "Meta description", type: "textarea" },
      { key: "canonical_url", label: "Canonical URL" },
      { key: "og_title", label: "OG title" },
      { key: "og_description", label: "OG description", type: "textarea" },
      { key: "og_image_url", label: "OG image URL" },
      { key: "robots", label: "Robots" },
    ],
  },
  "global-seo": {
    title: "SEO & Metadata",
    description:
      "Manage search titles, descriptions, slugs and social previews for every page.",
    table: "seo_metadata",
    layout: "settings",
    titleKey: "page_slug",
    fields: [
      { key: "page_slug", label: "Page slug" },
      { key: "seo_title", label: "SEO title" },
      { key: "meta_description", label: "Meta description", type: "textarea" },
      { key: "canonical_url", label: "Canonical URL" },
      { key: "og_title", label: "OG title" },
      { key: "og_description", label: "OG description", type: "textarea" },
      { key: "og_image_url", label: "OG image URL" },
      { key: "robots", label: "Robots" },
    ],
  },
  "business-information": {
    title: "Global Settings",
    description:
      "Business information used across the header, footer, contact page and CTAs.",
    table: "site_settings",
    layout: "settings",
    titleKey: "setting_key",
    fields: [
      { key: "setting_key", label: "Setting key" },
      { key: "business_name", label: "Business name" },
      { key: "phone", label: "Primary phone" },
      { key: "whatsapp", label: "WhatsApp" },
      { key: "email", label: "Email" },
      { key: "address", label: "Business address", type: "textarea" },
      { key: "business_hours", label: "Business hours" },
      {
        key: "footer_description",
        label: "Footer description",
        type: "textarea",
      },
    ],
  },
  "contact-information": {
    title: "Contact Information",
    description: "Manage phone, email, address, and opening hours.",
    table: "site_settings",
    layout: "settings",
    titleKey: "setting_key",
    fields: [
      { key: "setting_key", label: "Setting key" },
      { key: "phone", label: "Primary phone" },
      { key: "whatsapp", label: "WhatsApp" },
      { key: "email", label: "Email" },
      { key: "address", label: "Address", type: "textarea" },
      { key: "business_hours", label: "Business hours" },
    ],
  },
  "social-links": {
    title: "Social Links",
    description: "Manage social profiles shown in the website footer.",
    table: "site_settings",
    layout: "settings",
    titleKey: "setting_key",
    fields: [
      { key: "setting_key", label: "Setting key" },
      { key: "facebook", label: "Facebook URL" },
      { key: "instagram", label: "Instagram URL" },
      { key: "youtube", label: "YouTube URL" },
      { key: "whatsapp", label: "WhatsApp URL" },
    ],
  },
  "header-settings": {
    title: "Header Settings",
    description: "Manage header announcements and navigation presentation.",
    table: "site_settings",
    layout: "settings",
    titleKey: "setting_key",
    fields: [
      { key: "setting_key", label: "Setting key" },
      { key: "announcement", label: "Announcement", type: "textarea" },
      {
        key: "show_announcement",
        label: "Show announcement",
        type: "select",
        options: ["true", "false"],
      },
    ],
  },
  "footer-settings": {
    title: "Footer Settings",
    description: "Manage footer copy, links, and contact presentation.",
    table: "site_settings",
    layout: "settings",
    titleKey: "setting_key",
    fields: [
      { key: "setting_key", label: "Setting key" },
      { key: "description", label: "Footer description", type: "textarea" },
      { key: "copyright", label: "Copyright text" },
    ],
  },
  users: {
    title: "Admin Users",
    description: "Review administrator profiles.",
    table: "profiles",
    layout: "table",
    titleKey: "full_name",
    fields: [
      { key: "full_name", label: "Full name" },
      {
        key: "role",
        label: "Role",
        type: "select",
        options: ["owner", "editor"],
      },
    ],
  },
};

export function ContentManager({ section }: { section: Section }) {
  const definition = definitions[section];
  const hasSupabase = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
  const [records, setRecords] = useState<RecordValue[]>(() =>
    demoRecords(section),
  );
  const [form, setForm] = useState<RecordValue>({
    status: section === "inquiries" ? "new" : "draft",
    source: "external",
    rating: 5,
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const supabase = hasSupabase ? createSupabaseBrowserClient() : null;

  async function loadRecords() {
    setLoading(true);
    if (!supabase) {
      setRecords(demoRecords(section));
      setLoading(false);
      return;
    }
    const { data, error: loadError } = await (
      supabase.from(definition.table) as any
    )
      .select("*")
      .order("created_at", { ascending: false });
    if (loadError) setError(loadError.message);
    else setRecords((data ?? []) as RecordValue[]);
    setLoading(false);
  }
  useEffect(() => {
    void loadRecords();
  }, [section]);
  const filteredRecords = useMemo(
    () =>
      records.filter((record) =>
        JSON.stringify(record).toLowerCase().includes(query.toLowerCase()),
      ),
    [records, query],
  );
  function updateField(key: string, value: string | number | boolean) {
    setForm((current) => ({ ...current, [key]: value }));
  }
  function resetForm() {
    setEditingId(null);
    setForm({
      status: section === "inquiries" ? "new" : "draft",
      source: "external",
      rating: 5,
    });
    setFile(null);
    setEditorOpen(true);
  }
  function editRecord(record: RecordValue) {
    setEditingId(String(record.id));
    setForm({ ...record });
    setEditorOpen(true);
  }
  async function saveRecord(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError("");
    if (!supabase) {
      setToast("Demo mode: connect Supabase to save records.");
      setEditorOpen(false);
      setSaving(false);
      return;
    }
    try {
      let payload = { ...form };
      delete payload.id;
      delete payload.created_at;
      delete payload.updated_at;
      if (section === "media" && file) {
        const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "-")}`;
        const upload = await supabase.storage.from("media").upload(path, file);
        if (upload.error) throw upload.error;
        const { data } = supabase.storage.from("media").getPublicUrl(path);
        payload = {
          ...payload,
          file_name: file.name,
          storage_path: path,
          public_url: data.publicUrl,
          source: "upload",
        };
      }
      const request = editingId
        ? (supabase.from(definition.table) as any)
            .update(payload)
            .eq("id", editingId)
        : (supabase.from(definition.table) as any).insert(payload);
      const { error: saveError } = await request;
      if (saveError) throw saveError;
      resetForm();
      setEditorOpen(false);
      await loadRecords();
      setToast("Changes saved successfully.");
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Unable to save this record.",
      );
    }
    setSaving(false);
  }
  async function deleteRecord(id: string) {
    if (!supabase) {
      setToast("Demo mode: connect Supabase to delete records.");
      return;
    }
    if (!window.confirm("Delete this record?")) return;
    const { error: deleteError } = await (
      supabase.from(definition.table) as any
    )
      .delete()
      .eq("id", id);
    if (deleteError) setError(deleteError.message);
    else {
      await loadRecords();
      setToast("Record deleted.");
    }
  }
  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const next = event.target.files?.[0];
    if (next) {
      setFile(next);
      updateField("file_name", next.name);
    }
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#58caff]">
            AMR ELECTRICAL / {definition.title}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#eef6ff]">
            {definition.title}
          </h2>
          <p className="mt-2 text-sm text-[#7890aa]">
            {definition.description}
          </p>
        </div>
        {definition.layout !== "settings" && (
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center gap-2 self-start rounded-[11px] bg-gradient-to-br from-[#ffdb39] to-[#ffba00] px-4 py-3 text-sm font-extrabold text-[#04101d] transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#ffc928]"
          >
            <Plus size={16} />{" "}
            {section === "blogs"
              ? "Write New Post"
              : section === "media"
                ? "Add Media"
                : `Add ${definition.title.replace("Catalogue", "").trim()}`}
          </button>
        )}
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_330px]">
        <section className="min-w-0 rounded-[17px] border border-white/10 bg-gradient-to-br from-[#0f253b]/95 to-[#071625]/95 shadow-[0_22px_70px_rgba(0,0,0,0.3)]">
          <div className="flex flex-wrap gap-2 border-b border-white/10 p-4">
            <div className="relative min-w-[220px] flex-1">
              <Search
                size={15}
                className="absolute left-3 top-3 text-[#5d7690]"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={`Search ${definition.title.toLowerCase()}...`}
                className="w-full rounded-[10px] border border-white/10 bg-white/[0.03] py-2.5 pl-9 pr-3 text-sm text-white outline-none transition focus:border-[#238dff65]"
              />
            </div>
            <button
              type="button"
              className="rounded-[10px] border border-white/10 bg-white/[0.03] px-3 text-xs font-bold text-[#9bb0c6] transition hover:border-[#238dff65]"
            >
              Filter ▾
            </button>
          </div>
          {loading ? (
            <div className="flex items-center gap-2 p-8 text-sm text-[#7890aa]">
              <LoaderCircle size={17} className="animate-spin" /> Loading
              records...
            </div>
          ) : filteredRecords.length === 0 ? (
            <div className="p-10 text-center">
              <FileImage size={26} className="mx-auto text-[#3979a8]" />
              <p className="mt-3 text-sm font-bold text-[#dbe8f5]">
                No records yet
              </p>
              <p className="mt-1 text-xs text-[#7890aa]">
                Create your first {definition.title.toLowerCase()} record.
              </p>
            </div>
          ) : definition.layout === "cards" ? (
            <CardList
              records={filteredRecords}
              definition={definition}
              onEdit={editRecord}
              onDelete={deleteRecord}
            />
          ) : definition.layout === "media" ? (
            <MediaList
              records={filteredRecords}
              definition={definition}
              onEdit={editRecord}
              onDelete={deleteRecord}
            />
          ) : (
            <TableList
              records={filteredRecords}
              definition={definition}
              onEdit={editRecord}
              onDelete={deleteRecord}
            />
          )}
        </section>
        <form
          onSubmit={saveRecord}
          className={`${editorOpen ? "fixed inset-0 z-50 m-0 flex items-start justify-center overflow-y-auto bg-[#020913bd] p-4 pt-12 backdrop-blur-md" : "hidden"}`}
        >
          <div className="w-full max-w-xl rounded-[17px] border border-white/10 bg-gradient-to-br from-[#0f253b] to-[#071625] p-5 shadow-[0_35px_120px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black">
              {editingId ? "Edit record" : "Create record"}
            </h3>
            <button
              type="button"
              onClick={() => setEditorOpen(false)}
              aria-label="Close editor"
              className="text-[#7890aa] transition hover:text-white"
            >
              <X size={17} />
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {definition.fields.map((field) => (
              <AdminField
                key={field.key}
                field={field}
                value={form[field.key]}
                onChange={(value) => updateField(field.key, value)}
              />
            ))}
            {section === "media" && (
              <label className="flex cursor-pointer items-center gap-2 rounded-[10px] border border-dashed border-[#238dff55] bg-[#238dff07] p-3 text-xs font-bold text-[#62c0ff]">
                <Upload size={16} />
                {file ? file.name : "Upload JPG, PNG, WebP or SVG"}
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/svg+xml"
                  onChange={handleFile}
                  className="sr-only"
                />
              </label>
            )}
            {error && (
              <p className="rounded-[10px] bg-[#ff637717] p-3 text-xs text-[#ff9aa7]">
                {error}
              </p>
            )}
            <button
              disabled={saving}
              className="w-full rounded-[10px] bg-gradient-to-br from-[#1a8cff] to-[#244ed5] px-4 py-3 text-xs font-extrabold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
            >
              {saving
                ? "Saving..."
                : editingId
                  ? "Save Changes"
                  : "Create Record"}
            </button>
          </div>
          </div>
        </form>
      </div>
      {toast && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[70] rounded-[11px] border border-[#25d69b55] bg-[#09281f] px-4 py-3 text-xs font-bold text-[#baffea] shadow-[0_15px_50px_rgba(0,0,0,0.5)]"
        >
          {toast}
        </div>
      )}
    </div>
  );
}

function TableList({
  records,
  definition,
  onEdit,
  onDelete,
}: {
  records: RecordValue[];
  definition: Definition;
  onEdit: (record: RecordValue) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[650px] border-collapse text-left">
        <thead>
          <tr className="border-b border-white/10">
            {[
              definition.title,
              definition.subtitleKey ?? "Details",
              "Image",
              "Status",
              "Action",
            ].map((heading) => (
              <th
                key={heading}
                className="px-4 py-3 text-[9px] font-bold uppercase tracking-[0.14em] text-[#65809a]"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr
              key={String(record.id)}
              className="border-b border-white/[0.06] transition hover:bg-[#238dff08]"
            >
              <td className="px-4 py-3 text-xs font-extrabold text-[#eef6ff]">
                {text(record, definition.titleKey)}
              </td>
              <td className="px-4 py-3 text-xs text-[#7890aa]">
                {text(record, definition.subtitleKey) || "—"}
              </td>
              <td className="px-4 py-3 text-xs text-[#4be3b0]">
                {text(record, "image_url") ||
                text(record, "featured_image_url") ||
                text(record, "public_url")
                  ? "✓"
                  : "—"}
              </td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-[#25d69b17] px-2 py-1 text-[9px] font-extrabold uppercase text-[#4be3b0]">
                  {text(record, "status") || "—"}
                </span>
              </td>
              <td className="flex gap-1 px-4 py-2">
                <button
                  type="button"
                  onClick={() => onEdit(record)}
                  className="rounded-lg border border-white/10 p-2 text-[#9bb0c6] transition hover:border-[#238dff65] hover:text-white"
                  aria-label="Edit record"
                >
                  <Pencil size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(String(record.id))}
                  className="rounded-lg border border-white/10 p-2 text-[#9bb0c6] transition hover:border-[#ff637755] hover:text-[#ff8191]"
                  aria-label="Delete record"
                >
                  <Trash2 size={14} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CardList({
  records,
  definition,
  onEdit,
  onDelete,
}: {
  records: RecordValue[];
  definition: Definition;
  onEdit: (record: RecordValue) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="grid gap-3 p-4 sm:grid-cols-2">
      {records.map((record) => (
        <article
          key={String(record.id)}
          className="rounded-[13px] border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-[#238dff55]"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-black text-[#eef6ff]">
                {text(record, definition.titleKey)}
              </h3>
              <p className="mt-1 text-[10px] text-[#58caff]">
                {text(record, definition.subtitleKey)}
              </p>
            </div>
            <span className="rounded-full bg-[#25d69b17] px-2 py-1 text-[9px] font-bold uppercase text-[#4be3b0]">
              {text(record, "status") ||
                text(record, "coverage_status") ||
                "active"}
            </span>
          </div>
          <p className="mt-4 text-xs leading-5 text-[#7890aa]">
            {text(record, "description") ||
              "Add a description for this module."}
          </p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => onEdit(record)}
              className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-xs font-bold text-[#dbe8f5] transition hover:border-[#238dff65]"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => onDelete(String(record.id))}
              className="rounded-lg border border-white/10 p-2 text-[#9bb0c6]"
              aria-label="Delete record"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

function MediaList({
  records,
  definition,
  onEdit,
  onDelete,
}: {
  records: RecordValue[];
  definition: Definition;
  onEdit: (record: RecordValue) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {records.map((record) => (
        <article
          key={String(record.id)}
          className="group overflow-hidden rounded-[13px] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#238dff55]"
        >
          <div className="grid h-32 place-items-center bg-gradient-to-br from-[#123252] to-[#071625]">
            {text(record, "public_url") ? (
              <img
                src={text(record, "public_url")}
                alt={text(record, "alt_text")}
                className="h-full w-full object-cover"
              />
            ) : (
              <FileImage className="text-[#3979a8]" />
            )}
          </div>
          <div className="p-3">
            <p className="truncate text-xs font-bold text-[#eef6ff]">
              {text(record, definition.titleKey) || "Untitled media"}
            </p>
            <p className="mt-1 truncate text-[10px] text-[#7890aa]">
              {text(record, definition.subtitleKey) || "external"}
            </p>
            <div className="mt-3 flex gap-1">
              <button
                type="button"
                onClick={() => onEdit(record)}
                className="flex-1 rounded-lg border border-white/10 py-2 text-[10px] font-bold text-[#dbe8f5]"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() =>
                  navigator.clipboard?.writeText(text(record, "public_url"))
                }
                aria-label="Copy media URL"
                className="rounded-lg border border-white/10 p-2 text-[#9bb0c6]"
              >
                <Copy size={13} />
              </button>
              <button
                type="button"
                onClick={() => onDelete(String(record.id))}
                aria-label="Delete media"
                className="rounded-lg border border-white/10 p-2 text-[#9bb0c6] hover:text-[#ff8191]"
              >
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function AdminField({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: unknown;
  onChange: (value: string | number | boolean) => void;
}) {
  if (field.type === "checkbox")
    return (
      <label className="flex items-center gap-2 text-xs font-bold text-[#dbe8f5]">
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(event) => onChange(event.target.checked)}
          className="accent-[#238dff]"
        />{" "}
        {field.label}
      </label>
    );
  return (
    <label className="block text-[9px] font-bold uppercase tracking-[0.14em] text-[#7890aa]">
      {field.label}
      {field.type === "textarea" ? (
        <textarea
          value={String(value ?? "")}
          onChange={(event) => onChange(event.target.value)}
          rows={3}
          className="mt-2 w-full resize-y rounded-[10px] border border-white/10 bg-[#071625] px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white outline-none focus:border-[#238dff65]"
        />
      ) : field.type === "select" ? (
        <select
          value={String(value ?? field.options?.[0] ?? "")}
          onChange={(event) => onChange(event.target.value)}
          className="mt-2 w-full rounded-[10px] border border-white/10 bg-[#071625] px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white outline-none focus:border-[#238dff65]"
        >
          {field.options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={field.type === "number" ? "number" : "text"}
          value={String(value ?? "")}
          onChange={(event) =>
            onChange(
              field.type === "number"
                ? Number(event.target.value)
                : event.target.value,
            )
          }
          className="mt-2 w-full rounded-[10px] border border-white/10 bg-[#071625] px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white outline-none focus:border-[#238dff65]"
        />
      )}
    </label>
  );
}
