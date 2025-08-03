import React from 'react';
import { mockData } from '../mock';
import { Phone, MapPin, Star, Award, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const handleBookService = () => {
    // Mock functionality - will be replaced with real booking in backend integration
    const bookingData = {
      timestamp: new Date().toISOString(),
      action: 'book_service_clicked',
      source: 'hero_section'
    };
    
    // Store in localStorage for now (will be database later)
    const existingBookings = JSON.parse(localStorage.getItem('service_bookings') || '[]');
    existingBookings.push(bookingData);
    localStorage.setItem('service_bookings', JSON.stringify(existingBookings));
    
    // Smooth scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewLocation = () => {
    window.open(mockData.businessInfo.location.mapUrl, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black min-h-screen flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.03)_50%,transparent_65%)] bg-[length:20px_20px] animate-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-yellow-500 rounded-full animate-bounce opacity-50 delay-1000"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-green-500 rounded-full animate-ping opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badge with enhanced styling */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 shadow-xl shadow-red-500/10 hover:shadow-red-500/20 transition-all duration-300 hover:scale-105">
              <Award className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-300 font-semibold tracking-wider">Trusted Since 1995</span>
            </div>

            {/* Main Heading with enhanced typography */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-up delay-200">
                  {mockData.businessInfo.name}
                </span>
                <span className="block text-3xl lg:text-4xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mt-2 animate-fade-in-up delay-400">
                  {mockData.businessInfo.tagline}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mt-6 leading-relaxed font-light animate-fade-in-up delay-600">
                {mockData.businessInfo.subtitle}
              </p>
            </div>

            {/* Enhanced Key Stats */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up delay-800">
              <div className="group flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                <span className="text-gray-300 font-semibold group-hover:text-white transition-colors">
                  {mockData.businessInfo.experience} Years Experience
                </span>
              </div>
              <div className="group flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                <span className="text-gray-300 font-semibold group-hover:text-white transition-colors">
                  All Brands Covered
                </span>
              </div>
            </div>

            {/* Enhanced Location */}
            <div 
              onClick={handleViewLocation}
              className="inline-flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer group transition-all duration-300 animate-fade-in-up delay-1000"
            >
              <MapPin className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors group-hover:scale-110" />
              <span className="underline decoration-dotted decoration-gray-500 group-hover:decoration-white text-lg">
                {mockData.businessInfo.location.address}
              </span>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up delay-1200">
              <Button 
                onClick={handleBookService}
                size="lg"
                className="group bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-8 py-4 text-lg font-bold shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-500 hover:scale-105 border-0 rounded-xl"
              >
                <span className="mr-2">Book Your Service Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="group border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-xl"
                onClick={() => window.location.href = `tel:${mockData.contacts.fourWheeler.phone}`}
              >
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Call: {mockData.contacts.fourWheeler.phone}
              </Button>
            </div>

            {/* Enhanced Rating Display */}
            <div className="flex items-center space-x-6 pt-8 border-t border-gray-700 animate-fade-in-up delay-1400">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-yellow-400 fill-current animate-pulse" 
                    style={{animationDelay: `${i * 0.1}s`}}
                  />
                ))}
              </div>
              <div className="text-gray-300">
                <span className="font-bold text-xl text-white">4.9/5</span>
                <span className="text-sm ml-2 text-gray-400">from 200+ customers</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image */}
          <div className="relative animate-fade-in-left">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/50 hover:shadow-red-500/20 transition-all duration-700 hover:scale-105 group">
              <img
                src={mockData.businessInfo.location.imageUrl}
                alt="Raghuveer Motors Workshop"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Enhanced Overlay Badge */}
              <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 font-medium tracking-wider uppercase">Professional Workshop</p>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">Advanced Diagnostic Tools</h3>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-20 animate-pulse shadow-2xl shadow-red-500/30"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-10 animate-pulse delay-1000 shadow-2xl shadow-blue-500/20"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full opacity-15 animate-bounce delay-500 shadow-xl shadow-green-500/20"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;