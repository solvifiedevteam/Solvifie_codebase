# Solvifie Consultancy — Recruitment Website

Production-ready recruitment consultancy website for **Solvifie Consultancy, Chennai**. Built with Next.js 16, Supabase, and Tailwind CSS v4.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Storage | Supabase Storage |
| Email | Resend |
| Hosting | Vercel |

---

# Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout — html/body/fonts only
│   ├── proxy.ts                    # Route protection (Next.js 16 proxy)
│   ├── (public)/                   # Public pages (with Navbar + Footer)
│   │   ├── layout.tsx
│   │   ├── page.tsx                # Home
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── blog/page.tsx
│   │   └── jobs/
│   │       ├── page.tsx            # Job listings — live Supabase data
│   │       └── [slug]/page.tsx     # Job detail + application form
│   ├── admin/                      # Admin dashboard (auth-protected)
│   │   ├── layout.tsx              # Admin shell with sidebar
│   │   ├── page.tsx                # Dashboard — stats + recent apps
│   │   ├── login/page.tsx          # Admin login
│   │   ├── jobs/
│   │   │   ├── page.tsx            # Jobs table
│   │   │   ├── new/page.tsx        # Create job
│   │   │   └── [id]/edit/page.tsx  # Edit job
│   │   └── applications/
│   │       ├── page.tsx            # Applications table
│   │       └── [id]/page.tsx       # Application detail + resume download
│   └── api/
│       └── apply/route.ts          # POST — submit job application
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── jobs/
│   │   ├── JobListings.tsx         # Search, filter, pagination
│   │   ├── JobCard.tsx
│   │   ├── JobDetail.tsx
│   │   ├── ApplicationForm.tsx     # Resume upload + form submission
│   │   └── Pagination.tsx
│   └── admin/
│       ├── AdminSidebar.tsx        # Responsive nav (mobile + desktop)
│       ├── JobForm.tsx             # Shared create/edit form
│       ├── JobActions.tsx          # Edit / toggle / delete per row
│       ├── ApplicationStatusSelect.tsx
│       ├── StatusBadge.tsx
│       ├── DashboardCard.tsx
│       └── LogoutButton.tsx
└── lib/
    ├── types/database.ts           # Job, Application TypeScript types
    ├── supabase/
    │   ├── client.ts               # Browser client
    │   ├── server.ts               # Server component client
    │   ├── admin.ts                # Service role client (bypasses RLS)
    │   └── schema.sql              # Full database schema
    ├── utils/slug.ts               # Slug generation
    ├── email.ts                    # Resend email functions
    └── actions/
        ├── jobs.ts                 # Server actions: CRUD
        └── applications.ts         # Server action: update status
```

---

## Database Schema

Two tables in Supabase PostgreSQL:

**`jobs`**

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | Auto-generated |
| title | text | Required |
| slug | text UNIQUE | Auto-generated from title |
| location | text | e.g. Chennai, Remote |
| experience | text | e.g. 3-5 Yrs |
| salary | text | Optional, e.g. 8-12 LPA |
| job_type | text | Full-time / Part-time / Contract / Internship |
| description | text | HTML supported |
| skills | text[] | Array of skill tags |
| status | text | active / closed / draft |
| created_at | timestamptz | Auto |
| updated_at | timestamptz | Auto-updated via trigger |

**`applications`**

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | Auto-generated |
| job_id | uuid FK | References jobs(id) ON DELETE CASCADE |
| name | text | Required |
| email | text | Required |
| phone | text | Optional |
| resume_url | text | Storage path in `resumes` bucket |
| message | text | Optional cover note |
| status | text | new / shortlisted / interviewed / rejected |
| applied_at | timestamptz | Auto |

**Row Level Security**
- Public (anon): SELECT on active jobs only
- Authenticated (admin): Full access to all jobs and applications
- `/api/apply` uses the service role key to allow anonymous application submissions

---

## Setup & Installation

### 1. Clone and install

```bash
git clone <repo-url>
cd solvifie-consultancy
npm install
```

### 2. Create Supabase project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Open the **SQL Editor** and run the full contents of [src/lib/supabase/schema.sql](src/lib/supabase/schema.sql)
3. Go to **Storage** and create a private bucket named `resumes`
4. Go to **Authentication → Users** and create an admin user (email + password)

### 3. Configure environment variables

Create `.env.local` in the project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Email (Resend)
RESEND_API_KEY=re_your-api-key

# Admin notifications
ADMIN_EMAIL=Business@solvifie.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://solvifie.com
```

Get your Supabase keys from: **Project Settings → API**

### 4. Configure Resend

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain (`solvifie.com`) under Domains
3. Copy the API key into `.env.local`

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — public site
Open [http://localhost:3000/admin](http://localhost:3000/admin) — admin panel

---

## Admin Panel

Access at `/admin/login` with the Supabase admin user credentials.

| Feature | Route |
|---|---|
| Dashboard (stats + recent apps) | `/admin` |
| Job listings (all statuses) | `/admin/jobs` |
| Create new job | `/admin/jobs/new` |
| Edit job | `/admin/jobs/[id]/edit` |
| Applications table | `/admin/applications` |
| Application detail + resume | `/admin/applications/[id]` |

**Job workflow:** Draft → Active (visible to public) → Closed (hidden from public)

**Application workflow:** New → Shortlisted → Interviewed → Rejected

---

## Key Architectural Decisions

**Real-time publishing without redeploy**
Job pages use `export const dynamic = 'force-dynamic'`, ensuring every request fetches fresh data from Supabase. Adding or closing a job is visible to candidates instantly.

**Route groups for layout separation**
`(public)` route group wraps all public pages with Navbar + Footer. The `admin` group has its own sidebar layout. The root `layout.tsx` contains only `<html>` and `<body>`.

**Server actions for admin mutations**
Job CRUD and application status updates use Next.js server actions with `revalidatePath` — simpler than API routes and fully type-safe.

**Service role client for application submissions**
Anonymous users cannot write to the `applications` table via RLS. The `/api/apply` route handler uses the service role key as a controlled gateway with its own validation, rate limiting, and file type checks.

**Resume storage**
Files stored at `resumes/{job_id}/{timestamp}-{sanitized_filename}`. Signed URLs (1-hour expiry) are generated on demand for admin resume downloads.

---

## Security

- RLS on all Supabase tables
- File upload validation: PDF/DOC only, 5MB max, sanitized filename
- Rate limiting: 3 applications per IP per hour (in-memory)
- Proxy (`src/proxy.ts`) protects all `/admin/*` routes server-side
- Service role key never exposed to the client
- Email validation via regex on API route

---

## Performance Benchmarks

Load and stress testing performed against the local dev server (Turbopack) using [autocannon](https://github.com/mcollina/autocannon). Production (Vercel edge + CDN) performance will be significantly better.

### Normal Load (10 concurrent connections, 10s per route)

| Route | Req/s | Latency avg | Latency p99 | Throughput | Errors |
|-------|-------|-------------|-------------|------------|--------|
| Homepage | 19.0 | 516ms | 937ms | 2,511 KB/s | 0 |
| About | 20.0 | 488ms | 894ms | 1,846 KB/s | 0 |
| Services | 21.0 | 464ms | 633ms | 2,194 KB/s | 0 |
| Contact | 18.9 | 517ms | 1,186ms | 1,655 KB/s | 0 |

### Heavy Load (50 concurrent connections, 10s per route)

| Route | Req/s | Latency avg | Latency p99 | Throughput | Errors |
|-------|-------|-------------|-------------|------------|--------|
| Homepage | 15.6 | 2,403ms | 2,661ms | 2,062 KB/s | 0 |
| About | 20.0 | 2,322ms | 2,654ms | 1,846 KB/s | 0 |
| Services | 15.0 | 3,101ms | 4,105ms | 1,567 KB/s | 0 |
| Contact | 11.7 | 3,690ms | 5,749ms | 1,025 KB/s | 0 |

### Stress Test (100 concurrent connections, 15s — homepage)

| Metric | Value |
|--------|-------|
| Requests/sec avg | 20.0 |
| Latency avg | 4,766ms |
| Latency p99 | 5,552ms |
| Total requests | 300 |
| Errors | 0 |
| Timeouts | 0 |

### API Rate Limiting (POST /api/contact, 10 connections, 5s)

| Metric | Value |
|--------|-------|
| Total requests | 238 |
| Rate limited (429) | 97.9% |
| Errors | 0 |

**Key findings:**
- Zero errors and zero timeouts across all phases — server stays stable under stress
- Rate limiting works correctly — 97.9% of burst requests correctly blocked with 429
- Latency degrades under heavy load (expected for local dev server, not representative of production)

---

## Scalability Notes

- Add indexes on `jobs(status, created_at)` and `applications(job_id)` — already included in schema
- For 1000+ jobs: the existing `ilike` search on title is acceptable; add a full-text search index for large scale
- For high traffic: replace in-memory rate limiting with Upstash Redis
- Auto-expire jobs after 30 days: enable `pg_cron` in Supabase and run the commented cron job in `schema.sql`
- AI resume screening: add a Supabase Edge Function that calls an LLM API on application insert

---

## Deployment (Vercel)

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add all environment variables from `.env.local` in Project Settings → Environment Variables
4. Deploy — jobs go live instantly on every admin post, no redeploy required

---

## Cost Estimate (Monthly)

| Service | Free Tier | Paid Trigger |
|---|---|---|
| Supabase | 500MB DB, 1GB storage, 2GB bandwidth | Upgrade at ~50K monthly active users |
| Vercel | 100GB bandwidth, unlimited deploys | Upgrade at ~1M function invocations |
| Resend | 3,000 emails/month | $20/mo for 50K emails |
| **Total (light usage)** | **$0/month** | ~$25–50/month at scale |

Estimated cost for 10K monthly visitors: **$0 — free tier handles it comfortably.**

---

## Local Contact

**Solvifie Consultancy**
8, Venkata Balaji Apartment, Ponniamman Kovil Street, Aalapakkam, Chennai 600116
Phone: +91 7010264814 | Email: Business@solvifie.com
