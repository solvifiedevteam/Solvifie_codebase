'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';
import { useState } from 'react';
import LogoutButton from './LogoutButton';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/jobs', label: 'Jobs', icon: Briefcase },
  { href: '/admin/applications', label: 'Applications', icon: Users },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin';
    return pathname.startsWith(href);
  };

  const navLinks = (
    <nav className="flex-1 p-4 space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              active
                ? 'bg-primary/10 text-primary font-bold'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Icon size={18} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  const bottomLinks = (
    <div className="p-4 border-t border-gray-100">
      <Link
        href="/"
        onClick={() => setMobileOpen(false)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all mb-1"
      >
        <ExternalLink size={14} />
        View Website
      </Link>
      <LogoutButton />
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 h-14 flex items-center justify-between px-4 shadow-sm">
        <Link href="/admin" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Solvifie" width={32} height={32} className="rounded-lg" />
          <span className="text-sm font-bold text-gray-800 tracking-tight">Solvifie</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Admin</span>
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <Image src="/logo.png" alt="Solvifie" width={36} height={36} className="rounded-lg" />
                <span className="text-sm font-bold text-gray-800 tracking-tight">Solvifie</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            {navLinks}
            {bottomLinks}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-100 min-h-screen shrink-0">
        <div className="p-6 border-b border-gray-100">
          <Link href="/admin" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Solvifie" width={40} height={40} className="rounded-xl" />
            <div>
              <p className="text-sm font-bold text-gray-800 tracking-tight">Solvifie</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Admin Panel</p>
            </div>
          </Link>
        </div>
        {navLinks}
        {bottomLinks}
      </aside>
    </>
  );
}
