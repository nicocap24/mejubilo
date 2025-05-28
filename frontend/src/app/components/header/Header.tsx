'use client';

import React from 'react';
import Logo from './Logo';
// import NavigationDropdown from './NavigationDropdown';
// import NavigationLink from './NavigationLink';
// import ProfileDropdown from './ProfileDropdown';
// import { navigationConfig } from './navigation';
// import { DropdownState } from './types';
import { event } from '@/app/utils/analytics';

const Header = () => {
  // const [dropdowns, setDropdowns] = useState<DropdownState>({
  //   otros: false,
  //   perfil: false
  // });

  // const toggleDropdown = (name: keyof DropdownState) => {
  //   setDropdowns(prev => ({
  //     ...prev,
  //     [name]: !prev[name]
  //   }));
  //   event({
  //     action: 'toggle_dropdown',
  //     category: 'navigation',
  //     label: name
  //   });
  // };

  const handleNavigationClick = (section: string) => {
    event({
      action: 'click',
      category: 'navigation',
      label: section
    });
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="flex space-x-8 items-center">
          {/* Elementos eliminados: Acerca de, Mi Perfil, Últimos Movimientos, OTROS */}
          <a 
            href="#entrar" 
            className="text-blue-600 hover:text-blue-800 font-bold px-4 py-2 rounded-full border border-blue-600 transition-colors"
            onClick={() => handleNavigationClick('entrar')}
          >
            Entrar
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 