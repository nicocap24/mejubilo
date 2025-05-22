export default function HerramientasPage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-8 py-10 max-w-4xl w-full flex flex-col items-center border-2 border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Nuestras <span className="text-orange-400">Herramientas</span>
        </h1>
        
        <div className="space-y-6 w-full">
          {/* Simulador Principal */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-gray-100 hover:border-orange-200 transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Simulador de Pensión</h2>
            <p className="text-gray-600 mb-6">Calcula tu pensión estimada basada en tus aportes actuales y proyecta tu futuro previsional.</p>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Ingresa tu saldo AFP"
                className="w-full px-4 py-3 border border-gray-400 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-700 text-gray-700"
              />
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md">
                Calcular Pensión
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-gray-100 hover:border-orange-200 transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Calculadora de Ahorro</h2>
            <p className="text-gray-600 mb-6">Simula diferentes escenarios de ahorro para tu jubilación.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md">
              Iniciar Simulación
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-gray-100 hover:border-orange-200 transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comparador de AFPs</h2>
            <p className="text-gray-600 mb-6">Compara las diferentes AFPs y encuentra la que mejor se adapta a tus necesidades.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md">
              Comparar AFPs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 