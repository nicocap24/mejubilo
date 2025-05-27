import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-auto bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Mejubilo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 