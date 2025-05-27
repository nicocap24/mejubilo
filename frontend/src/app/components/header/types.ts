export interface NavigationItem {
  href: string;
  label: string;
}

export interface DropdownState {
  otros?: boolean;
  perfil: boolean;
}

export interface NavigationSection {
  label: string;
  items: NavigationItem[];
}

export interface NavigationConfig {
  [key: string]: NavigationSection;
} 