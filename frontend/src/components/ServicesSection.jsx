import React, { useState, useEffect } from 'react';
import { mockData } from '../mock';
import { 
  Cog, 
  Car, 
  Thermometer, 
  ScanLine, 
  Battery, 
  Wrench,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Phone
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const iconMap = {
  cog: Cog,
  car: Car,
  thermometer: Thermometer,
  scanLine: ScanLine,
  battery: Battery,
  wrench: Wrench
};

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleServiceInquiry = (serviceId) => {
    // Mock functionality - will be replaced with real inquiry form in backend
    const inquiryData = {
      serviceId,
      timestamp: new Date().toISOString(),
      action: 'service_inquiry',
      serviceName: mockData.services.find(s => s.id === serviceId)?.title
    };
    
    // Store in localStorage for now
    const existingInquiries = JSON.parse(localStorage.getItem('service_inquiries') || '[]');
    existingInquiries.push(inquiryData);
    localStorage.setItem('service_inquiries', JSON.stringify(existingInquiries));
    
    // Show mock success message with enhanced animation
    const serviceName = inquiryData.serviceName;
    // Create temporary notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up';
    notification.innerHTML = `✅ Interest registered for ${serviceName}! We'll contact you soon.`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600/10 to-red-700/10 backdrop-blur-sm border border-red-500/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-5 h-5 text-red-600" />
            <span className="text-red-700 font-semibold">Our Expertise</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 bg-clip-text text-transparent">
              Our Expert Services
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive automotive solutions for all your 4-wheeler needs. 
            From luxury cars to electric vehicles, we handle it all with precision and care.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mockData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            
            return (
              <Card 
                key={service.id}
                className={`group relative overflow-hidden border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
                  hoveredCard === service.id ? 'scale-105' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 font-medium">Service #{service.id.toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300 leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  {/* Enhanced Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center space-x-3 group/feature"
                        style={{
                          animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s`
                        }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Action Button */}
                  <Button 
                    onClick={() => handleServiceInquiry(service.id)}
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-500 group-hover:shadow-lg group-hover:shadow-red-500/25 border-0"
                  >
                    <span className="mr-2">Get Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="relative">
          <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 rounded-3xl p-12 lg:p-16 shadow-2xl shadow-gray-900/30 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.05)_50%,transparent_65%)] bg-[length:20px_20px]"></div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-red-500/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
            
            <div className="relative z-10 text-center">
              <div className="mb-6">
                <Sparkles className="w-12 h-12 text-red-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Don't See Your Issue Listed?
                </h3>
                <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                  Our {mockData.businessInfo.experience} years of experience has equipped us with 
                  the knowledge and tools to handle any automotive problem. Contact us for a free consultation.
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-10 py-4 text-xl font-bold rounded-2xl transition-all duration-500 hover:scale-105 shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 border-0"
                onClick={() => window.location.href = `tel:${mockData.contacts.fourWheeler.phone}`}
              >
                <Phone className="w-6 h-6 mr-3 animate-pulse" />
                Call for Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;