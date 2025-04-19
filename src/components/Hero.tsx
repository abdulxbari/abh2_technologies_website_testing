import React from 'react';
import Button from './Button';
import { Shield, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#000000cc] to-[#00000099]"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'overlay'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center mb-6 animate-fadeIn">
            <Shield size={48} className="text-[#E31937] mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              ABH2 Technologies
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight animate-fadeIn animation-delay-200">
            Comprehensive Cybersecurity Solutions for the Modern Enterprise
          </h2>
          
          <p className="text-lg text-gray-200 mb-8 animate-fadeIn animation-delay-400">
            Protecting your digital assets with advanced security measures, penetration testing, and threat management. Trust ABH2 Technologies to safeguard your organization's most valuable information.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fadeIn animation-delay-600">
            <Button href="/contact" size="lg">
              Get Protected Today
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white animate-fadeIn animation-delay-800">
            <div className="flex items-center">
              <CheckCircle size={20} className="text-[#E31937] mr-2 flex-shrink-0" />
              <span>24/7 Security Monitoring</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={20} className="text-[#E31937] mr-2 flex-shrink-0" />
              <span>Enterprise-Grade Protection</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={20} className="text-[#E31937] mr-2 flex-shrink-0" />
              <span>Global Security Expertise</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated shapes for visual interest */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#E31937] opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#E31937] opacity-5 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
    </section>
  );
};

export default Hero;