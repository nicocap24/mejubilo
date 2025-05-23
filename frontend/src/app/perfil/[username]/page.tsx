'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UserProfileSection from '../../components/profile/UserProfileSection';

export default function UserProfilePage() {
  const params = useParams();
  const username = decodeURIComponent(params.username as string);

  return (
    <div className="min-h-screen flex flex-col bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <UserProfileSection username={username} />
        </div>
      </main>
      <Footer />
    </div>
  );
} 