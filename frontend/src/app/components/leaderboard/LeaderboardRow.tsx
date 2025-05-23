import React from 'react';
import { LeaderboardUser } from '../../types/leaderboard';
import { formatCurrency } from '../../utils/formatters';

interface LeaderboardRowProps {
  user: LeaderboardUser;
  index: number;
}

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ user, index }) => {
  const getRowBackground = () => {
    if (index === 0) return 'bg-yellow-50';
    if (index === 1) return 'bg-gray-100';
    if (index === 2) return 'bg-amber-50';
    return '';
  };

  const getMedal = () => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return null;
  };

  return (
    <tr 
      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${getRowBackground()}`}
    >
      <td className="py-4 px-4">
        <div className="flex items-center">
          {index < 3 && (
            <span className="mr-2 text-lg">{getMedal()}</span>
          )}
          <span className="font-medium text-gray-900">{user.username}</span>
        </div>
      </td>
      <td className="text-right py-4 px-4 text-gray-900">
        {formatCurrency(user.afpBalance)}
      </td>
      <td className="text-center py-4 px-4">
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
          {user.afpName}
        </span>
      </td>
      <td className="text-center py-4 px-4">
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {user.afpFundType}
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
  );
};

export default LeaderboardRow; 