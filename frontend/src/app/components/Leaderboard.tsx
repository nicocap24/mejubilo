import React from 'react';

interface LeaderboardUser {
  username: string;
  afpBalance: number;
  afpFund: string;
  profit: number;
}

interface LeaderboardProps {
  users: LeaderboardUser[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ users }) => {
  // Sort users by profit in descending order
  const sortedUsers = [...users].sort((a, b) => b.profit - a.profit);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 text-gray-600 font-semibold">Usuario</th>
              <th className="text-right py-4 px-4 text-gray-600 font-semibold">Saldo AFP</th>
              <th className="text-center py-4 px-4 text-gray-600 font-semibold">Fondo AFP</th>
              <th className="text-right py-4 px-4 text-gray-600 font-semibold">Ganancia</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user, index) => (
              <tr 
                key={user.username}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  index === 0 ? 'bg-yellow-50' : 
                  index === 1 ? 'bg-gray-100' : 
                  index === 2 ? 'bg-amber-50' : ''
                }`}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    {index < 3 && (
                      <span className="mr-2 text-lg">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                      </span>
                    )}
                    <span className="font-medium text-gray-900">{user.username}</span>
                  </div>
                </td>
                <td className="text-right py-4 px-4 text-gray-900">
                  {formatCurrency(user.afpBalance)}
                </td>
                <td className="text-center py-4 px-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {user.afpFund}
                  </span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className={`font-medium ${
                    user.profit >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {formatCurrency(user.profit)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard; 