import React from 'react';
import logo from '@/assets/logo.png';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-50 p-4">
      <img 
        src={logo} 
        alt="EricStackCraft Clinic Logo" 
        className="h-16 w-16 object-contain bg-white/10 backdrop-blur-sm rounded-full p-2 shadow-lg" 
      />
    </header>
  );
}