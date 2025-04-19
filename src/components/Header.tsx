import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { Link } from './Navigation';
import MegaMenu from './MegaMenu';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield size={32} className="text-[#E31937] mr-2" />
              <span className={`text-xl font-bold ${isScrolled ? 'text-[#333333]' : 'text-white'}`}>
                ABH2 Technologies
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {['Company', 'Products', 'Services', 'Industries', 'Insights', 'Partners', 'Careers'].map((item) => (
              <button
                key={item}
                onMouseEnter={() => setActiveMegaMenu(item)}
                className={`font-medium ${isScrolled ? 'text-[#333333]' : 'text-white'} hover:text-[#E31937] transition-colors flex items-center`}
              >
                {item}
                <ChevronDown size={16} className="ml-1" />
              </button>
            ))}
            
            <div className="flex items-center space-x-4 ml-4">
              <LanguageSelector />
              <Link 
                to="/contact" 
                className="px-4 py-2 rounded bg-[#E31937] text-white font-medium hover:bg-[#c31730] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-[#333333]' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      <MegaMenu 
        isOpen={!!activeMegaMenu}
        activeSection={activeMegaMenu}
        onClose={() => setActiveMegaMenu(null)}
      />
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {['Company', 'Products', 'Services', 'Industries', 'Insights', 'Partners', 'Careers'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveMegaMenu(item === activeMegaMenu ? null : item)}
              className="block w-full px-4 py-2 text-left text-base font-medium text-[#333333] hover:bg-gray-100 hover:text-[#E31937] transition-colors"
            >
              {item}
            </button>
          ))}
          <div className="px-4 py-2">
            <LanguageSelector />
          </div>
          <Link
            to="/contact"
            className="block px-4 py-2 mt-2 text-base font-medium text-white bg-[#E31937] rounded hover:bg-[#c31730] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;