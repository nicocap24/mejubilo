import React from 'react';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';
import NavigationItem from './NavigationItem';
import { NavigationItem as NavigationItemType } from './types';

interface NavigationDropdownProps {
  label: string;
  items: NavigationItemType[];
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

const NavigationDropdown = ({ 
  label, 
  items, 
  isOpen, 
  onToggle,
  className = "" 
}: NavigationDropdownProps) => (
  <div className={`relative ${className}`}>
    <DropdownButton isOpen={isOpen} onClick={onToggle}>
      {label}
    </DropdownButton>
    
    <DropdownMenu isOpen={isOpen}>
      {items.map((item) => (
        <NavigationItem key={item.href} item={item} />
      ))}
    </DropdownMenu>
  </div>
);

export default NavigationDropdown; 