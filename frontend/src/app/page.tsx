/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Home() {
  const [showChart, setShowChart] = useState(true);
  const [formData, setFormData] = useState({
    edad: 20,
    salario: 800000,
    añosCotizados: 0,
    afp: 'habitat'
  });

  // Generar años para el gráfico desde la edad actual hasta 65
  const añosProyección = Array.from(
    { length: 65 - formData.edad + 1 },
    (_, i) => (new Date().getFullYear() + i).toString()
  );

  // Calcular proyección de pensión
  const calcularProyección = () => {
    
    const salarioInicial = formData.salario;
    const incrementoAnual = 0.03; // 3% de incremento anual
    const rentabilidad = 0.05; // 5% de rentabilidad anual

    return añosProyección.map((_, index) => {
      if (index === 0) return 0;
      
      const añosTranscurridos = index;
      const salarioActual = salarioInicial * Math.pow(1 + incrementoAnual, añosTranscurridos);
      const cotizaciónMensual = salarioActual * 0.1; // 10% de cotización
      const cotizaciónAnual = cotizaciónMensual * 12;
      
      // Fórmula simplificada para calcular el fondo acumulado
      const fondoAcumulado = cotizaciónAnual * 
        (Math.pow(1 + rentabilidad, añosTranscurridos) - 1) / rentabilidad;
      
      // Estimación de pensión (4% del fondo acumulado)
      return Math.round(fondoAcumulado * 0.04);
    });
  };

  const chartData = {
    labels: añosProyección,
    datasets: [
      {
        label: 'Proyección de Pensión',
        data: calcularProyección(),
        borderColor: '#00A19C',
        backgroundColor: 'rgba(0, 161, 156, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Proyección de tu Pensión hasta los 65 años',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Pensión estimada: $${context.raw.toLocaleString('es-CL')}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '$' + value.toLocaleString('es-CL');
          }
        }
      }
    }
  };

  const handleCalculate = () => {
    setShowChart(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'afp' ? value : Number(value)
    }));
  };

  return (
    <div className="min-h-screen">
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

      {/* Hero Section con imagen de fondo */}
      <section className="w-full bg-cover bg-center" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-7xl font-bold text-yellow-400 mb-4 tracking-tight">
              ¿Ya quieres jubilar?
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Descubre cuánto $$ podrías obtener si jubilaras HOY:
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
                      name="edad"
                      value={formData.edad}
                      onChange={handleInputChange}
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
                      name="salario"
                      value={formData.salario}
                      onChange={handleInputChange}
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
                      name="añosCotizados"
                      value={formData.añosCotizados}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ej: 15"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      AFP actual
                    </label>
                    <select 
                      name="afp"
                      value={formData.afp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
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
              <button 
                onClick={handleCalculate}
                className="w-full mt-8 bg-blue-900 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Actualizar simulación
              </button>

              {/* Gráfico de Simulación */}
              {showChart && (
                <div className="mt-8 p-4 bg-white rounded-xl">
                  <Line options={chartOptions} data={chartData} />
                  <div className="mt-4 text-gray-600 text-sm">
                    <p>* Esta es una proyección estimada basada en los datos ingresados</p>
                    <p>* Considera un incremento anual del 3% en el salario y una rentabilidad del 5% anual</p>
                  </div>
                </div>
              )}
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
      </section>

      {/* Pricing Section */}
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
                <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
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
                <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
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

      {/* Footer */}
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
    </div>
  );
}
