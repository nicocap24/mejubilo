import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileActions from './ProfileActions';
import ProfileHistory from './ProfileHistory';

const ProfileSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header con información básica */}
        <ProfileHeader />

        {/* Estadísticas principales */}
        <div className="p-8 border-b border-gray-200">
          <ProfileStats />
        </div>

        {/* Acciones rápidas */}
        <div className="p-8 border-b border-gray-200">
          <ProfileActions />
        </div>

        {/* Historial de movimientos */}
        <div className="p-8">
          <ProfileHistory />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection; 