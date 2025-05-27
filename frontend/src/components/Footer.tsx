'use client';

import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    const updateVisitCount = async () => {
      try {
        // First increment the counter
        await fetch('/api/visits', { method: 'POST' });
        // Then get the updated count
        const response = await fetch('/api/visits');
        const data = await response.json();
        setVisitCount(data.count);
      } catch (error) {
        console.error('Error updating visit count:', error);
      }
    };

    updateVisitCount();
  }, []);

  return (
    <footer className="w-full py-6 mt-auto bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600">
          <p className="mb-2">Total Visits: {visitCount.toLocaleString()}</p>
          <p>&copy; {new Date().getFullYear()} Mejubilo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 