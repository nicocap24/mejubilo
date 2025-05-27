'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormField from './components/FormField';
import { FORM_FIELDS } from './constants';
import { createEvaluation } from '../../lib/airtable';

interface FormData {
  afp: string;
  fondo: string;
  saldo: string;
  fechaNacimiento: string;
}

export default function EvaluacionPrevisional() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
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
      // Validate form data
      if (!formData.afp || !formData.fondo || !formData.saldo || !formData.fechaNacimiento) {
        throw new Error('Por favor, completa todos los campos del formulario');
      }

      // Validate saldo is a positive number
      const saldo = Number(formData.saldo);
      if (isNaN(saldo) || saldo <= 0) {
        throw new Error('Por favor, ingresa un saldo válido');
      }

      // Create URL parameters with the form data
      const params = new URLSearchParams({
        afp: formData.afp,
        fondo: formData.fondo,
        saldo: formData.saldo,
        fechaNacimiento: formData.fechaNacimiento
      });
      
      // Navigate to results page using Next.js router
      const resultsUrl = `/evaluacion-previsional/resultados?${params.toString()}`;
      
      // Try to save to Airtable after navigation
      try {
        await createEvaluation({
          afp: formData.afp,
          fondo: formData.fondo,
          saldo: saldo,
          fechaNacimiento: formData.fechaNacimiento
        });
      } catch (airtableError) {
        console.error('Airtable error:', airtableError);
        // Continue with navigation even if Airtable fails
      }

      // Navigate to results
      router.push(resultsUrl);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      const fullError = err instanceof Error ? err.stack : JSON.stringify(err);
      setError(`Error: ${errorMessage}\nDetalles: ${fullError}`);
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
    // Clear error when user starts typing
    if (error) setError(null);
  };

  console.log('Renderizando EvaluacionPrevisional');
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
            {FORM_FIELDS.map((field) => (
              <FormField
                key={field.id}
                {...field}
                value={formData[field.name as keyof FormData]}
                onChange={handleChange}
                required
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-64 md:w-72 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full text-xl shadow-md transition-colors disabled:bg-red-400"
          >
            {isSubmitting ? 'Enviando...' : 'Solicitar Evaluación'}
          </button>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-center">{error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 