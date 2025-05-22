/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Header from './components/Header';
import PensionSimulator from './components/PensionSimulator';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

// Valor UF actual (se podría actualizar con una API en producción)
const UF_VALUE = 39000;

// Result type
interface Result {
  rentaVitalicia: number;
  seguroSocial: number;
  pgu: number;
  total: number;
}

// Cálculo de Renta Vitalicia
const calculateRentaVitalicia = (saldoAFP: number): number => {
  const tasa = 0.0327; // Tasa actual según el ejemplo
  // Para poder optar por una renta vitalicia se debe poder obtener más de 2 UF
  const minimumPension = 2 * UF_VALUE;
  // Verificar si cumple el requisito mínimo
  if ((tasa * 2 * saldoAFP) / 12 < minimumPension) {
    return 0;
  }
  // Cálculo: tasa * 2 * saldo / 12
  return Math.round((tasa * 2 * saldoAFP) / 12);
};

// Cálculo de Seguro Social
const calculateSeguroSocial = (saldoAFP: number): number => {
  // Para hombres, mínimo 20 años cotizados, máximo 25
  // Beneficio de 0.1 UF por año cotizado
  let añosCotizados = 0;
  if (saldoAFP >= 100000000) {
    añosCotizados = 25; // Máximo
  } else if (saldoAFP >= 50000000) {
    añosCotizados = 20; // Mínimo
  } else {
    añosCotizados = 0; // No califica
  }
  return Math.round(añosCotizados * 0.1 * UF_VALUE);
};

// Cálculo de PGU
const calculatePGU = (): number => {
  // Valor fijo según la hoja de cálculo
  return 214296;
};

// Cálculo total
const calculateTotalPension = (saldoAFP: number): Result => {
  const rentaVitalicia = calculateRentaVitalicia(saldoAFP);
  const seguroSocial = calculateSeguroSocial(saldoAFP);
  const pgu = calculatePGU();
  return {
    rentaVitalicia,
    seguroSocial,
    pgu,
    total: rentaVitalicia + seguroSocial + pgu
  };
};

// Componente de pantalla de "Calculando..."
function CalculandoScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-96 w-full">
      <h2 className="text-4xl font-bold mb-4">Calculando....</h2>
      <p className="text-lg mb-2">Esto puede tomar un par de segundos…</p>
      <p className="text-lg mb-4">Ya estamos casi !</p>
      <img src="/calculando-face.jpg" alt="Calculando" className="w-24 h-24 rounded" />
    </div>
  );
}

export default function Home() {
  const [saldo, setSaldo] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    if (!saldo || isNaN(Number(saldo))) return;
    setIsCalculating(true);
    setResult(null); // Oculta el resultado anterior mientras calcula
    setTimeout(() => {
      setResult(calculateTotalPension(Number(saldo)));
      setIsCalculating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-8 py-10 max-w-lg w-full flex flex-col items-center border-2 border-gray-200" style={{ minHeight: 420 }}>
        {/* Header */}
        <div className="mb-6">
          <span className="text-3xl font-bold text-gray-700 mr-1">Me</span>
          <span className="text-3xl font-bold text-orange-400">Jubilo</span>
        </div>
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2">
          Ya quieres <span className="text-orange-400">jubilar</span> ?
        </h1>
        {/* Subtext */}
        <p className="text-lg text-center text-gray-700 mb-6">
          Descubre con cuánto $$<br />podrías jubilar <span className="font-bold">HOY</span>:
        </p>
        {/* Input and Button */}
        <input
          type="text"
          placeholder="Saldo AFP"
          value={saldo}
          onChange={e => {
            const value = e.target.value.replace(/[^0-9]/g, '');
            setSaldo(value);
          }}
          className="w-full max-w-xs px-4 py-3 mb-4 border border-gray-400 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-700 text-gray-700"
        />
        <button
          className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full text-lg shadow-md transition-colors flex items-center justify-center mb-2"
          onClick={handleCalculate}
        >
          Quiero saber <span className="ml-2">👀</span>
        </button>
        {/* Result Box o Calculando */}
        {isCalculating ? (
          <CalculandoScreen />
        ) : result && (
          <div className="mt-6 w-full max-w-xs bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 text-center shadow-lg animate-fade-in">
            <h2 className="text-xl font-bold text-blue-900 mb-2">¡Tu pensión estimada!</h2>
            <div className="text-lg text-gray-700 mb-1 flex justify-between"><span>Renta Vitalicia:</span> <span className="font-semibold">${result.rentaVitalicia.toLocaleString('es-CL')}</span></div>
            <div className="text-lg text-gray-700 mb-1 flex justify-between"><span>Seguro Social:</span> <span className="font-semibold">${result.seguroSocial.toLocaleString('es-CL')}</span></div>
            <div className="text-lg text-gray-700 mb-1 flex justify-between"><span>PGU:</span> <span className="font-semibold">${result.pgu.toLocaleString('es-CL')}</span></div>
            <hr className="my-2 border-blue-200" />
            <div className="text-lg font-bold text-blue-800 flex justify-between"><span>Total:</span> <span>${result.total.toLocaleString('es-CL')}</span></div>
          </div>
        )}
      </div>
    </div>
  );
}
