import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import BrandsSection from './BrandsSection';
import TrustBadges from './TrustBadges';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { mockData } from '../mock';
import { Phone } from 'lucide-react';

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInstantCall = () => {
    window.location.href = `tel:${mockData.contacts.fourWheeler.phone}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Raghuveer Motors</h1>
                <p className="text-xs text-gray-600">Since 1995</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Services
              </a>
              <a href="#brands" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Brands
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Contact
              </a>
              <a 
                href={`tel:${mockData.contacts.fourWheeler.phone}`}
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <TrustBadges />
        <ServicesSection />
        <BrandsSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Mobile Instant Call Button */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleInstantCall}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;