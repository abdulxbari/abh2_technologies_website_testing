import React from 'react';
import { Globe, Award, Users, Calendar } from 'lucide-react';
import Button from './Button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="ABH2 Technologies team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#E31937] text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">6+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              About ABH2 Technologies
            </h2>
            
            <p className="text-gray-600 mb-6">
              ABH2 Technologies is a leading cybersecurity firm headquartered in New York, with a significant presence in Pakistan. Established in 2019, we specialize in providing comprehensive cybersecurity solutions to businesses worldwide.
            </p>
            
            <p className="text-gray-600 mb-8">
              Our expert team combines global expertise with local knowledge to deliver customized security solutions that protect your digital assets and enhance your security posture. We've assisted various brands, startups, and enterprises in strengthening their cybersecurity measures.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E31937] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#E31937]">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#333333] mb-1">Global Presence</h3>
                  <p className="text-gray-600">Offices in New York & Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E31937] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#E31937]">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#333333] mb-1">Industry Leader</h3>
                  <p className="text-gray-600">Top-rated in Asia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E31937] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#E31937]">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#333333] mb-1">Expert Team</h3>
                  <p className="text-gray-600">Certified security professionals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E31937] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#E31937]">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#333333] mb-1">Established</h3>
                  <p className="text-gray-600">Founded in 2019</p>
                </div>
              </div>
            </div>
            
            <Button href="/about" size="md">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;