-- ══════════════════════════════════════════════════════════
-- Solvifie Consultancy — Database Schema
-- Run this in Supabase SQL Editor
-- ══════════════════════════════════════════════════════════

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ──────────────────────────────────────────────────────────
-- JOBS TABLE
-- ──────────────────────────────────────────────────────────
CREATE TABLE public.jobs (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title       TEXT NOT NULL,
  slug        TEXT NOT NULL UNIQUE,
  location    TEXT NOT NULL,
  experience  TEXT NOT NULL,
  salary      TEXT,
  job_type    TEXT NOT NULL DEFAULT 'Full-time'
              CHECK (job_type IN ('Full-time', 'Part-time', 'Contract', 'Internship')),
  description TEXT NOT NULL,
  skills      TEXT[] DEFAULT '{}',
  status      TEXT NOT NULL DEFAULT 'draft'
              CHECK (status IN ('active', 'closed', 'draft')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX idx_jobs_status ON public.jobs (status);
CREATE INDEX idx_jobs_slug ON public.jobs (slug);
CREATE INDEX idx_jobs_created_at ON public.jobs (created_at DESC);
CREATE INDEX idx_jobs_location ON public.jobs (location);
CREATE INDEX idx_jobs_job_type ON public.jobs (job_type);

-- Auto-update updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER jobs_updated_at
  BEFORE UPDATE ON public.jobs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ──────────────────────────────────────────────────────────
-- APPLICATIONS TABLE
-- ──────────────────────────────────────────────────────────
CREATE TABLE public.applications (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id     UUID NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT,
  resume_url TEXT,
  message    TEXT,
  status     TEXT NOT NULL DEFAULT 'new'
             CHECK (status IN ('new', 'shortlisted', 'interviewed', 'rejected')),
  applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_applications_job_id ON public.applications (job_id);
CREATE INDEX idx_applications_status ON public.applications (status);
CREATE INDEX idx_applications_applied_at ON public.applications (applied_at DESC);

-- ──────────────────────────────────────────────────────────
-- ROW LEVEL SECURITY
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- IMPORTANT: Self-service sign-up MUST be disabled in Supabase Dashboard
-- (Authentication → Providers → Email → disable "Enable Sign Up").
-- These policies grant full access to any authenticated user, which is safe
-- only because the sole authenticated account is the admin.

-- Public: read only active jobs (anon + authenticated)
CREATE POLICY "Anyone can read active jobs"
  ON public.jobs FOR SELECT
  USING (status = 'active');

-- Authenticated: full access to all jobs
CREATE POLICY "Authenticated users full access to jobs"
  ON public.jobs FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Applications: authenticated only
CREATE POLICY "Authenticated users full access to applications"
  ON public.applications FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- NOTE: The /api/apply route uses the service role key which bypasses RLS,
-- allowing anonymous application submissions through the controlled API endpoint.

-- ──────────────────────────────────────────────────────────
-- STORAGE BUCKET
-- ──────────────────────────────────────────────────────────
-- Create via Supabase Dashboard: Storage > New Bucket > "resumes" (private)
-- Or run:
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', false)
ON CONFLICT DO NOTHING;

-- Allow authenticated users to read resumes
CREATE POLICY "Authenticated users can read resumes"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'resumes' AND auth.role() = 'authenticated');

-- ──────────────────────────────────────────────────────────
-- OPTIONAL: Auto-expire jobs after 30 days
-- Run as a Supabase cron job (pg_cron extension)
-- ──────────────────────────────────────────────────────────
-- SELECT cron.schedule(
--   'auto-close-expired-jobs',
--   '0 0 * * *',  -- daily at midnight
--   $$UPDATE public.jobs SET status = 'closed' WHERE status = 'active' AND created_at < now() - interval '30 days'$$
-- );
