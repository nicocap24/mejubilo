'use client';

import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-12 py-16 max-w-4xl w-full flex flex-col items-center border-2 border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Términos y Condiciones</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Aceptación de los Términos</h2>
            <p className="text-gray-600 leading-relaxed">
              Al acceder y utilizar MeJubilo.com, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Uso del Servicio</h2>
            <p className="text-gray-600 leading-relaxed">
              MeJubilo.com proporciona información y herramientas educativas sobre el sistema previsional chileno. Usted acepta:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Proporcionar información precisa y veraz</li>
              <li>No utilizar el servicio para fines ilegales</li>
              <li>No intentar acceder a áreas restringidas del sitio</li>
              <li>No interferir con el funcionamiento del sitio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Propiedad Intelectual</h2>
            <p className="text-gray-600 leading-relaxed">
              Todo el contenido de MeJubilo.com, incluyendo textos, gráficos, logos y software, está protegido por derechos de autor y otras leyes de propiedad intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitación de Responsabilidad</h2>
            <p className="text-gray-600 leading-relaxed">
              La información proporcionada en MeJubilo.com es solo con fines educativos y no constituye asesoría financiera profesional. No nos hacemos responsables por:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Decisiones financieras basadas en la información del sitio</li>
              <li>Pérdidas o daños resultantes del uso del sitio</li>
              <li>Interrupciones en el servicio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Publicidad</h2>
            <p className="text-gray-600 leading-relaxed">
              MeJubilo.com utiliza Google AdSense para mostrar anuncios. Los anuncios mostrados son responsabilidad de los anunciantes y no representan necesariamente nuestras opiniones o recomendaciones.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modificaciones</h2>
            <p className="text-gray-600 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contacto</h2>
            <p className="text-gray-600 leading-relaxed">
              Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a través de:
            </p>
            <p className="text-gray-600 leading-relaxed">
              Email: contacto@mejubilo.com
            </p>
          </section>

          <section>
            <p className="text-gray-600 leading-relaxed">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 