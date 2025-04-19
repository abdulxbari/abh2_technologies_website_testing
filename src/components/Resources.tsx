import React from 'react';
import { FileText, PlayCircle, Download, BookOpen } from 'lucide-react';
import Button from './Button';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'whitepaper' | 'webinar' | 'guide' | 'case-study';
  href: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, type, href }) => {
  const getIcon = () => {
    switch (type) {
      case 'whitepaper':
        return <FileText size={24} />;
      case 'webinar':
        return <PlayCircle size={24} />;
      case 'guide':
        return <BookOpen size={24} />;
      case 'case-study':
        return <Download size={24} />;
      default:
        return <FileText size={24} />;
    }
  };
  
  const getTypeLabel = () => {
    switch (type) {
      case 'whitepaper':
        return 'Whitepaper';
      case 'webinar':
        return 'Webinar';
      case 'guide':
        return 'Guide';
      case 'case-study':
        return 'Case Study';
      default:
        return 'Resource';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="h-40 bg-gray-200 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00000080] flex items-end p-4">
          <span className="bg-[#E31937] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {getTypeLabel()}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#E31937] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="text-[#E31937]">
            {getIcon()}
          </div>
          <Button href={href} variant="outline" size="sm">
            Access Resource
          </Button>
        </div>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  const resources = [
    {
      title: "2025 Cybersecurity Threat Landscape",
      description: "An in-depth analysis of emerging cyber threats and how organizations can prepare for them.",
      type: "whitepaper" as const,
      href: "/resources/2025-threat-landscape"
    },
    {
      title: "Secure Cloud Migration Strategies",
      description: "Best practices for ensuring security during cloud migrations and maintaining compliance.",
      type: "guide" as const,
      href: "/resources/secure-cloud-migration"
    },
    {
      title: "Ransomware Defense: A Practical Approach",
      description: "Live webinar on effective strategies to defend against and recover from ransomware attacks.",
      type: "webinar" as const,
      href: "/resources/ransomware-defense-webinar"
    },
    {
      title: "Financial Institution Security Transformation",
      description: "How a leading bank strengthened their security posture with our comprehensive solutions.",
      type: "case-study" as const,
      href: "/resources/financial-security-case-study"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Security Resources</h2>
          <div className="w-24 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Access our library of cybersecurity resources to stay informed about the latest threats and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              type={resource.type}
              href={resource.href}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/resources" size="lg">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;