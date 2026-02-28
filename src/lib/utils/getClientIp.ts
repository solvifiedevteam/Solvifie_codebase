import { NextRequest } from 'next/server';

const IPV4_RE = /^(\d{1,3}\.){3}\d{1,3}$/;
const IPV6_RE = /^[a-f0-9:]+$/i;

function isValidIp(ip: string): boolean {
  return IPV4_RE.test(ip) || IPV6_RE.test(ip);
}

/**
 * Extracts and validates the client IP.
 * Prefers x-real-ip (set by Vercel/reverse-proxy, not spoofable by clients)
 * then falls back to x-forwarded-for.
 * Returns 'unknown' if neither header contains a valid IP.
 */
export function getClientIp(request: NextRequest): string {
  // x-real-ip is set by Vercel's edge and cannot be spoofed by the client
  const realIp = request.headers.get('x-real-ip')?.trim();
  if (realIp && isValidIp(realIp)) {
    return realIp;
  }

  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0].trim();
    if (isValidIp(first)) {
      return first;
    }
  }

  return 'unknown';
}
