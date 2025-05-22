import React from 'react';
import Link from 'next/link';

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Planes y Precios</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Plan Individual */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-orange-400 transition-all">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Individual</h3>
              <p className="text-gray-600 mb-6">Perfecto para comenzar</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                Gratis
              </div>
              <p className="text-sm text-gray-500 mb-6">Modalidad: Individual</p>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Acceso a calculadora básica
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Información general de AFP
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Blog y recursos básicos
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link
                href="/registro"
                className="block w-full bg-orange-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-500 transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </div>

          {/* Plan Pro */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-orange-400 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                ¡50% OFF!
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">Para usuarios avanzados</p>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $5.000
              </div>
              <p className="text-sm text-gray-500 mb-2">/mes</p>
              <p className="text-sm text-orange-500 mb-2">*Precio normal: $10.000/mes</p>
              <p className="text-xs text-gray-500 mb-2">Oferta válida solo para los primeros 100 cupos</p>
              <p className="text-sm text-gray-500 mb-6">Modalidad: Individual y Grupal</p>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Todo lo del plan Individual
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Calculadora avanzada
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Análisis personalizado
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Soporte prioritario
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link
                href="/registro"
                className="block w-full bg-orange-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-500 transition-colors text-center"
              >
                Elegir Plan
              </Link>
            </div>
          </div>

          {/* Plan Plus */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-orange-400 transition-all">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Plus</h3>
              <p className="text-gray-600 mb-6">Para profesionales</p>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $20.000
              </div>
              <p className="text-sm text-gray-500 mb-2">/mes</p>
              <p className="text-sm text-gray-500 mb-6">Modalidad: Individual, Grupal y Empresa</p>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Todo lo del plan Pro
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Asesoría personalizada
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Acceso a eventos exclusivos
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  API y herramientas avanzadas
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button
                disabled
                className="block w-full bg-gray-300 text-gray-500 font-semibold py-3 px-6 rounded-full cursor-not-allowed text-center"
              >
                Próximamente
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 