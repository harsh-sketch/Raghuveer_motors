import React, { useState } from 'react';
import { mockData } from '../mock';
import { Phone, Mail, MapPin, Instagram, Clock, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    issue: '',
    serviceType: 'four-wheeler'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission - will be replaced with real API call in backend
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    
    // Store in localStorage for now
    const existingSubmissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    existingSubmissions.push(submissionData);
    localStorage.setItem('contact_submissions', JSON.stringify(existingSubmissions));
    
    // Show success message
    alert('Thank you for your inquiry! We\'ll contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      carModel: '',
      issue: '',
      serviceType: 'four-wheeler'
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to give your car the expert care it deserves? 
            Contact us now for professional automotive service you can trust.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{mockData.contacts.fourWheeler.service}</p>
                      <a 
                        href={`tel:${mockData.contacts.fourWheeler.phone}`}
                        className="text-red-600 font-bold text-lg hover:text-red-700"
                      >
                        {mockData.contacts.fourWheeler.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{mockData.contacts.hydraulic.service}</p>
                      <a 
                        href={`tel:${mockData.contacts.hydraulic.phone}`}
                        className="text-blue-600 font-bold text-lg hover:text-blue-700"
                      >
                        {mockData.contacts.hydraulic.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <div className="space-y-1">
                      {mockData.contacts.emails.map((email, index) => (
                        <a 
                          key={index}
                          href={`mailto:${email}`}
                          className="block text-green-600 hover:text-green-700 font-medium"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Visit Our Workshop</p>
                    <a 
                      href={mockData.contacts.social.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      {mockData.businessInfo.location.address}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-0 text-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-lg">
                    R
                  </div>
                  <div>
                    <CardTitle className="text-white">Rajesh Kumar</CardTitle>
                    <CardDescription className="text-slate-300">BMW X5 Owner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed">
                  "Exceptional service! They diagnosed and fixed my BMW's complex engine issue 
                  that other workshops couldn't solve. Truly professional and trustworthy."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Book Your Service
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Type Selection */}
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input 
                        type="radio"
                        name="serviceType"
                        value="four-wheeler"
                        checked={formData.serviceType === 'four-wheeler'}
                        onChange={handleInputChange}
                        className="text-red-600"
                      />
                      <span className="font-medium">4-Wheeler Service</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input 
                        type="radio"
                        name="serviceType"
                        value="hydraulic"
                        checked={formData.serviceType === 'hydraulic'}
                        onChange={handleInputChange}
                        className="text-blue-600"
                      />
                      <span className="font-medium">Hydraulic Service</span>
                    </label>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Input
                    name="carModel"
                    placeholder="Car Model (e.g., BMW X5, Tesla Model 3)"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <Textarea
                    name="issue"
                    placeholder="Describe your car's issue or service requirement"
                    value={formData.issue}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  />

                  <Button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                  >
                    Submit Service Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;