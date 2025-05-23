import React from 'react';

const ProfileStats = () => (
  <div className="px-4 py-2">
    <div className="mb-3">
      <p className="text-sm text-gray-500">Retornos Obtenidos</p>
      <p className="text-lg font-semibold text-green-600">+12.5%</p>
    </div>
    <div className="mb-3">
      <p className="text-sm text-gray-500">Comisiones Pagadas</p>
      <p className="text-lg font-semibold text-red-600">-$450,000</p>
    </div>
    <div className="mb-3">
      <p className="text-sm text-gray-500">Pensión Estimada</p>
      <p className="text-lg font-semibold text-blue-600">$850,000</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Posición Ranking</p>
      <p className="text-lg font-semibold text-orange-400">Top 15%</p>
    </div>
  </div>
);

export default ProfileStats; 