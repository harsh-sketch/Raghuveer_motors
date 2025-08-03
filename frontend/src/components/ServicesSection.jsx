import React from 'react';
import { mockData } from '../mock';
import { 
  Cog, 
  Car, 
  Thermometer, 
  ScanLine, 
  Battery, 
  Wrench,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const iconMap = {
  engine: Engine,
  wheel: Wheel,
  thermometer: Thermometer,
  scan: ScanLine,
  battery: Battery,
  wrench: Wrench
};

const ServicesSection = () => {
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
    
    // Show mock success message
    alert(`Thank you for your interest in ${inquiryData.serviceName}! We'll contact you soon.`);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automotive solutions for all your 4-wheeler needs. 
            From luxury cars to electric vehicles, we handle it all with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            
            return (
              <Card 
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    onClick={() => handleServiceInquiry(service.id)}
                    variant="outline"
                    className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 font-semibold"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Don't See Your Issue Listed?
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              Our experts can diagnose and fix any automotive problem. Contact us for a free consultation.
            </p>
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = `tel:${mockData.contacts.fourWheeler.phone}`}
            >
              Call for Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;