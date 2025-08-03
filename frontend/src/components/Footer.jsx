import React from 'react';
import { mockData } from '../mock';
import { Phone, Mail, MapPin, Instagram, Clock, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{mockData.businessInfo.name}</h3>
                <p className="text-slate-400">Since {mockData.businessInfo.established}</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              {mockData.businessInfo.tagline}. Located in {mockData.businessInfo.location.address}, 
              we've been serving the automotive community with excellence and integrity for over three decades.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                <Award className="w-5 h-5 text-red-400" />
                <span className="text-slate-300 text-sm font-semibold">{mockData.businessInfo.experience} Years</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                <span className="text-slate-300 text-sm font-semibold">All Brands Covered</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                <span className="text-slate-300 text-sm font-semibold">Advanced Tools</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-sm text-slate-400">4-Wheeler Services</p>
                  <a 
                    href={`tel:${mockData.contacts.fourWheeler.phone}`}
                    className="text-white font-semibold hover:text-red-400 transition-colors"
                  >
                    {mockData.contacts.fourWheeler.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-slate-400">Hydraulic Services</p>
                  <a 
                    href={`tel:${mockData.contacts.hydraulic.phone}`}
                    className="text-white font-semibold hover:text-blue-400 transition-colors"
                  >
                    {mockData.contacts.hydraulic.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  {mockData.contacts.emails.map((email, index) => (
                    <a 
                      key={index}
                      href={`mailto:${email}`}
                      className="block text-white hover:text-green-400 transition-colors text-sm"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <a 
                  href={mockData.contacts.social.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  {mockData.businessInfo.location.address}
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours & Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Business Hours</h4>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300">Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300">Sunday: 10:00 AM - 6:00 PM</span>
              </div>
            </div>

            <h5 className="text-lg font-semibold text-white mb-4">Our Specialties</h5>
            <div className="space-y-2 text-sm text-slate-300">
              <p>• Engine & Gearbox Repairs</p>
              <p>• EV Servicing & Diagnostics</p>
              <p>• AC Systems & Hydraulic Pipes</p>
              <p>• All Brand Expertise</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} {mockData.businessInfo.name}. All rights reserved.</p>
              <p className="text-sm">Serving Amravati and surrounding areas since {mockData.businessInfo.established}</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href={mockData.contacts.social.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Google Maps
              </a>
              <a 
                href={mockData.contacts.social.instagram}
                className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Bar */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold">
            🚨 Emergency Breakdown Service: Call {mockData.contacts.fourWheeler.phone} - Available 24/7
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;