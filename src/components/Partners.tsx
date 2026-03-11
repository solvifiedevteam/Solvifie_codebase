'use client';

const partners = [
  { name: 'Spinny' },
  { name: 'Walkin Tree' },
  { name: 'Hurix Digital' },
  { name: 'Awakin India' },
  { name: 'Octaware Gulf' },
  { name: 'Spinny' },
  { name: 'Walkin Tree' },
  { name: 'Hurix Digital' },
  { name: 'Awakin India' },
  { name: 'Octaware Gulf' },
];

const Partners = () => {
  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">
        Trusted by Leading Organizations
      </p>

      {/* Marquee track */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center px-6 py-3 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-default group"
            >
              <span className="text-base font-bold text-gray-500 group-hover:text-gray-800 transition-colors whitespace-nowrap font-heading">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
