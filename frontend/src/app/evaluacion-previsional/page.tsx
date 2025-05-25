'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EvaluacionPrevisional() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    afp: '',
    fondo: '',
    saldo: '',
    fechaNacimiento: '',
    nombre: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form data:', formData);
    // Redirect to a thank you page or show a success message
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" 
         style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-12 py-16 max-w-2xl w-full flex flex-col items-center border-2 border-gray-200">
        {/* Header */}
        <div className="mb-8">
          <span className="text-4xl font-bold text-gray-700 mr-1">Me</span>
          <span className="text-4xl font-bold text-orange-400">Jubilo</span>
        </div>
        
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Evaluación Previsional Gratuita
        </h1>
        
        <p className="text-xl text-center text-gray-700 mb-8">
          Completa tus datos para recibir una evaluación personalizada
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700 mb-1">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                required
                value={formData.fechaNacimiento}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="afp" className="block text-sm font-medium text-gray-700 mb-1">
                AFP
              </label>
              <select
                id="afp"
                name="afp"
                required
                value={formData.afp}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecciona tu AFP</option>
                <option value="capital">Capital</option>
                <option value="cuprum">Cuprum</option>
                <option value="habitat">Habitat</option>
                <option value="modelo">Modelo</option>
                <option value="planvital">PlanVital</option>
                <option value="provida">ProVida</option>
                <option value="uno">Uno</option>
              </select>
            </div>

            <div>
              <label htmlFor="fondo" className="block text-sm font-medium text-gray-700 mb-1">
                Fondo
              </label>
              <select
                id="fondo"
                name="fondo"
                required
                value={formData.fondo}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecciona tu fondo</option>
                <option value="A">Fondo A</option>
                <option value="B">Fondo B</option>
                <option value="C">Fondo C</option>
                <option value="D">Fondo D</option>
                <option value="E">Fondo E</option>
              </select>
            </div>

            <div>
              <label htmlFor="saldo" className="block text-sm font-medium text-gray-700 mb-1">
                Saldo actual
              </label>
              <input
                type="number"
                id="saldo"
                name="saldo"
                required
                value={formData.saldo}
                onChange={handleChange}
                placeholder="Ingresa tu saldo actual"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full text-xl shadow-md transition-colors"
          >
            Solicitar Evaluación
          </button>
        </form>
      </div>
    </div>
  );
} 