import React from 'react';
import logo from '@/assets/logo.png';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <img 
        src={logo} 
        alt="EricStackCraft Clinic Logo" 
        className="h-24 w-24 object-contain bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-xl border border-white/30" 
      />
    </header>
  );
}