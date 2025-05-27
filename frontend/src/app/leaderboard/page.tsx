'use client';

import React from 'react';
import Leaderboard from '../components/Leaderboard';

// Sample data - In a real application, this would come from an API
const sampleUsers = [
  {
    id: "1",
    username: "Juan Pérez",
    name: "Juan Pérez",
    rank: 1,
    score: 100,
    change: 0,
    avatar: '',
    afpBalance: 45000000,
    afpName: "Capital",
    afpFundType: "A",
    profit: 2500000
  },
  {
    id: "2",
    username: "María González",
    name: "María González",
    rank: 2,
    score: 95,
    change: 0,
    avatar: '',
    afpBalance: 38000000,
    afpName: "Habitat",
    afpFundType: "B",
    profit: 1800000
  },
  {
    id: "3",
    username: "Carlos Rodríguez",
    name: "Carlos Rodríguez",
    rank: 3,
    score: 90,
    change: 0,
    avatar: '',
    afpBalance: 42000000,
    afpName: "Cuprum",
    afpFundType: "C",
    profit: 2100000
  },
  {
    id: "4",
    username: "Ana Martínez",
    name: "Ana Martínez",
    rank: 4,
    score: 85,
    change: 0,
    avatar: '',
    afpBalance: 35000000,
    afpName: "ProVida",
    afpFundType: "D",
    profit: 1500000
  },
  {
    id: "5",
    username: "Pedro Sánchez",
    name: "Pedro Sánchez",
    rank: 5,
    score: 80,
    change: 0,
    avatar: '',
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
        
        <p className="text-xl text-center text-gray-700 mb-8">
          Obtén tu evaluación 100% GRATUITA y en segundos para saber cómo vas
        </p>
        
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