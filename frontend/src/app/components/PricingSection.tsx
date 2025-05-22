import React from 'react';

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Planes y Precios</h2>
          <p className="text-xl text-gray-600">
            Elige el plan que mejor se adapte a tus necesidades y comienza a optimizar tu futuro previsional hoy mismo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Plan Individual */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$0<span className="text-lg font-normal text-gray-600">/mes</span></div>
              <p className="text-gray-600 mb-8">Funcionalidades básicas para comenzar</p>
              <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors cursor-pointer">
                Registrarse
              </button>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Simulador de reforma previsional
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Acceso a tu perfil con situación previsional
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Conexión con tu AFP
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Acceso completo al leaderboard
              </li>
            </ul>
          </div>

          {/* Plan Pro */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-900 transform scale-105">
            <div className="text-center">
              <div className="bg-blue-900 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$5,000<span className="text-lg font-normal text-gray-600">/mes</span></div>
              <div className="text-sm text-green-600 font-semibold mb-2">50% descuento</div>
              <p className="text-sm text-gray-500 mb-4">*Precio especial para los primeros 100 usuarios</p>
              <p className="text-gray-600 mb-8">Funcionalidades avanzadas para optimizar</p>
              <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors cursor-pointer">
                Elegir Plan Pro
              </button>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Simulador de reforma previsional
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Acceso a tu perfil con situación previsional
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Conexión con tu AFP
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Acceso completo al leaderboard
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Notificaciones y alertas semanales
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Análisis detallado de jubilación anticipada
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Planificación de Excedentes de Libre Disposición
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Asesoría previsional trimestral
              </li>
            </ul>
          </div>

          {/* Plan Plus */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center">
              <div className="bg-gray-900 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                Próximamente
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plus</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$20,000<span className="text-lg font-normal text-gray-600">/mes</span></div>
              <p className="text-gray-600 mb-8">Experiencia premium con asesoría</p>
              <button className="w-full bg-gray-300 text-gray-600 px-6 py-3 rounded-full font-semibold cursor-not-allowed">
                Próximamente
              </button>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Simulador de reforma previsional
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Acceso a tu perfil con situación previsional
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Conexión con tu AFP
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Acceso completo al leaderboard
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Notificaciones y alertas semanales
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Análisis detallado de jubilación anticipada
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Planificación de Excedentes de Libre Disposición
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Asesoría previsional trimestral
              </li>
            </ul>
            <div className="mt-8 text-center text-gray-500 text-sm">
              Estamos trabajando en este plan. ¡Muy pronto disponible!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 