import React from 'react';
import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="py-16 px-4">
        <BookingForm />
      </div>
    </div>
  );
};

export default Index;
