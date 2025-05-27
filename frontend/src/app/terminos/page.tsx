import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceptación de los Términos</h2>
            <p className="mb-4">
              Al acceder y utilizar MeJubilo, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Servicios Previsionales</h2>
            <p className="mb-4">
              MeJubilo proporciona:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Información y análisis previsional independiente</li>
              <li>Herramientas de cálculo y simulación</li>
              <li>Recomendaciones personalizadas basadas en datos proporcionados</li>
              <li>Contenido educativo sobre el sistema previsional</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Limitación de Responsabilidad</h2>
            <p className="mb-4">
              La información proporcionada por MeJubilo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Es de carácter informativo y no constituye asesoría financiera profesional</li>
              <li>No garantiza resultados específicos en su planificación previsional</li>
              <li>Debe ser utilizada como una herramienta de referencia</li>
              <li>No reemplaza la consulta con profesionales calificados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Uso del Servicio</h2>
            <p className="mb-4">
              Al utilizar nuestros servicios, usted se compromete a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar información veraz y actualizada</li>
              <li>No utilizar nuestros servicios para fines ilegales</li>
              <li>No compartir su cuenta con terceros</li>
              <li>Respetar la propiedad intelectual de nuestros contenidos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Modificaciones</h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contacto</h2>
            <p>
              Para consultas sobre estos términos y condiciones, contáctenos en:
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