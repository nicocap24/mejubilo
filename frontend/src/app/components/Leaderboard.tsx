import React from 'react';
import { LeaderboardUser } from './types/leaderboard';
import { formatCurrency } from '../utils/formatters';
import LeaderboardRow from './leaderboard/LeaderboardRow';
import LeaderboardHeader from './leaderboard/LeaderboardHeader';

interface LeaderboardProps {
  users: LeaderboardUser[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ users }) => {
  // Sort users by profit in descending order
  const sortedUsers = [...users].sort((a, b) => b.profit - a.profit);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <LeaderboardHeader />
          <tbody>
            {sortedUsers.map((user, index) => (
              <LeaderboardRow 
                key={user.username}
                user={user}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard; 