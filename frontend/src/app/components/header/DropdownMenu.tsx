'use client';

import React, { ReactNode } from 'react';

interface DropdownMenuProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

const DropdownMenu = ({ isOpen, children, className = "" }: DropdownMenuProps) => {
  if (!isOpen) return null;
  return (
    <div className={`absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export default DropdownMenu; 