import { NavigationConfig } from './types';

export const navigationConfig: NavigationConfig = {
  aprende: {
    label: 'Aprende',
    items: [
      { href: '/aprende/guia-inicial', label: 'Guía Inicial' },
      { href: '/aprende/tutoriales', label: 'Tutoriales' },
      { href: '/aprende/faq', label: 'Preguntas Frecuentes' }
    ]
  },
  precios: {
    label: 'Precios',
    items: [
      { href: '/precios/planes', label: 'Planes' },
      { href: '/precios/comparativa', label: 'Comparativa' }
    ]
  },
  secciones: {
    label: 'Secciones',
    items: [
      { href: '/secciones/ahorro', label: 'Ahorro' },
      { href: '/secciones/inversion', label: 'Inversión' },
      { href: '/secciones/retiro', label: 'Retiro' }
    ]
  },
  leaderboard: {
    label: 'Leaderboard',
    items: [
      { href: '/leaderboard/mensual', label: 'Mensual' },
      { href: '/leaderboard/anual', label: 'Anual' },
      { href: '/leaderboard/historico', label: 'Histórico' }
    ]
  }
}; 