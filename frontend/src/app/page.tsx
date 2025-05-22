/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Header from './components/Header';
import PensionSimulator from './components/PensionSimulator';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

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

            <PensionSimulator />

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

      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
