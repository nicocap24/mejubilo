import React from 'react';
import Link from 'next/link';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';
import ProfileStats from './ProfileStats';

interface ProfileDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ProfileDropdown = ({ isOpen, onToggle }: ProfileDropdownProps) => (
  <div className="relative">
    <DropdownButton isOpen={isOpen} onClick={onToggle}>
      Mi Perfil
    </DropdownButton>
    
    <DropdownMenu isOpen={isOpen} className="w-80 py-4">
      <div className="px-4 py-2 border-b border-gray-100">
        <h3 className="font-semibold text-gray-800">Situación Previsional</h3>
      </div>
      <ProfileStats />
      <div className="px-4 py-2 border-t border-gray-100">
        <Link
          href="/mi-perfil"
          className="block w-full text-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Ver perfil completo
        </Link>
      </div>
    </DropdownMenu>
  </div>
);

export default ProfileDropdown; 