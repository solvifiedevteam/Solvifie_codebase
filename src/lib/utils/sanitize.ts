import sanitizeHtml from 'sanitize-html';

const HTML_ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Escapes HTML special characters to prevent injection in email templates. */
export function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (ch) => HTML_ESCAPE_MAP[ch]);
}

export const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    'p', 'br', 'strong', 'em', 'b', 'i', 'u', 's',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li',
    'blockquote', 'hr', 'pre', 'code',
  ],
  allowedAttributes: {},
  disallowedTagsMode: 'discard',
};

/** Sanitizes job description HTML, stripping all unsafe tags and attributes. */
export function sanitizeJobDescription(html: string): string {
  return sanitizeHtml(html, SANITIZE_OPTIONS);
}
