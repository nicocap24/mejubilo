export default function BibliotecaPage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-8 py-10 max-w-6xl w-full flex flex-col items-center border-2 border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Nuestra <span className="text-orange-400">Biblioteca</span>
        </h1>
        
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Educación previsional gratuita y de calidad
        </h2>
        
        <p className="text-gray-600 text-center max-w-3xl mb-12">
          A continuación queremos poner a disposición de la comunidad una serie de documentos, archivos, artículos, libros, documentales, que creemos son útiles para el entendimiento de la tematica previsional. Es 100% gratuito y esta lista será actualizada constantemente con nueva información. Sientete libre de investigarla y compartirla con tus más cercanos.
        </p>
        
        {/* Bookshelf Container */}
        <div className="w-full bg-amber-100 rounded-2xl p-8 shadow-inner">
          {/* Bookshelf */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Book 1 */}
            <div className="group relative">
              <div className="h-64 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">Guía de Ahorro Previsional</h3>
                    <p className="text-white text-sm opacity-90">Conceptos básicos y estrategias para optimizar tu pensión</p>
                  </div>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                    Descargar PDF
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Book 2 */}
            <div className="group relative">
              <div className="h-64 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">Manual de Inversiones</h3>
                    <p className="text-white text-sm opacity-90">Estrategias y análisis para mejores decisiones de inversión</p>
                  </div>
                  <button className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                    Descargar PDF
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Book 3 */}
            <div className="group relative">
              <div className="h-64 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">Calculadora de Pensiones</h3>
                    <p className="text-white text-sm opacity-90">Simula diferentes escenarios y proyecta tu pensión futura</p>
                  </div>
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center">
                    Acceder
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Book 4 */}
            <div className="group relative">
              <div className="h-64 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">Glosario Previsional</h3>
                    <p className="text-white text-sm opacity-90">Diccionario completo de términos previsionales</p>
                  </div>
                  <button className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center">
                    Ver Glosario
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">Todos los documentos están disponibles en formato PDF y son de acceso gratuito.</p>
          <p className="text-sm mt-2">¿Necesitas ayuda? <a href="#" className="text-orange-400 hover:text-orange-500">Contáctanos</a></p>
        </div>
      </div>
    </div>
  );
} 