'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Sobre' },
  { href: '/certificacoes', label: 'Certificados' },
  { href: '/palestras', label: 'Vídeos e Mídia' },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return isActive ? (
    <span className="font-semibold text-primary">{children}</span>
  ) : (
    <Link href={href} className="text-primary hover:underline">
      {children}
    </Link>
  );
};

export function HeaderNavigation() {
  return (
    <nav className="flex items-center space-x-4">
      {navLinks.map((link, index) => (
        <React.Fragment key={link.href}>
          {index > 0 && <span className="text-gray-300">|</span>}
          <NavLink href={link.href}>{link.label}</NavLink>
        </React.Fragment>
      ))}
    </nav>
  );
}