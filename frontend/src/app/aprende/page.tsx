import Link from 'next/link';

export default function AprendePage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-8 py-10 max-w-4xl w-full flex flex-col items-center border-2 border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Aprende sobre tu <span className="text-orange-400">jubilación</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Link href="/aprende/herramientas" className="block p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border-2 border-gray-100 hover:border-orange-200">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Herramientas</h2>
            <p className="text-gray-600">Descubre nuestras herramientas interactivas para planificar tu jubilación.</p>
          </Link>

          <Link href="/aprende/biblioteca" className="block p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border-2 border-gray-100 hover:border-orange-200">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Biblioteca</h2>
            <p className="text-gray-600">Accede a recursos educativos y guías sobre planificación previsional.</p>
          </Link>

          <Link href="/aprende/blog" className="block p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border-2 border-gray-100 hover:border-orange-200">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Blog</h2>
            <p className="text-gray-600">Mantente informado con las últimas noticias y consejos sobre jubilación.</p>
          </Link>
        </div>
      </div>
    </div>
  );
} 