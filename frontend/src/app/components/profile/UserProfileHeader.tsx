import React from 'react';
import { formatCurrency } from '../../utils/formatters';

interface UserProfileHeaderProps {
  user: {
    username: string;
    afpBalance: number;
    afpName: string;
    afpFundType: string;
  };
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({ user }) => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{user.username}</h1>
          <p className="text-orange-100">{user.afpName} • Fondo {user.afpFundType}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-orange-100">Saldo Actual</p>
          <p className="text-2xl font-bold">{formatCurrency(user.afpBalance)}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHeader; 