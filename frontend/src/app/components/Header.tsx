import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isAprendeOpen, setIsAprendeOpen] = useState(false);
  const [isPreciosOpen, setIsPreciosOpen] = useState(false);

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
                <Link
                  href="/leaderboard"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-colors"
                >
                  Leaderboard
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