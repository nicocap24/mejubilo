export default function BlogPage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-8 py-10 max-w-4xl w-full flex flex-col items-center border-2 border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Nuestro <span className="text-orange-400">Blog</span>
        </h1>
        
        <div className="space-y-6 w-full">
          <article className="bg-white p-8 rounded-2xl shadow-md border-2 border-gray-100 hover:border-orange-200 transition-all">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Nuevas reformas previsionales: ¿Qué debes saber?</h2>
            <p className="text-gray-500 text-sm mb-4">Publicado el 15 de Marzo, 2024</p>
            <p className="text-gray-600 mb-6">Un análisis detallado de las últimas reformas al sistema previsional y cómo afectan a los trabajadores...</p>
            <button className="text-orange-400 hover:text-orange-500 font-semibold transition-colors flex items-center">
              Leer más
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </article>

          <article className="bg-white p-8 rounded-2xl shadow-md border-2 border-gray-100 hover:border-orange-200 transition-all">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">5 consejos para maximizar tu ahorro previsional</h2>
            <p className="text-gray-500 text-sm mb-4">Publicado el 10 de Marzo, 2024</p>
            <p className="text-gray-600 mb-6">Descubre estrategias efectivas para aumentar tu fondo de pensiones y asegurar una jubilación más cómoda...</p>
            <button className="text-orange-400 hover:text-orange-500 font-semibold transition-colors flex items-center">
              Leer más
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </article>

          <article className="bg-white p-8 rounded-2xl shadow-md border-2 border-gray-100 hover:border-orange-200 transition-all">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Inversiones alternativas para tu jubilación</h2>
            <p className="text-gray-500 text-sm mb-4">Publicado el 5 de Marzo, 2024</p>
            <p className="text-gray-600 mb-6">Explora opciones de inversión más allá del sistema tradicional de pensiones...</p>
            <button className="text-orange-400 hover:text-orange-500 font-semibold transition-colors flex items-center">
              Leer más
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </article>
        </div>
      </div>
    </div>
  );
} 