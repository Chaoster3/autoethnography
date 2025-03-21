import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-secondary via-primary to-accent text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="mt-1 text-sm opacity-80 font-handwritten text-lg">
            Created for my Autoethnography Class Assignment
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 