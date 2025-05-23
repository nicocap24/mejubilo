import React, { ReactNode } from 'react';

interface DropdownButtonProps {
  isOpen: boolean;
  onClick: () => void;
  children: ReactNode;
}

const DropdownButton = ({ isOpen, onClick, children }: DropdownButtonProps) => (
  <button
    onClick={onClick}
    className="text-gray-700 hover:text-orange-400 font-medium transition-colors flex items-center"
  >
    {children}
    <svg
      className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
);

export default DropdownButton; 