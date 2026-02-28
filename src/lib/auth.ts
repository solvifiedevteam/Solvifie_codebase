import { createClient } from '@/lib/supabase/server';

export async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail || !user || user.email?.toLowerCase() !== adminEmail.toLowerCase()) {
    throw new Error('Unauthorized');
  }

  return user;
}
