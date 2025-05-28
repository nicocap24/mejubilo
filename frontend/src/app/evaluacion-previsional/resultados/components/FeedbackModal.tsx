import React from 'react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
  feedbackType: 'positive' | 'negative' | null;
  comment: string;
  onCommentChange: (comment: string) => void;
}

export function FeedbackModal({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting,
  error,
  success,
  feedbackType,
  comment,
  onCommentChange
}: FeedbackModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold mb-4">
          {feedbackType === 'positive' ? '¿Qué te gustó?' : '¿Qué podemos mejorar?'}
        </h3>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Comentarios
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              value={comment}
              onChange={(e) => onCommentChange(e.target.value)}
              placeholder="Escribe tus comentarios aquí..."
              required
            />
          </div>
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg">
              ¡Gracias por tu feedback!
            </div>
          )}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 