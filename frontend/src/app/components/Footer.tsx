import React from 'react';

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-12 mt-16 border-t border-blue-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-white text-xl font-bold">MeJubilo</h3>
          <p className="text-blue-200 text-sm">Tu compañero en el camino hacia una jubilación segura y tranquila.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Simulador de Pensión</a></li>
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Comparador de AFPs</a></li>
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Preguntas Frecuentes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Recursos</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Guía de Jubilación</a></li>
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Calculadoras</a></li>
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Glosario</a></li>
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Noticias</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2">
            <li className="text-blue-200">contacto@mejubilo.cl</li>
            <li className="text-blue-200">+56 9 1234 5678</li>
            <li className="text-blue-200">Lunes a Viernes 9:00 - 18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-800 mt-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">© 2024 MeJubilo. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Términos y Condiciones</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Política de Privacidad</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 