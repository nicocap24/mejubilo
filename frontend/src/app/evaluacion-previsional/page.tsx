'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createEvaluation } from '@/lib/airtable';

export default function EvaluacionPrevisional() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    afp: '',
    fondo: '',
    saldo: '',
    fechaNacimiento: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Save to Airtable
      await createEvaluation({
        nombre: formData.nombre,
        email: formData.email,
        afp: formData.afp,
        fondo: formData.fondo,
        saldo: Number(formData.saldo),
        fechaNacimiento: formData.fechaNacimiento
      });

      // Create URL parameters with the form data
      const params = new URLSearchParams({
        afp: formData.afp,
        fondo: formData.fondo,
        saldo: formData.saldo,
        fechaNacimiento: formData.fechaNacimiento
      });
      
      // Navigate to results page with the parameters
      router.push(`/evaluacion-previsional/resultados?${params.toString()}`);
    } catch (err) {
      setError('Hubo un error al guardar tu evaluación. Por favor, intenta nuevamente.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputStyles = "w-64 md:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-lg";
  const labelStyles = "block text-lg font-medium text-gray-700 mb-2 text-center";

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center px-4" 
         style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-6 md:px-12 py-12 md:py-16 max-w-2xl w-full flex flex-col items-center border-2 border-gray-200">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="text-4xl md:text-5xl font-bold text-gray-700 mr-1">Me</span>
          <span className="text-4xl md:text-5xl font-bold text-orange-400">Jubilo</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 md:mb-6">
          Evaluación Previsional Gratuita
        </h1>
        
        <p className="text-xl md:text-2xl text-center text-gray-700 mb-8">
          Completa tus datos para recibir una evaluación personalizada
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-8 flex flex-col items-center">
          <div className="space-y-6 flex flex-col items-center">
            <div className="text-center">
              <label htmlFor="nombre" className={labelStyles}>
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
                className={inputStyles}
              />
            </div>

            <div className="text-center">
              <label htmlFor="email" className={labelStyles}>
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Ingresa tu correo electrónico"
                className={inputStyles}
              />
            </div>

            <div className="text-center">
              <label htmlFor="afp" className={labelStyles}>
                AFP
              </label>
              <select
                id="afp"
                name="afp"
                required
                value={formData.afp}
                onChange={handleChange}
                className={inputStyles}
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

            <div className="text-center">
              <label htmlFor="fondo" className={labelStyles}>
                Fondo
              </label>
              <select
                id="fondo"
                name="fondo"
                required
                value={formData.fondo}
                onChange={handleChange}
                className={inputStyles}
              >
                <option value="">Selecciona tu fondo</option>
                <option value="A">Fondo A</option>
                <option value="B">Fondo B</option>
                <option value="C">Fondo C</option>
                <option value="D">Fondo D</option>
                <option value="E">Fondo E</option>
              </select>
            </div>

            <div className="text-center">
              <label htmlFor="saldo" className={labelStyles}>
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
                className={inputStyles}
              />
            </div>

            <div className="text-center">
              <label htmlFor="fechaNacimiento" className={labelStyles}>
                Fecha de nacimiento
              </label>
              <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                required
                value={formData.fechaNacimiento}
                onChange={handleChange}
                className={inputStyles}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-64 md:w-72 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full text-xl shadow-md transition-colors disabled:bg-red-400"
          >
            {isSubmitting ? 'Enviando...' : 'Solicitar Evaluación'}
          </button>

          {error && (
            <p className="text-red-600 text-center mt-4">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
} 