import React from 'react';
import Button from './Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-[#333333]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to strengthen your security posture?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a comprehensive security assessment and let our experts help protect your digital assets.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg">
              Get Started
            </Button>
            
            <Button href="/services" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;