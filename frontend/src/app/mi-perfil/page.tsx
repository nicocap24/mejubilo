'use client';

import React from 'react';
import Header from '../components/Header';
import ProfileSection from '../components/profile/ProfileSection';
import Footer from '../components/Footer';

export default function MiPerfilPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <ProfileSection />
        </div>
      </main>
      <Footer />
    </div>
  );
} 