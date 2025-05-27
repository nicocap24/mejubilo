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

  return (
    <tr 
      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${getRowBackground()}`}
    >
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
      <td className="text-right py-4 px-4 text-gray-900">
        {formatCurrency(user.afpBalance)}
      </td>
    </tr>
  );
};

export default LeaderboardRow; 