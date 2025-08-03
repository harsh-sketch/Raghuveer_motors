import React from 'react';
import { mockData } from '../mock';
import { Phone, MapPin, Star, Award } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.02)_50%,transparent_65%)] bg-[length:20px_20px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2">
              <Award className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-semibold">Trusted Since 1995</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">{mockData.businessInfo.name}</span>
                <span className="block text-2xl lg:text-3xl text-red-400 mt-2">
                  {mockData.businessInfo.tagline}
                </span>
              </h1>
              <p className="text-xl text-slate-300 mt-6 leading-relaxed">
                {mockData.businessInfo.subtitle}
              </p>
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-slate-300 font-semibold">{mockData.businessInfo.experience} Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-300 font-semibold">All Brands Covered</span>
              </div>
            </div>

            {/* Location */}
            <div 
              onClick={handleViewLocation}
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-white cursor-pointer group transition-colors"
            >
              <MapPin className="w-5 h-5 text-red-400 group-hover:text-red-300" />
              <span className="underline decoration-dotted">{mockData.businessInfo.location.address}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleBookService}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
              >
                Book Your Service Today
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => window.location.href = `tel:${mockData.contacts.fourWheeler.phone}`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: {mockData.contacts.fourWheeler.phone}
              </Button>
            </div>

            {/* Rating Display */}
            <div className="flex items-center space-x-4 pt-6 border-t border-slate-700">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-slate-300">
                <span className="font-semibold">4.9/5</span>
                <span className="text-sm ml-2">from 200+ customers</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={mockData.businessInfo.location.imageUrl}
                alt="Raghuveer Motors Workshop"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Professional Workshop</p>
                      <h3 className="text-lg font-bold text-gray-900">Advanced Diagnostic Tools</h3>
                    </div>
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;