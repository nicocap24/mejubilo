import React from 'react';
import Link from 'next/link';

interface NavigationLinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

const NavigationLink = ({ href, label, className = "", onClick }: NavigationLinkProps) => (
  <Link
    href={href}
    className={`text-gray-700 hover:text-orange-400 font-medium transition-colors ${className}`}
    onClick={onClick}
  >
    {label}
  </Link>
);

export default NavigationLink; 