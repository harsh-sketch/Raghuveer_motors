import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import BrandsSection from './BrandsSection';
import TrustBadges from './TrustBadges';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { mockData } from '../mock';
import { Phone, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInstantCall = () => {
    window.location.href = `tel:${mockData.contacts.fourWheeler.phone}`;
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-black text-xl">R</span>
              </div>
              <div>
                <h1 className={`text-xl font-black transition-colors duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Raghuveer Motors
                </h1>
                <p className={`text-xs font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  Since 1995
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className={`font-semibold transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-300 hover:text-white'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('brands')}
                className={`font-semibold transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-300 hover:text-white'
                }`}
              >
                Brands
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-semibold transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
              </button>
              <button
                onClick={handleInstantCall}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-semibold py-2 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('brands')}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-semibold py-2 transition-colors"
              >
                Brands
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-semibold py-2 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={handleInstantCall}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <TrustBadges />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="brands">
          <BrandsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />

      {/* Enhanced Mobile Instant Call Button */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleInstantCall}
            className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-2xl shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
          >
            <Phone className="w-6 h-6 group-hover:animate-bounce" />
          </button>
        </div>
      )}

      {/* Back to Top Button */}
      {scrolled && (
        <div className="fixed bottom-6 left-6 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gray-900 hover:bg-red-600 text-white p-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;