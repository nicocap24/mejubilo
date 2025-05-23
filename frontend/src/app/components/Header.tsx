import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isAprendeOpen, setIsAprendeOpen] = useState(false);
  const [isPreciosOpen, setIsPreciosOpen] = useState(false);
  const [isSeccionesOpen, setIsSeccionesOpen] = useState(false);
  const [isPerfilOpen, setIsPerfilOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-gray-700 mr-1">Me</span>
          <span className="text-2xl font-bold text-orange-400">Jubilo</span>
        </Link>
        {/* Secciones */}
        <div className="flex space-x-8 items-center">
          <a href="#acerca" className="text-gray-700 hover:text-orange-400 font-medium transition-colors">Acerca de</a>
          
          {/* Leaderboard Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLeaderboardOpen(!isLeaderboardOpen)}
              className="text-gray-700 hover:text-orange-400 font-medium transition-colors flex items-center"
            >
              Leaderboard
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${isLeaderboardOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLeaderboardOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                <Link
                  href="/leaderboard"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-colors"
                >
                  Ranking General
                </Link>
                <Link
                  href="/ultimos-movimientos"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-colors"
                >
                  Últimos Movimientos
                </Link>
              </div>
            )}
          </div>
          
          {/* Mi Perfil Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsPerfilOpen(!isPerfilOpen)}
              className="text-gray-700 hover:text-orange-400 font-medium transition-colors flex items-center"
            >
              Mi Perfil
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${isPerfilOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isPerfilOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-4 z-50 border border-gray-100">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-800">Situación Previsional</h3>
                </div>
                <div className="px-4 py-2">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500">Retornos Obtenidos</p>
                    <p className="text-lg font-semibold text-green-600">+12.5%</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-500">Comisiones Pagadas</p>
                    <p className="text-lg font-semibold text-red-600">-$450,000</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-500">Pensión Estimada</p>
                    <p className="text-lg font-semibold text-blue-600">$850,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Posición Ranking</p>
                    <p className="text-lg font-semibold text-orange-400">Top 15%</p>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <Link
                    href="/mi-perfil"
                    className="block w-full text-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Ver perfil completo
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Secciones Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSeccionesOpen(!isSeccionesOpen)}
              className="text-gray-700 hover:text-orange-400 font-medium transition-colors flex items-center"
            >
              Secciones
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${isSeccionesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isSeccionesOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                <Link
                  href="/calculadora"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-colors"
                >
                  Calculadora
                </Link>
                <Link
                  href="/simulador"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-colors"
                >
                  Simulador
                </Link>
              </div>
            )}
          </div>
          
          {/* Precios Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsPreciosOpen(!isPreciosOpen)}
              className="text-gray-700 hover:text-orange-400 font-medium transition-colors flex items-center"
            >
              Precios
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${isPreciosOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isPreciosOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                <Link
                  href="/precios"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-colors"
                >
                  Planes y Precios
                </Link>
              </div>
            )}
          </div>
          
          {/* Aprende Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAprendeOpen(!isAprendeOpen)}
              className="text-gray-700 hover:text-orange-400 font-medium transition-colors flex items-center"
            >
              Aprende
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${isAprendeOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isAprendeOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                <Link
                  href="/aprende/herramientas"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-colors"
                >
                  Herramientas
                </Link>
                <Link
                  href="/aprende/biblioteca"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-colors"
                >
                  Biblioteca
                </Link>
                <Link
                  href="/aprende/blog"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-colors"
                >
                  Blog
                </Link>
              </div>
            )}
          </div>

          <a href="#entrar" className="text-blue-600 hover:text-blue-800 font-bold px-4 py-2 rounded-full border border-blue-600 transition-colors">Entrar</a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 