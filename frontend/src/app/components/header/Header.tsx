'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import NavigationDropdown from './NavigationDropdown';
import NavigationLink from './NavigationLink';
import ProfileDropdown from './ProfileDropdown';
import { navigationConfig } from './navigation';
import { DropdownState } from './types';
import { event } from '@/app/utils/analytics';

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
    
    // Track dropdown interactions
    event({
      action: 'toggle_dropdown',
      category: 'navigation',
      label: name
    });
  };

  const handleNavigationClick = (section: string) => {
    event({
      action: 'click',
      category: 'navigation',
      label: section
    });
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        <div className="flex space-x-8 items-center">
          <NavigationLink 
            href="#acerca" 
            label="Acerca de" 
            onClick={() => handleNavigationClick('acerca')}
          />

          <ProfileDropdown 
            isOpen={dropdowns.perfil} 
            onToggle={() => toggleDropdown('perfil')} 
          />

          <a 
            href="/ultimos-movimientos" 
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full transition-colors"
            onClick={() => handleNavigationClick('ultimos-movimientos')}
          >
            Últimos Movimientos
          </a>

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