export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h2 className="text-white text-2xl font-bold">MeJubilo</h2>
          <div className="space-x-4">
            <button className="text-white hover:text-blue-200 transition-colors">Iniciar Sesión</button>
            <button className="bg-white text-blue-900 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors">
              Registrarse
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-7xl font-bold text-white mb-4 tracking-tight">
            Simula tu pensión
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Descubre cuánto podrías recibir en tu jubilación y aprende cómo mejorarla
          </p>

          {/* Simulator Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Edad actual
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: 45"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Salario actual
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: 3000000"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Años cotizados
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: 15"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    AFP actual
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecciona tu AFP</option>
                    <option value="capital">Capital</option>
                    <option value="cuprum">Cuprum</option>
                    <option value="habitat">Habitat</option>
                    <option value="modelo">Modelo</option>
                    <option value="planvital">PlanVital</option>
                    <option value="provida">ProVida</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 bg-blue-900 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Calcular mi pensión
            </button>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Simulación Precisa</h3>
              <p className="text-blue-100">Calcula tu pensión estimada con datos reales del mercado</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Compara AFPs</h3>
              <p className="text-blue-100">Encuentra la mejor AFP para maximizar tu pensión</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Recomendaciones</h3>
              <p className="text-blue-100">Recibe consejos personalizados para mejorar tu jubilación</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-blue-800">
        <div className="text-center text-blue-200">
          <p>© 2024 MeJubilo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
