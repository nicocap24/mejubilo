/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [saldo, setSaldo] = useState('');
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-12 py-16 max-w-2xl w-full flex flex-col items-center border-2 border-gray-200">
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-6">
          ¿Ya quieres <span className="text-orange-400">jubilar</span>?
        </h1>
        {/* Subtext */}
        <p className="text-2xl text-center text-gray-700 mb-10">
          Obtén tu evaluación 100% GRATUITA y en segundos para saber cómo vas
        </p>
        {/* Button */}
        <Link
          href="/evaluacion-previsional"
          className="w-auto px-8 bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 rounded-full text-xl shadow-md transition-colors flex items-center justify-center"
        >
          Descubre cómo
        </Link>
      </div>
    </div>
  );
}
