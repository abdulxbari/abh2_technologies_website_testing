import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-[#E31937]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-white opacity-80">Clients Protected</div>
          </div>
          
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">1,000+</div>
            <div className="text-white opacity-80">Security Audits</div>
          </div>
          
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-white opacity-80">Security Experts</div>
          </div>
          
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">12+</div>
            <div className="text-white opacity-80">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;