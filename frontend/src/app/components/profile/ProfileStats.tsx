import React from 'react';
import { formatCurrency } from '../../utils/formatters';

const ProfileStats: React.FC = () => {
  const stats = [
    {
      label: 'Retorno Anual',
      value: '+12.5%',
      color: 'text-green-600',
      icon: '📈'
    },
    {
      label: 'Comisiones Pagadas',
      value: '-$450.000',
      color: 'text-red-600',
      icon: '💰'
    },
    {
      label: 'Pensión Estimada',
      value: '$850.000',
      color: 'text-blue-600',
      icon: '🎯'
    },
    {
      label: 'Posición Ranking',
      value: 'Top 15%',
      color: 'text-orange-400',
      icon: '🏆'
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Resumen Previsional</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-lg font-semibold ${stat.color}`}>
                {stat.value}
              </span>
            </div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileStats; 