import React from 'react';

const LeaderboardHeader: React.FC = () => {
  return (
    <thead>
      <tr className="border-b-2 border-gray-200">
        <th className="text-center py-4 px-4 text-gray-600 font-semibold">AFP</th>
        <th className="text-center py-4 px-4 text-gray-600 font-semibold">Fondo AFP</th>
        <th className="text-right py-4 px-4 text-gray-600 font-semibold">Saldo AFP</th>
      </tr>
    </thead>
  );
};

export default LeaderboardHeader; 