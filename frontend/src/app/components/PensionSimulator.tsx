import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
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

interface FormData {
  edad: number;
  salario: number;
  añosCotizados: number;
  afp: string;
}

const PensionSimulator = () => {
  const [showChart, setShowChart] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    edad: 20,
    salario: 800000,
    añosCotizados: 0,
    afp: 'habitat'
  });

  const añosProyección = Array.from(
    { length: 65 - formData.edad + 1 },
    (_, i) => (new Date().getFullYear() + i).toString()
  );

  const calcularProyección = () => {
    const salarioInicial = formData.salario;
    const incrementoAnual = 0.03;
    const rentabilidad = 0.05;

    return añosProyección.map((_, index) => {
      if (index === 0) return 0;
      
      const añosTranscurridos = index;
      const salarioActual = salarioInicial * Math.pow(1 + incrementoAnual, añosTranscurridos);
      const cotizaciónMensual = salarioActual * 0.1;
      const cotizaciónAnual = cotizaciónMensual * 12;
      
      const fondoAcumulado = cotizaciónAnual * 
        (Math.pow(1 + rentabilidad, añosTranscurridos) - 1) / rentabilidad;
      
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
            <select 
              name="afp"
              value={formData.afp}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Elige tu AFP</option>
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
        className="w-full mt-8 bg-blue-900 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
      >
        Actualizar simulación
      </button>

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
  );
};

export default PensionSimulator; 