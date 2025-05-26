import React from 'react';

const ProfileHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Juan Pérez</h1>
          <p className="text-orange-100">AFP Capital • Fondo A</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-orange-100">Saldo Actual</p>
          <p className="text-2xl font-bold">$45.000.000</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader; 