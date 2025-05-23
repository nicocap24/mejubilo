import React from 'react';
import Link from 'next/link';
import { NavigationItem as NavigationItemType } from './types';

interface NavigationItemProps {
  item: NavigationItemType;
  className?: string;
}

const NavigationItem = ({ item, className = "" }: NavigationItemProps) => (
  <Link
    href={item.href}
    className={`block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-colors ${className}`}
  >
    {item.label}
  </Link>
);

export default NavigationItem; 