'use server';

import { createClient } from '@/lib/supabase/server';
import { requireAdmin } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

const ALLOWED_STATUSES = new Set(['pending', 'reviewed', 'shortlisted', 'rejected', 'hired']);

export async function updateApplicationStatus(id: string, status: string) {
  await requireAdmin();

  if (!ALLOWED_STATUSES.has(status)) {
    throw new Error('Invalid status value.');
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from('applications')
    .update({ status })
    .eq('id', id);

  if (error) throw new Error(error.message);

  revalidatePath('/admin/applications');
  revalidatePath(`/admin/applications/${id}`);
}
