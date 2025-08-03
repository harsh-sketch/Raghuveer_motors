import React from 'react';
import { mockData } from '../mock';
import { Car, Zap, Globe, Award } from 'lucide-react';

const BrandsSection = () => {
  const brandCategories = [
    {
      title: 'Luxury Brands',
      icon: Award,
      brands: mockData.brands.luxury,
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'bg-amber-50'
    },
    {
      title: 'Popular Brands', 
      icon: Car,
      brands: mockData.brands.popular,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Electric Vehicles',
      icon: Zap,
      brands: mockData.brands.ev,
      color: 'from-green-500 to-green-600', 
      bgColor: 'bg-green-50'
    },
    {
      title: 'Global Origins',
      icon: Globe,
      brands: mockData.brands.origins,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section id="brands" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            All Brands, All Problems Solved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across all major automotive brands from around the world. 
            Whether it's luxury, mainstream, or electric vehicles - we've got you covered.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {brandCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div 
                key={index}
                className={`${category.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.brands.map((brand, brandIndex) => (
                    <div 
                      key={brandIndex}
                      className="bg-white/70 rounded-lg px-3 py-2 text-sm font-semibold text-gray-800"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* All Brands Statement */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              "Whether It's German Engineering, Japanese Reliability, 
              American Power, or Indian Innovation"
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our {mockData.businessInfo.experience} years of experience has equipped us with 
              the knowledge and tools to handle any vehicle that comes through our doors. 
              From vintage classics to the latest electric supercars, we treat every vehicle 
              with the same level of expertise and care.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">{mockData.businessInfo.experience}</div>
                <div className="text-slate-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">15+</div>
                <div className="text-slate-300 text-sm">Brands Serviced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">5000+</div>
                <div className="text-slate-300 text-sm">Cars Fixed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">100%</div>
                <div className="text-slate-300 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;