export interface NavigationItem {
  href: string;
  label: string;
}

export interface DropdownState {
  aprende: boolean;
  precios: boolean;
  secciones: boolean;
  perfil: boolean;
  leaderboard: boolean;
}

export interface NavigationSection {
  label: string;
  items: NavigationItem[];
}

export interface NavigationConfig {
  aprende: NavigationSection;
  precios: NavigationSection;
  secciones: NavigationSection;
  leaderboard: NavigationSection;
} 