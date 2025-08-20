import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="py-16 px-4">
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
