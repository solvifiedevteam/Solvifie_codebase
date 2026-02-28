'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  function buildHref(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    return `/jobs?${params.toString()}`;
  }

  const pages: (number | '...')[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {currentPage > 1 && (
        <Link
          href={buildHref(currentPage - 1)}
          className="p-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-all"
        >
          <ChevronLeft size={18} />
        </Link>
      )}

      {pages.map((page, idx) =>
        page === '...' ? (
          <span key={`ellipsis-${idx}`} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={buildHref(page)}
            className={`w-11 h-11 flex items-center justify-center rounded-xl font-bold text-sm transition-all ${
              page === currentPage
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link
          href={buildHref(currentPage + 1)}
          className="p-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-all"
        >
          <ChevronRight size={18} />
        </Link>
      )}
    </div>
  );
}
