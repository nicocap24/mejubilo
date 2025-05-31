'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { formatCurrency } from '../../../utils/formatters';
import { useState, Suspense } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { FeedbackModal } from './components/FeedbackModal';

function ResultadosContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [subscriptionData, setSubscriptionData] = useState({
    nombre: '',
    email: ''
  });
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState('');
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState({
    rating: '',
    comment: ''
  });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'positive' | 'negative' | null>(null);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  
  // Get form data from URL parameters
  const saldo = Number(searchParams?.get('saldo')) || 0;
  const afp = searchParams?.get('afp') || '';
  const fondo = searchParams?.get('fondo') || '';
  const fechaNacimiento = searchParams?.get('fechaNacimiento') || '';
  const recordId = searchParams?.get('recordId') || '';
  const nombre = searchParams?.get('nombre') || '';
  const email = searchParams?.get('email') || '';

  console.log('URL Parameters:', { saldo, afp, fondo, fechaNacimiento });

  // Calculate age from birth date
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge(fechaNacimiento);
  
  // Calculate results based on form data
  const calculateResults = () => {
    const UF_VALUE = 39200; // Valor actual de la UF
    
    // Base calculations
    const basePension = (saldo * 0.0327 * 2) / 12; // Renta Vitalicia: (Saldo*3,27%*2)/12
    
    // Calculate PGU based on Renta Vitalicia
    let pgu = 0;
    if (basePension < 729764) {
      pgu = 214296; // PGU máximo cuando Renta Vitalicia < $729.764
    } else if (basePension > 1158355) {
      pgu = 0; // No hay PGU cuando Renta Vitalicia > $1.158.355
    } else {
      // PGU = $214.296 * ($1.158.355 - Renta Vitalicia) / ($1.158.355 - $729.764)
      const numerator = 1158355 - basePension;
      const denominator = 1158355 - 729764;
      pgu = Math.round(214296 * (numerator / denominator));
    }

    // Calculate Seguro Social based on saldo
    let seguroSocial = 0;
    if (saldo >= 50000000) {
      seguroSocial = 2.5 * UF_VALUE; // 2.5 UF
    } else if (saldo >= 25000000) {
      seguroSocial = 2 * UF_VALUE; // 2 UF
    }

    // Calculate total pension
    const totalPension = Math.round(basePension + pgu + seguroSocial);

    // AFP commission rates
    const afpRates: Record<string, number> = {
      'PROVIDA': 0.0145,
      'CUPRUM': 0.0144,
      'CAPITAL': 0.0144,
      'HABITAT': 0.0127,
      'PLANVITAL': 0.0116,
      'MODELO': 0.0058,
      'UNO': 0.0049
    };

    // Calculate annual commission for each AFP
    const monthlySalary = 1337722; // Average male salary
    const annualSalary = monthlySalary * 12;
    const commissions: Record<string, number> = {};
    for (const [afpName, rate] of Object.entries(afpRates)) {
      commissions[afpName] = annualSalary * rate;
    }

    // Find current AFP commission and potential savings
    const currentAfp = afp.toUpperCase();
    const currentCommission = commissions[currentAfp] || 0;
    const lowestCommission = commissions['UNO'];
    const potentialSavings = currentCommission - lowestCommission;

    // Adjust AFP rating based on saldo and commission rate
    const afpScore = Math.min(100, Math.max(60, 60 + (saldo / 10000000) * 20));
    
    // Adjust fund rating based on age and saldo
    const fundScore = Math.min(100, Math.max(60, 60 + (saldo / 10000000) * 15 + (age / 65) * 5));

    const resultados = {
      afpRating: {
        score: Math.round(afpScore),
        details: afpScore >= 80 
          ? "Tu AFP tiene un excelente rendimiento histórico y bajas comisiones"
          : afpScore >= 70
          ? "Tu AFP tiene un buen rendimiento histórico y comisiones moderadas"
          : "Considera evaluar otras AFPs para mejorar tu rendimiento",
        currentCommission: currentCommission,
        potentialSavings: potentialSavings,
        commissionRates: afpRates
      },
      fondoRating: {
        score: Math.round(fundScore),
        details: fundScore >= 80
          ? "Tu fondo actual es óptimo para tu perfil de riesgo y edad"
          : fundScore >= 70
          ? "Tu fondo actual es adecuado para tu perfil de riesgo"
          : "Considera revisar tu fondo actual para optimizar tu rendimiento"
      },
      pensionEstimada: {
        rentaVitalicia: Math.round(basePension),
        pgu: pgu,
        seguroSocial: seguroSocial,
        total: totalPension
      }
    };

    console.log('Calculated Results:', resultados);

    return resultados;
  };

  const resultados = calculateResults();

  const getRatingColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const handleSubscriptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriptionData.email || !subscriptionData.nombre) return;

    try {
      const response = await fetch('/api/evaluations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          afp,
          fondo,
          saldo: Number(saldo),
          fechaNacimiento,
          nombre: subscriptionData.nombre,
          email: subscriptionData.email,
          recordId
        }),
      });

      if (!response.ok) {
        throw new Error('Error al guardar la evaluación');
      }

      setShowSuccessMessage(true);
      setSubscriptionData({ nombre: '', email: '' });
    } catch (error: any) {
      console.error('Error al guardar suscripción:', error);
      let errorMsg = 'Hubo un error al procesar tu suscripción. Por favor, intenta nuevamente.';
      if (error && error.message) {
        errorMsg += `\nDetalles: ${error.message}`;
      }
      setError(errorMsg);
    }
  };

  const handleSubscriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubscriptionData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeedback = async (type: 'positive' | 'negative') => {
    setFeedbackType(type);
    setShowFeedbackModal(true);
  };

  const handleSubmitFeedback = async () => {
    if (!feedbackType) return;

    setIsSubmittingFeedback(true);
    setFeedbackError(null);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: feedbackType,
          comment: feedbackComment,
          recordId,
          nombre,
          email,
          afp,
          fondo,
          saldo,
          fechaNacimiento,
          to: 'nico@pensionfi.com'
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el feedback');
      }

      setFeedbackSuccess(true);
      setShowFeedbackModal(false);
    } catch (error) {
      setFeedbackError('Error al enviar el feedback. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(prev => ({
      ...prev,
      comment: e.target.value
    }));
  };

  const handleRatingClick = (rating: 'up' | 'down') => {
    setFeedback(prev => ({
      ...prev,
      rating
    }));
    setShowFeedbackModal(true);
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center px-4" 
         style={{ backgroundImage: 'url(/bg-hero.png)', backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-6 md:px-12 py-12 md:py-16 max-w-2xl w-full flex flex-col items-center border-2 border-gray-200">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="text-4xl md:text-5xl font-bold text-gray-700 mr-1">Me</span>
          <span className="text-4xl md:text-5xl font-bold text-orange-400">Jubilo</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 md:mb-6">
          Resultados de tu Evaluación
        </h1>

        {/* Ratings Section */}
        <div className="w-full space-y-8 mb-12">
          {/* AFP Rating */}
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Calificación de tu AFP</h2>
            <div className={`text-5xl font-bold mb-2 ${getRatingColor(resultados.afpRating.score)}`}>
              {resultados.afpRating.score}/100
            </div>
            <p className="text-lg text-gray-600 mb-4">{resultados.afpRating.details}</p>
            
            {/* Commission Information */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="space-y-3">
                <p className="text-lg">
                  <span className="font-semibold text-gray-900">Comisión anual actual:</span>{' '}
                  <span className="text-gray-900">{formatCurrency(resultados.afpRating.currentCommission)}</span>
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-gray-900">Ahorro potencial con AFP UNO:</span>{' '}
                  <span className="text-gray-900">{formatCurrency(resultados.afpRating.potentialSavings)}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Fund Rating */}
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Calificación de tu Fondo</h2>
            <div className={`text-5xl font-bold mb-2 ${getRatingColor(resultados.fondoRating.score)}`}>
              {resultados.fondoRating.score}/100
            </div>
            <p className="text-lg text-gray-600">{resultados.fondoRating.details}</p>
          </div>
        </div>

        {/* Pension Estimation Section */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Estimación de tu Pensión</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-6 flex justify-center items-center gap-8">
              <h3 className="text-xl font-semibold text-blue-800">Renta Vitalicia:</h3>
              <p className="text-2xl font-bold text-blue-900">{formatCurrency(resultados.pensionEstimada.rentaVitalicia)}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 flex justify-center items-center gap-8">
              <h3 className="text-xl font-semibold text-green-800">PGU:</h3>
              <p className="text-2xl font-bold text-green-900">{formatCurrency(resultados.pensionEstimada.pgu)}</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 flex justify-center items-center gap-8">
              <h3 className="text-xl font-semibold text-purple-800">Seguro Social:</h3>
              <p className="text-2xl font-bold text-purple-900">{formatCurrency(resultados.pensionEstimada.seguroSocial)}</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 flex justify-center items-center gap-8">
              <h3 className="text-xl font-semibold text-orange-800">Pensión Total:</h3>
              <p className="text-2xl font-bold text-orange-900">{formatCurrency(resultados.pensionEstimada.total)}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 space-y-4 w-full max-w-md">
          <button 
            onClick={() => setShowModal(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full text-xl shadow-md transition-colors"
          >
            Obtener Recomendaciones
          </button>
          <div className="text-center">
            <button 
              onClick={() => router.push('/evaluacion-previsional')}
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              volver a evaluar
            </button>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="w-full flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => handleRatingClick('up')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Thumbs up"
          >
            <FaThumbsUp className="text-2xl text-green-500" />
          </button>
          <button
            onClick={() => handleRatingClick('down')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Thumbs down"
          >
            <FaThumbsDown className="text-2xl text-red-500" />
          </button>
          <button
            onClick={() => setShowFeedbackModal(true)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Enviar feedback
          </button>
        </div>

        {/* Feedback Modal */}
        <FeedbackModal
          isOpen={showFeedbackModal}
          onClose={() => setShowFeedbackModal(false)}
          onSubmit={handleSubmitFeedback}
          isSubmitting={isSubmittingFeedback}
          error={feedbackError}
          success={feedbackSuccess}
          feedbackType={feedbackType}
          comment={feedbackComment}
          onCommentChange={setFeedbackComment}
        />

        {/* Success Message */}
        {feedbackSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 text-center">
              <h3 className="text-xl font-semibold mb-2">¡Gracias por tu feedback!</h3>
              <p className="text-gray-600 mb-4">Tu opinión es muy importante para nosotros.</p>
              <button
                onClick={() => setFeedbackSubmitted(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Recibe recomendaciones personalizadas
              </h2>
              
              <form onSubmit={handleSubscriptionSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={subscriptionData.nombre}
                    onChange={handleSubscriptionChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    required
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={subscriptionData.email}
                    onChange={handleSubscriptionChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    required
                    placeholder="Ingresa tu correo electrónico"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 rounded-full text-lg shadow-md transition-colors disabled:bg-orange-300"
                >
                  {isSubscribing ? 'Enviando...' : 'Recibir Recomendaciones'}
                </button>
                {error && (
                  <p className="text-center text-sm text-red-600">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResultadosEvaluacion() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ResultadosContent />
    </Suspense>
  );
}
