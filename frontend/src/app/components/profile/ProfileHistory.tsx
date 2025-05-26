import React from 'react';
import { formatCurrency } from '../../utils/formatters';

const ProfileHistory: React.FC = () => {
  const history = [
    {
      date: '20 Mar 2024',
      type: 'Cambio de Fondo',
      description: 'Cambio de Fondo A a Fondo B',
      amount: null
    },
    {
      date: '15 Mar 2024',
      type: 'Depósito',
      description: 'Depósito mensual',
      amount: 450000
    },
    {
      date: '10 Mar 2024',
      type: 'Comisión',
      description: 'Comisión mensual AFP',
      amount: -25000
    },
    {
      date: '1 Mar 2024',
      type: 'Rendimiento',
      description: 'Rendimiento mensual',
      amount: 125000
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Historial de Movimientos</h2>
      <div className="space-y-4">
        {history.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                {item.type === 'Cambio de Fondo' && '🔄'}
                {item.type === 'Depósito' && '💰'}
                {item.type === 'Comisión' && '📝'}
                {item.type === 'Rendimiento' && '📈'}
              </div>
              <div>
                <p className="font-medium text-gray-900">{item.type}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">{item.date}</p>
              {item.amount && (
                <p className={`font-medium ${
                  item.amount >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {formatCurrency(item.amount)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="text-orange-400 hover:text-orange-500 font-medium">
          Ver historial completo →
        </button>
      </div>
    </div>
  );
};

export default ProfileHistory; 