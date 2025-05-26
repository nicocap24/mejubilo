import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Qué es MeJubilo?",
      answer: "MeJubilo es una plataforma que te ayuda a mejorar tu situación previsional, permitiéndote tomar decisiones informadas sobre tu futuro financiero."
    },
    {
      question: "¿Qué es MeJubilo y cómo funciona?",
      answer: "MeJubilo es una herramienta que analiza tu situación previsional actual y te proporciona recomendaciones personalizadas para mejorar tu pensión futura."
    },
    {
      question: "¿Es seguro conectar mi cuenta AFP a MeJubilo?",
      answer: "Sí, MeJubilo utiliza las más altas medidas de seguridad y encriptación para proteger tus datos personales y financieros."
    },
    {
      question: "¿Cómo me ayuda MeJubilo a mejorar mi pensión?",
      answer: "MeJubilo analiza tu situación actual, identifica oportunidades de mejora y te proporciona recomendaciones personalizadas para optimizar tu ahorro previsional."
    },
    {
      question: "¿Cuánto cuesta usar MeJubilo?",
      answer: "MeJubilo ofrece diferentes planes adaptados a tus necesidades. Contáctanos para conocer más detalles sobre nuestros precios."
    },
    {
      question: "¿Qué información necesito para registrarme?",
      answer: "Solo necesitas información básica como tu edad, salario actual y años cotizados. El proceso es simple y rápido."
    },
    {
      question: "¿Puedo cambiar de AFP a través de MeJubilo?",
      answer: "Sí, MeJubilo te ayuda a evaluar las diferentes opciones de AFP y te guía en el proceso de cambio si es beneficioso para ti."
    },
    {
      question: "¿Cómo se compara mi situación con la de otros usuarios?",
      answer: "MeJubilo te proporciona análisis comparativos anónimos que te permiten entender tu posición relativa y oportunidades de mejora."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Resolvemos tus dudas sobre cómo MeJubilo puede ayudarte a mejorar tu situación previsional
          </p>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">
              ¿No encuentras respuesta a tu pregunta?
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 