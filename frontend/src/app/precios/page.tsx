'use client';

import React from 'react';
import PricingSection from '../components/PricingSection';

export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Planes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Todos nuestros planes incluyen IVA.
          </p>
        </div>
        
        <PricingSection />
        
        <div className="text-center mt-12 text-gray-600">
          <p>Puedes cambiar o cancelar tu plan en cualquier momento.</p>
        </div>
      </div>
    </div>
  );
} 