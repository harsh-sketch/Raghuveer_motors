import React from 'react';
import { mockData } from '../mock';
import { Award, Car, Wrench, Users } from 'lucide-react';

const iconMap = {
  award: Award,
  car: Car, 
  tool: Wrench,
  users: Users
};

const TrustBadges = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.trustBadges.map((badge) => {
            const IconComponent = iconMap[badge.icon] || Award;
            
            return (
              <div 
                key={badge.id}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl group-hover:shadow-red-500/25 transition-shadow duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {badge.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;