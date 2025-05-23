import React from 'react';
import Link from 'next/link';

const Logo = () => (
  <Link href="/" className="flex items-center">
    <span className="text-2xl font-bold text-gray-700 mr-1">Me</span>
    <span className="text-2xl font-bold text-orange-400">Jubilo</span>
  </Link>
);

export default Logo; 