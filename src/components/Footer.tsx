import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      {/* Trust Indicators Section */}
      <div className="py-8 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm text-foreground">Licensed & Certified</h4>
              <p className="text-xs text-muted-foreground">Fully accredited healthcare facility</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm text-foreground">Quality Care</h4>
              <p className="text-xs text-muted-foreground">Committed to excellence in healthcare</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm text-foreground">24/7 Support</h4>
              <p className="text-xs text-muted-foreground">Emergency services available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              EricStackCraft Clinic
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing comprehensive healthcare services with compassion, expertise, and cutting-edge medical technology. Your health and well-being are our top priorities.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">0756225185</p>
                  <p className="text-muted-foreground text-xs">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">ericmusyoka17@gmail.com</p>
                  <p className="text-muted-foreground text-xs">General inquiries</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">123 Medical Center Drive</p>
                  <p className="text-muted-foreground text-xs">Healthcare City, HC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Office Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="text-foreground font-medium">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground font-medium">Emergency Only</span>
              </div>
            </div>
            
            <div className="pt-4 space-y-2">
              <h5 className="font-medium text-foreground text-sm">Quick Links</h5>
              <div className="flex flex-col space-y-1 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Patient Portal</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Insurance Information</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 px-4 border-t border-border bg-background/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} EricStackCraft Clinic. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span>Licensed Healthcare Provider</span>
            <span>•</span>
            <span>HIPAA Compliant</span>
            <span>•</span>
            <span>Accredited Facility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}