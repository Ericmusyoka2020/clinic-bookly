import React from 'react';
import { Heart, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-hero min-h-[400px] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Your Health,{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Priority
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience exceptional healthcare with our team of dedicated professionals. 
            Book your appointment today and take the first step towards better health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="flex flex-col items-center space-y-3 p-4">
            <div className="p-3 bg-gradient-primary rounded-full shadow-medical">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground">Expert Care</h3>
            <p className="text-sm text-muted-foreground text-center">
              Qualified healthcare professionals dedicated to your wellbeing
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 p-4">
            <div className="p-3 bg-gradient-primary rounded-full shadow-medical">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground">Safe Environment</h3>
            <p className="text-sm text-muted-foreground text-center">
              State-of-the-art facilities with the highest safety standards
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 p-4">
            <div className="p-3 bg-gradient-primary rounded-full shadow-medical">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground">Convenient Scheduling</h3>
            <p className="text-sm text-muted-foreground text-center">
              Easy online booking with flexible appointment times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}