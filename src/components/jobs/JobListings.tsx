'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useCallback } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import type { Job } from '@/lib/types/database';
import JobCard from './JobCard';
import Pagination from './Pagination';

interface JobListingsProps {
  jobs: Job[];
  totalCount: number;
  currentPage: number;
  perPage: number;
  locations: string[];
  filters: {
    q?: string;
    location?: string;
    type?: string;
  };
}

const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship'];

export default function JobListings({
  jobs,
  totalCount,
  currentPage,
  perPage,
  locations,
  filters,
}: JobListingsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(filters.q || '');
  const [showFilters, setShowFilters] = useState(false);
  const totalPages = Math.ceil(totalCount / perPage);

  const updateFilters = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (value) params.set(key, value);
        else params.delete(key);
      });
      params.delete('page'); // Reset to page 1 on filter change
      router.push(`/jobs?${params.toString()}`);
    },
    [router, searchParams]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ q: search });
  };

  const clearFilters = () => {
    setSearch('');
    router.push('/jobs');
  };

  const hasActiveFilters = filters.q || filters.location || filters.type;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dark Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#001a6e] via-[#0040b8] to-[#1e3a8a] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3">
            Careers
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 font-heading">
            Current Opportunities
          </h1>
          <p className="text-blue-200/80 max-w-xl">
            Find your next career move with Solvifie.{' '}
            <span className="font-semibold text-white">
              {totalCount} {totalCount === 1 ? 'position' : 'positions'}
            </span>{' '}
            available.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Search & Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by job title..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-primary/40 transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className={`px-6 py-4 rounded-2xl flex items-center gap-2 font-medium transition-all ${
                  showFilters
                    ? 'bg-primary/10 text-primary'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <SlidersHorizontal size={18} /> Filters
              </button>
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-hover transition-all shadow-lg"
              >
                Search
              </button>
            </div>
          </form>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Location
                </label>
                <select
                  value={filters.location || ''}
                  onChange={(e) =>
                    updateFilters({ location: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                >
                  <option value="">All Locations</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Job Type
                </label>
                <select
                  value={filters.type || ''}
                  onChange={(e) =>
                    updateFilters({ type: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                >
                  <option value="">All Types</option>
                  {JOB_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Active filter tags */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-400 font-medium">Active:</span>
              {filters.q && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                  &quot;{filters.q}&quot;
                  <button onClick={() => { setSearch(''); updateFilters({ q: '' }); }}>
                    <X size={12} />
                  </button>
                </span>
              )}
              {filters.location && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                  {filters.location}
                  <button onClick={() => updateFilters({ location: '' })}>
                    <X size={12} />
                  </button>
                </span>
              )}
              {filters.type && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                  {filters.type}
                  <button onClick={() => updateFilters({ type: '' })}>
                    <X size={12} />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-red-500 ml-2"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        {jobs.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filters
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobs.map((job, idx) => (
                <JobCard key={job.id} job={job} index={idx} />
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </>
        )}
      </div>
    </div>
  );
}
