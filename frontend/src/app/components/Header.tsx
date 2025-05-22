import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-700 mr-1">Me</span>
          <span className="text-2xl font-bold text-orange-400">Jubilo</span>
        </div>
        {/* Secciones */}
        <div className="flex space-x-8 items-center">
          <a href="#acerca" className="text-gray-700 hover:text-orange-400 font-medium transition-colors">Acerca de</a>
          <a href="#precios" className="text-gray-700 hover:text-orange-400 font-medium transition-colors">Precios</a>
          <a href="#aprende" className="text-gray-700 hover:text-orange-400 font-medium transition-colors">Aprende</a>
          <a href="#entrar" className="text-blue-600 hover:text-blue-800 font-bold px-4 py-2 rounded-full border border-blue-600 transition-colors">Entrar</a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 