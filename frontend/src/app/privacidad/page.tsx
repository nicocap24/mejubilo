import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Información que Recopilamos</h2>
            <p className="mb-4">
              En MeJubilo, recopilamos información necesaria para proporcionar nuestros servicios de información previsional, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Información personal básica (nombre, email)</li>
              <li>Datos previsionales que usted nos proporcione voluntariamente</li>
              <li>Información sobre su uso de nuestra plataforma</li>
              <li>Datos de contacto para comunicaciones relacionadas con nuestros servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Uso de la Información</h2>
            <p className="mb-4">
              Utilizamos su información para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar análisis y recomendaciones previsionales personalizadas</li>
              <li>Mejorar nuestros servicios y la experiencia del usuario</li>
              <li>Comunicarnos con usted sobre actualizaciones y servicios relevantes</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Protección de Datos</h2>
            <p className="mb-4">
              Nos comprometemos a proteger su información mediante:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encriptación de datos sensibles</li>
              <li>Acceso restringido a la información personal</li>
              <li>Actualizaciones regulares de nuestras medidas de seguridad</li>
              <li>Cumplimiento de las regulaciones de protección de datos aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Sus Derechos</h2>
            <p className="mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a su información personal</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contacto</h2>
            <p>
              Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos en:
              <br />
              <a href="mailto:nico@pensionfi.com" className="text-orange-500 hover:text-orange-600">
                nico@pensionfi.com
              </a>
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 