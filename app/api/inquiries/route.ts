import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createSupabaseServerClient } from '@/lib/supabase/server';

const inquirySchema = z.object({
  name: z.string().trim().min(2),
  phone: z.string().trim().min(7),
  email: z.string().email(),
  message: z.string().trim().min(10),
  service_requested: z.string().trim().optional()
});

export async function POST(request: Request) {
  const parsed = inquirySchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: 'Please check the form fields.' }, { status: 400 });

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from('inquiries').insert(parsed.data);
    if (error) return NextResponse.json({ error: 'Unable to save your inquiry.' }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Inquiry storage is not configured yet.' }, { status: 503 });
  }
}
