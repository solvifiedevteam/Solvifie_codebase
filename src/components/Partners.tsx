'use client';

import Image from 'next/image';

const partners = [
  { name: 'Spinny', logo: '/Solvifie_partner_logo/spinny_logo.webp', w: 'w-32', h: 'h-14' },
  { name: 'Walkin Tree', logo: '/Solvifie_partner_logo/walking_tree_logo.webp', w: 'w-36', h: 'h-16' },
  { name: 'Hurix Digital', logo: '/Solvifie_partner_logo/hurix_logo.webp', w: 'w-36', h: 'h-12' },
  { name: 'Awakin India', logo: '/Solvifie_partner_logo/awakenindia_logo.webp', w: 'w-32', h: 'h-16' },
  { name: 'Octaware Gulf', logo: '/Solvifie_partner_logo/octaware_logo.webp', w: 'w-40', h: 'h-12' },
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
          {[...partners, ...partners, ...partners].map((p, i) => (
            <div key={i} className={`relative shrink-0 ${p.h} ${p.w}`}>
              <Image
                src={p.logo}
                alt={p.name}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
