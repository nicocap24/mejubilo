import React from 'react';
import UserProfileHeader from './UserProfileHeader';
import UserProfileStats from './UserProfileStats';
import UserProfileHistory from './UserProfileHistory';

interface UserProfileSectionProps {
  username: string;
}

const UserProfileSection: React.FC<UserProfileSectionProps> = ({ username }) => {
  // En una aplicación real, aquí se haría una llamada a la API para obtener los datos del usuario
  const userData = {
    username,
    afpBalance: 45000000,
    afpName: "Capital",
    afpFundType: "A",
    profit: 2500000,
    annualReturn: 12.5,
    fees: 450000,
    estimatedPension: 850000,
    rankingPosition: "Top 15%"
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header con información básica */}
        <UserProfileHeader user={userData} />

        {/* Estadísticas principales */}
        <div className="p-8 border-b border-gray-200">
          <UserProfileStats user={userData} />
        </div>

        {/* Historial de movimientos */}
        <div className="p-8">
          <UserProfileHistory username={username} />
        </div>
      </div>
    </div>
  );
};

export default UserProfileSection; 