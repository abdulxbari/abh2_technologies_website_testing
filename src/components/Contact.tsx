import React from 'react';
import ContactForm from './ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Have questions about our cybersecurity services? Contact us today and our team will be happy to assist you.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3">
            <ContactForm />
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E31937] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#E31937] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">Our Locations</h4>
                    <p className="text-gray-600">New York, USA</p>
                    <p className="text-gray-600">Islamabad, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E31937] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#E31937] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">Phone Number</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+92 (51) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E31937] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#E31937] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">Email Address</h4>
                    <p className="text-gray-600">info@abh2.technology</p>
                    <p className="text-gray-600">support@abh2.technology</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E31937] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#E31937] flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Saturday: 10am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;