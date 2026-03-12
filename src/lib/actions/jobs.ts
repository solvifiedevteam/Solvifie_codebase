'use server';

import { createClient } from '@/lib/supabase/server';
import { requireAdmin } from '@/lib/auth';
import { generateSlug } from '@/lib/utils/slug';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createJob(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();
  const title = (formData.get('title') as string).trim();
  let slug = generateSlug(title);

  // Ensure slug uniqueness
  const { data: existing } = await supabase
    .from('jobs')
    .select('slug')
    .eq('slug', slug)
    .single();

  if (existing) {
    slug = `${slug}-${Date.now()}`;
  }

  const { error } = await supabase.from('jobs').insert({
    title,
    slug,
    client_name: (formData.get('client_name') as string)?.trim() || null,
    location: (formData.get('location') as string).trim(),
    experience: (formData.get('experience') as string).trim(),
    salary: (formData.get('salary') as string)?.trim() || null,
    job_type: formData.get('job_type') as string,
    description: (formData.get('description') as string).trim(),
    skills:
      (formData.get('skills') as string)
        ?.split(',')
        .map((s) => s.trim())
        .filter(Boolean) || [],
    status: (formData.get('status') as string) || 'draft',
  });

  if (error) throw new Error(error.message);

  revalidatePath('/jobs');
  revalidatePath('/admin/jobs');
  redirect('/admin/jobs');
}

export async function updateJob(id: string, formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase
    .from('jobs')
    .update({
      title: (formData.get('title') as string).trim(),
      client_name: (formData.get('client_name') as string)?.trim() || null,
      location: (formData.get('location') as string).trim(),
      experience: (formData.get('experience') as string).trim(),
      salary: (formData.get('salary') as string)?.trim() || null,
      job_type: formData.get('job_type') as string,
      description: (formData.get('description') as string).trim(),
      skills:
        (formData.get('skills') as string)
          ?.split(',')
          .map((s) => s.trim())
          .filter(Boolean) || [],
      status: formData.get('status') as string,
    })
    .eq('id', id);

  if (error) throw new Error(error.message);

  revalidatePath('/jobs');
  revalidatePath('/admin/jobs');
  redirect('/admin/jobs');
}

export async function deleteJob(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from('jobs').delete().eq('id', id);

  if (error) throw new Error(error.message);

  revalidatePath('/jobs');
  revalidatePath('/admin/jobs');
}

export async function toggleJobStatus(id: string, currentStatus: string) {
  await requireAdmin();
  const supabase = await createClient();
  const newStatus = currentStatus === 'active' ? 'closed' : 'active';

  const { error } = await supabase
    .from('jobs')
    .update({ status: newStatus })
    .eq('id', id);

  if (error) throw new Error(error.message);

  revalidatePath('/jobs');
  revalidatePath('/admin/jobs');
}
