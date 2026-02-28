export default function JobsLoading() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header skeleton */}
        <div className="mb-12 animate-pulse">
          <div className="h-10 w-72 bg-gray-200 rounded-xl mb-4" />
          <div className="h-5 w-56 bg-gray-200 rounded-lg" />
        </div>

        {/* Search & filter bar skeleton */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-12 animate-pulse">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 h-14 bg-gray-100 rounded-2xl" />
            <div className="flex gap-3">
              <div className="h-14 w-32 bg-gray-100 rounded-2xl" />
              <div className="h-14 w-28 bg-gray-200 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Job card skeletons — 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm animate-pulse"
            >
              {/* Title + badge row */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1 pr-4">
                  <div className="h-7 w-3/4 bg-gray-200 rounded-lg mb-2" />
                  <div className="h-5 w-1/3 bg-gray-100 rounded-lg" />
                </div>
                <div className="h-7 w-24 bg-blue-50 rounded-full shrink-0" />
              </div>

              {/* Metadata grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-200 rounded-md shrink-0" />
                    <div className="h-4 bg-gray-200 rounded-md flex-1" />
                  </div>
                ))}
              </div>

              {/* Skills row */}
              <div className="flex gap-2 mb-6">
                {Array.from({ length: 4 }).map((_, k) => (
                  <div key={k} className="h-6 w-16 bg-gray-100 rounded-lg" />
                ))}
              </div>

              {/* CTA button */}
              <div className="h-14 w-full bg-gray-200 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
