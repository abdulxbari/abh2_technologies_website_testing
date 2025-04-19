import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  ShieldAlert, 
  Mail, 
  FileWarning, 
  AlertTriangle, 
  Bookmark, 
  FileKey, 
  GraduationCap 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Penetration Testing',
      description: 'Comprehensive testing across web, mobile, API, IoT, and cloud environments to identify and address vulnerabilities.',
      icon: <ShieldAlert size={32} />,
      href: '/services/penetration-testing'
    },
    {
      title: 'Email Security',
      description: 'Robust security solutions for email platforms like Microsoft 365 and Google Mail, protecting against phishing attacks.',
      icon: <Mail size={32} />,
      href: '/services/email-security'
    },
    {
      title: 'Vulnerability Management',
      description: 'Tools for vulnerability reporting and password management to proactively address security weaknesses.',
      icon: <FileWarning size={32} />,
      href: '/services/vulnerability-management'
    },
    {
      title: 'Threat Management',
      description: 'Advanced scanning tools and threat detection systems to monitor and mitigate potential security risks.',
      icon: <AlertTriangle size={32} />,
      href: '/services/threat-management'
    },
    {
      title: 'Brand Protection',
      description: 'Services to protect brand reputation by monitoring and addressing potential threats to brand integrity.',
      icon: <Bookmark size={32} />,
      href: '/services/brand-protection'
    },
    {
      title: 'Data Loss Prevention',
      description: 'Implement strategies and tools to prevent unauthorized access and data breaches, ensuring data integrity.',
      icon: <FileKey size={32} />,
      href: '/services/data-loss-prevention'
    },
    {
      title: 'Corporate Training',
      description: 'Specialized training programs to enhance security awareness and compliance among organizational staff.',
      icon: <GraduationCap size={32} />,
      href: '/services/corporate-training'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Our Cybersecurity Services</h2>
          <div className="w-24 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Comprehensive security solutions designed to protect your organization's digital assets from evolving cyber threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;