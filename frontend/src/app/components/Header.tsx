import React from 'react';

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold">MeJubilo</h2>
        <div className="space-x-4">
          <button className="text-white hover:text-blue-200 transition-colors cursor-pointer">Iniciar Sesión</button>
          <button className="bg-white text-blue-900 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors cursor-pointer">
            Registrarse
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 