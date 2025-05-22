import React from 'react';
import Image from 'next/image';

export default function AcercaPage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-12 py-16 max-w-2xl w-full flex flex-col items-center border-2 border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Acerca de MeJubilo</h1>
        <section className="mb-8 flex flex-col items-center">
          <Image
            src="/nico.jpg"
            alt="Nicolás Arrieta L."
            width={180}
            height={180}
            className="rounded-full border-4 border-orange-400 mb-6"
            priority
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Quienes Somos</h2>
          <div className="prose prose-lg text-center">
            <p className="text-gray-600 leading-relaxed">
              Mi nombre es Nicolás Arrieta L. Soy el creador de MeJubilo.com. Desde que aprendí acerca del sistema de pensiones en 2016 me dí cuenta que hacía falta mucha educación previsional en el país. Es por esto que decidí crear MeJubilo.com, una herramienta digital que te permite de manera fácil e interactiva aprender cual es tu situación previsional y cómo vas respecto al resto.
            </p>
            <a
              href="https://x.com/nicocapital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold text-lg"
            >
              Sígueme en Twitter/X: @nicocapital
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 