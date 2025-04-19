import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="w-16 h-16 bg-[#E31937] bg-opacity-10 rounded-lg flex items-center justify-center mb-4 text-[#E31937]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#333333] mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button href={href} variant="outline" size="sm">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;