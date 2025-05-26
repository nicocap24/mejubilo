import React from 'react';

const ProfileActions: React.FC = () => {
  const actions = [
    {
      label: 'Cambiar Fondo',
      description: 'Modifica tu tipo de fondo AFP',
      icon: '🔄',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      label: 'Cambiar AFP',
      description: 'Cambia tu administradora de fondos',
      icon: '🏢',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      label: 'Simular Pensión',
      description: 'Calcula tu pensión estimada',
      icon: '🧮',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      label: 'Ahorro Previsional',
      description: 'Gestiona tu ahorro voluntario',
      icon: '💰',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Acciones Rápidas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} text-white rounded-xl p-6 text-left transition-colors`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{action.icon}</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">{action.label}</h3>
            <p className="text-sm text-white/80">{action.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileActions; 