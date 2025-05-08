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
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
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

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-blue-800">
        <div className="text-center text-blue-200">
          <p>© 2024 MeJubilo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
