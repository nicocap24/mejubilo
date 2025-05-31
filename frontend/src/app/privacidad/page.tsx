'use client';

// Privacy Policy Page for Google AdSense Compliance
import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-12 py-16 max-w-4xl w-full flex flex-col items-center border-2 border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Información que Recopilamos</h2>
            <p className="text-gray-600 leading-relaxed">
              En MeJubilo.com, recopilamos información que usted nos proporciona directamente, incluyendo:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Información de contacto (correo electrónico)</li>
              <li>Información de su cuenta de AFP</li>
              <li>Datos demográficos básicos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Uso de Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Utilizamos cookies y tecnologías similares para:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Mejorar su experiencia de navegación</li>
              <li>Analizar el uso del sitio</li>
              <li>Personalizar el contenido y anuncios</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Google AdSense</h2>
            <p className="text-gray-600 leading-relaxed">
              Utilizamos Google AdSense para mostrar anuncios. Google AdSense utiliza cookies para mostrar anuncios basados en sus visitas anteriores a este y otros sitios web. Puede optar por no recibir anuncios personalizados visitando la página de Configuración de anuncios de Google.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Protección de Datos</h2>
            <p className="text-gray-600 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sus Derechos</h2>
            <p className="text-gray-600 leading-relaxed">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar información inexacta</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contacto</h2>
            <p className="text-gray-600 leading-relaxed">
              Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos a través de:
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