import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "ABH2 Technologies transformed our security posture. Their penetration testing identified critical vulnerabilities that our internal team missed. Highly recommended for any enterprise serious about cybersecurity.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "FinTech Solutions Inc."
    },
    {
      quote: "The email security solutions implemented by ABH2 reduced phishing attacks by 95%. Their team provided excellent support throughout implementation and continues to be responsive to our needs.",
      author: "Michael Chen",
      position: "IT Director",
      company: "Global Retail Group"
    },
    {
      quote: "We engaged ABH2 for corporate security training, and the results exceeded our expectations. Our team is now much more security-conscious, and we've seen a significant decrease in security incidents.",
      author: "Priya Patel",
      position: "CISO",
      company: "HealthCare Systems"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Read testimonials from organizations we've helped secure against cyber threats.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="absolute -top-6 left-10 text-[#E31937]">
              <Quote size={48} />
            </div>
            
            <div className="mt-8">
              <p className="text-xl text-gray-700 italic mb-8">{testimonials[currentIndex].quote}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-[#333333]">{testimonials[currentIndex].author}</div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-[#E31937] mr-4 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-[#E31937] transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;