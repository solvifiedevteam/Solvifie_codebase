import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Apply to request so downstream server components see updated cookies
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect /admin/* except /admin/login
  if (
    request.nextUrl.pathname.startsWith('/admin') &&
    !request.nextUrl.pathname.startsWith('/admin/login')
  ) {
    if (!ADMIN_EMAIL || !user || user.email?.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      const redirectRes = NextResponse.redirect(new URL('/admin/login', request.url));
      // Copy cookie updates (e.g. stale token clearing) onto the redirect response
      response.cookies.getAll().forEach((cookie) => redirectRes.cookies.set(cookie));
      return redirectRes;
    }
  }

  // Redirect logged-in admin users away from login page
  if (request.nextUrl.pathname === '/admin/login' && user) {
    if (ADMIN_EMAIL && user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};
