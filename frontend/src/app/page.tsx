/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Header from './components/Header';
import PensionSimulator from './components/PensionSimulator';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Link from 'next/link';

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
    setResult(null);
    setTimeout(() => {
      setResult(calculateTotalPension(Number(saldo)));
      setIsCalculating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-12 py-16 max-w-2xl w-full flex flex-col items-center border-2 border-gray-200">
        {/* Header */}
        <div className="mb-8">
          <span className="text-4xl font-bold text-gray-700 mr-1">Me</span>
          <span className="text-4xl font-bold text-orange-400">Jubilo</span>
        </div>
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-6">
          Toma el control de tus ahorros
        </h1>
        {/* Subtext */}
        <p className="text-2xl text-center text-gray-700 mb-10">
          Renta más. Paga menos comisión. Jubila mejor.
        </p>
        {/* Button */}
        <Link
          href="/entra"
          className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full text-xl shadow-md transition-colors flex items-center justify-center"
        >
          Descubre cómo
        </Link>
      </div>
    </div>
  );
}
