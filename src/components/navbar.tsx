'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/villas', label: 'Villas' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-3xl">
        <div className="rounded-full bg-background/80 backdrop-blur-xl border border-border px-6 py-3 flex items-center justify-between shadow-[var(--card-shadow)]">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-foreground transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-sm"
          >
            Portugala
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 ${
                  pathname === href
                    ? 'text-accent'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-9 h-9 -mr-2 flex flex-col justify-center items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span
              className={`block h-[1.5px] w-5 bg-foreground rounded-full absolute transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? 'rotate-45' : '-translate-y-[3px]'
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-foreground rounded-full absolute transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? '-rotate-45' : 'translate-y-[3px]'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        inert={!open}
        className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl overscroll-contain transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-display text-3xl font-semibold transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              } ${
                pathname === href
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
              style={{
                transitionDelay: open ? `${100 + i * 60}ms` : '0ms',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
