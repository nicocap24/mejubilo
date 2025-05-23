'use client';

import React from 'react';
import Header from '../components/Header';
import LatestSwapsSection from '../components/LatestSwapsSection';
import Footer from '../components/Footer';

export default function UltimosMovimientosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <LatestSwapsSection />
      </main>
      <Footer />
    </div>
  );
} 