import React from 'react';
import Link from 'next/link';

interface NavigationLinkProps {
  href: string;
  label: string;
  className?: string;
}

const NavigationLink = ({ href, label, className = "" }: NavigationLinkProps) => (
  <Link
    href={href}
    className={`text-gray-700 hover:text-orange-400 font-medium transition-colors ${className}`}
  >
    {label}
  </Link>
);

export default NavigationLink; 