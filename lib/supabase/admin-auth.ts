import { createSupabaseServerClient } from './server';

export const devAdminBypass = process.env.NODE_ENV !== 'production' && process.env.ADMIN_DEV_BYPASS === 'true';

export async function getAdminUser() {
  if (devAdminBypass) {
    return { email: 'local-admin@powerfix.dev' };
  }

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
