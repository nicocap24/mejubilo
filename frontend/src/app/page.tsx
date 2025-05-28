/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [saldo, setSaldo] = useState('');
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center" style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
      <div className="pt-8 pb-16 px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl px-8 md:px-12 py-16 max-w-2xl w-full flex flex-col items-center border border-gray-100">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-6">
            ¿Ya quieres <span className="text-orange-400">jubilar</span>?
          </h1>
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-center text-gray-700 mb-10">
            Obtén tu evaluación 100% GRATUITA y en segundos para saber cómo vas
          </p>
          {/* Button */}
          <Link
            href="/evaluacion-previsional"
            className="w-auto px-8 bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            Descubre cómo
          </Link>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-6xl w-full px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Article 1 */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">La reforma: ¿Fue buena o mala?</h3>
          <p className="text-sm text-gray-500 mb-4">Por: Nicolás Arrieta</p>
          <p className="text-gray-600 mb-4 line-clamp-3">
            Ningún sistema, sea de pensiones u otro sistema, puede subsistir 40 años sin hacerle cambios. Según una encuesta CEP de Septiembre 2024 un 87% de las personas desconfía del sistema de pensiones.
          </p>
          <Link href="/articulos/la-reforma-fue-buena-o-mala" className="text-orange-400 font-semibold hover:text-orange-500 inline-flex items-center group">
            Seguir leyendo 
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Article 2 */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Cómo jubilar en Chile</h3>
          <p className="text-sm text-gray-500 mb-4">Por: Nicolás Arrieta</p>
          <p className="text-gray-600 mb-4 line-clamp-3">
            Conoce las estrategias más efectivas para incrementar tu fondo de pensiones y asegurar una jubilación más cómoda.
          </p>
          <Link href="/articulos/como-jubilar-en-chile" className="text-orange-400 font-semibold hover:text-orange-500 inline-flex items-center group">
            Seguir leyendo 
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Article 3 */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Por qué Me Jubilo?</h3>
          <p className="text-sm text-gray-500 mb-4">Por: Nicolás Arrieta</p>
          <p className="text-gray-600 mb-4 line-clamp-3">
            Cuesta desconocer que en Chile tenemos un tremendo problema con las pensiones. +3.000.000 están en el fondo equivocado según su edad.
          </p>
          <Link href="/articulos/porque-me-jubilo" className="text-orange-400 font-semibold hover:text-orange-500 inline-flex items-center group">
            Seguir leyendo 
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
