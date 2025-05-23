import React, { useState } from 'react';
import Logo from './Logo';
import NavigationDropdown from './NavigationDropdown';
import NavigationLink from './NavigationLink';
import ProfileDropdown from './ProfileDropdown';
import { navigationConfig } from './navigation';
import { DropdownState } from './types';

const Header = () => {
  const [dropdowns, setDropdowns] = useState<DropdownState>({
    aprende: false,
    precios: false,
    secciones: false,
    perfil: false,
    leaderboard: false
  });

  const toggleDropdown = (name: keyof DropdownState) => {
    setDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        <div className="flex space-x-8 items-center">
          <NavigationLink href="#acerca" label="Acerca de" />

          <ProfileDropdown 
            isOpen={dropdowns.perfil} 
            onToggle={() => toggleDropdown('perfil')} 
          />

          <NavigationLink href="/ultimos-movimientos" label="Últimos Movimientos" />

          {Object.entries(navigationConfig).map(([key, section]) => (
            <NavigationDropdown
              key={key}
              label={section.label}
              items={section.items}
              isOpen={dropdowns[key as keyof DropdownState]}
              onToggle={() => toggleDropdown(key as keyof DropdownState)}
            />
          ))}

          <a 
            href="#entrar" 
            className="text-blue-600 hover:text-blue-800 font-bold px-4 py-2 rounded-full border border-blue-600 transition-colors"
          >
            Entrar
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 