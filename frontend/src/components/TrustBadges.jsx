import React from 'react';
import { mockData } from '../mock';
import { Award, Car, Wrench, Users, Sparkles } from 'lucide-react';

const iconMap = {
  award: Award,
  car: Car, 
  tool: Wrench,
  users: Users
};

const TrustBadges = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section intro */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 font-semibold text-sm">Why Choose Us</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.trustBadges.map((badge, index) => {
            const IconComponent = iconMap[badge.icon] || Award;
            
            return (
              <div 
                key={badge.id}
                className="group text-center hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="relative mb-6">
                  {/* Enhanced icon container with glow effect */}
                  <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <IconComponent className="w-12 h-12 text-white relative z-10" />
                  </div>
                  
                  {/* Floating indicator */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                  {badge.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                  {badge.description}
                </p>

                {/* Decorative underline that appears on hover */}
                <div className="w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-4 group-hover:w-12 transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced bottom stats section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {mockData.businessInfo.experience}
              </div>
              <div className="text-gray-600 font-semibold uppercase tracking-wider text-sm">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-gray-600 font-semibold uppercase tracking-wider text-sm">Brands Serviced</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                5000+
              </div>
              <div className="text-gray-600 font-semibold uppercase tracking-wider text-sm">Cars Fixed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-600 font-semibold uppercase tracking-wider text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;