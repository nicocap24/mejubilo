'use client';

import React from 'react';
import Leaderboard from '../components/Leaderboard';

// Sample data - In a real application, this would come from an API
const sampleUsers = [
  {
    username: "Juan Pérez",
    afpBalance: 45000000,
    afpName: "Capital",
    afpFundType: "A",
    profit: 2500000
  },
  {
    username: "María González",
    afpBalance: 38000000,
    afpName: "Habitat",
    afpFundType: "B",
    profit: 1800000
  },
  {
    username: "Carlos Rodríguez",
    afpBalance: 42000000,
    afpName: "Cuprum",
    afpFundType: "C",
    profit: 2100000
  },
  {
    username: "Ana Martínez",
    afpBalance: 35000000,
    afpName: "ProVida",
    afpFundType: "D",
    profit: 1500000
  },
  {
    username: "Pedro Sánchez",
    afpBalance: 40000000,
    afpName: "PlanVital",
    afpFundType: "E",
    profit: 1900000
  }
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
      <div className="mt-8 bg-white rounded-3xl shadow-2xl px-8 py-10 max-w-4xl w-full flex flex-col items-center border-2 border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          <span className="text-orange-400">Leaderboard</span>
        </h1>
        
        <div className="w-full">
          <Leaderboard users={sampleUsers} />
        </div>

        <div className="mt-8 text-gray-600 text-sm text-center">
          <p>* Los datos mostrados son actualizados diariamente</p>
          <p>* Las ganancias son calculadas en base al rendimiento anual</p>
        </div>
      </div>
    </div>
  );
} 