export default function BibliotecaPage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-8 py-10 max-w-4xl w-full flex flex-col items-center border-2 border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Nuestra <span className="text-orange-400">Biblioteca</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-gray-100 hover:border-orange-200 transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Guías Básicas</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 hover:text-orange-400 cursor-pointer transition-colors">
                <span className="mr-2">📚</span>
                ¿Qué es el sistema previsional?
              </li>
              <li className="flex items-center text-gray-700 hover:text-orange-400 cursor-pointer transition-colors">
                <span className="mr-2">💰</span>
                Tipos de fondos de pensiones
              </li>
              <li className="flex items-center text-gray-700 hover:text-orange-400 cursor-pointer transition-colors">
                <span className="mr-2">🏢</span>
                Cómo elegir tu AFP
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-gray-100 hover:border-orange-200 transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Recursos Avanzados</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 hover:text-orange-400 cursor-pointer transition-colors">
                <span className="mr-2">📈</span>
                Estrategias de inversión
              </li>
              <li className="flex items-center text-gray-700 hover:text-orange-400 cursor-pointer transition-colors">
                <span className="mr-2">📊</span>
                Planificación fiscal
              </li>
              <li className="flex items-center text-gray-700 hover:text-orange-400 cursor-pointer transition-colors">
                <span className="mr-2">🛡️</span>
                Gestión de riesgos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 