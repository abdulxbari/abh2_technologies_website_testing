import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from './Navigation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield size={24} className="text-[#E31937] mr-2" />
              <span className="text-xl font-bold">ABH2 Technologies</span>
            </div>
            <p className="text-gray-300 mb-4">
              A leading cybersecurity firm providing comprehensive solutions to businesses worldwide since 2019.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E31937] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E31937] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E31937] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/penetration-testing" className="text-gray-300 hover:text-[#E31937] transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link to="/services/email-security" className="text-gray-300 hover:text-[#E31937] transition-colors">
                  Email Security
                </Link>
              </li>
              <li>
                <Link to="/services/vulnerability-management" className="text-gray-300 hover:text-[#E31937] transition-colors">
                  Vulnerability Management
                </Link>
              </li>
              <li>
                <Link to="/services/threat-management" className="text-gray-300 hover:text-[#E31937] transition-colors">
                  Threat Management
                </Link>
              </li>
              <li>
                <Link to="/services/brand-protection" className="text-gray-300 hover:text-[#E31937] transition-colors">
                  Brand Protection
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#E31937] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-[#E31937] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#E31937] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-[#E31937] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-[#E31937] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-[#E31937] mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300">New York, USA & Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-[#E31937] mr-2 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[#E31937] mr-2 flex-shrink-0" />
                <a 
                  href="mailto:info@abh2.technology" 
                  className="text-gray-300 hover:text-[#E31937] transition-colors"
                >
                  info@abh2.technology
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ABH2 Technologies. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-[#E31937] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-[#E31937] transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-[#E31937] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;