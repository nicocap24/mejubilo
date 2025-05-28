import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/" className="flex items-center">
    <Image
      src="/logo.png"
      alt="MeJubilo"
      width={120}
      height={40}
      className="h-10 w-auto"
      priority
    />
  </Link>
);

export default Logo; 