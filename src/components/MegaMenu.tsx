import React from 'react';
import { Link } from './Navigation';
import { ChevronRight } from 'lucide-react';

interface MenuItem {
  label: string;
  href?: string;
  tag?: string;
  items?: MenuItem[];
}

interface MegaMenuProps {
  isOpen: boolean;
  activeSection: string | null;
  onClose: () => void;
}

const menuData: Record<string, MenuItem[]> = {
  Company: [
    {
      label: 'About Us',
      items: [
        { label: 'Overview', href: '/company/about/overview' },
        { label: 'Our Values', href: '/company/about/values' },
        { label: 'Our People', href: '/company/about/people' },
        { label: 'Our History', href: '/company/about/history' }
      ]
    },
    {
      label: 'Media',
      items: [
        { label: 'Press Releases', href: '/company/media/press' },
        { label: 'Media Coverage', href: '/company/media/coverage' },
        { label: 'Brand Guidelines', href: '/company/media/brand' }
      ]
    },
    {
      label: 'Strategic Alliances',
      tag: 'NEW',
      items: [
        { label: 'Overview', href: '/company/alliances/overview' },
        { label: 'Partnerships', href: '/company/alliances/partnerships' },
        { label: 'Affiliations', href: '/company/alliances/affiliations' }
      ]
    }
  ],
  Products: [
    {
      label: 'Security Solutions',
      items: [
        { label: 'ABH2 FirewallShield', href: '/products/firewall-shield' },
        { label: 'ABH2 WebGuardian', href: '/products/web-guardian' },
        { label: 'ABH2 Secure365', href: '/products/secure-365', tag: 'NEW' }
      ]
    },
    {
      label: 'Monitoring Tools',
      items: [
        { label: 'ABH2 Insight360', href: '/products/insight360' },
        { label: 'ABH2 VulneraPortal', href: '/products/vulnera-portal' },
        { label: 'ABH2 APIFortress', href: '/products/api-fortress' }
      ]
    }
  ],
  Services: [
    {
      label: 'Security Testing',
      items: [
        { label: 'Penetration Testing', href: '/services/pentest' },
        { label: 'Vulnerability Assessment', href: '/services/vulnerability' },
        { label: 'Security Audit', href: '/services/audit' }
      ]
    },
    {
      label: 'Managed Services',
      items: [
        { label: 'SOC as a Service', href: '/services/soc', tag: 'HOT' },
        { label: 'Threat Management', href: '/services/threat' },
        { label: 'Incident Response', href: '/services/incident' }
      ]
    }
  ],
  Industries: [
    {
      label: 'Financial Services',
      items: [
        { label: 'Banking', href: '/industries/banking' },
        { label: 'Insurance', href: '/industries/insurance' },
        { label: 'Investment', href: '/industries/investment' }
      ]
    },
    {
      label: 'Healthcare',
      items: [
        { label: 'Hospitals', href: '/industries/hospitals' },
        { label: 'Pharmaceuticals', href: '/industries/pharma' },
        { label: 'Medical Devices', href: '/industries/medical-devices' }
      ]
    }
  ],
  Insights: [
    {
      label: 'Resources',
      items: [
        { label: 'Blog', href: '/insights/blog' },
        { label: 'Whitepapers', href: '/insights/whitepapers' },
        { label: 'Case Studies', href: '/insights/case-studies' }
      ]
    },
    {
      label: 'Research',
      items: [
        { label: 'Security Reports', href: '/insights/reports' },
        { label: 'Industry Analysis', href: '/insights/analysis' },
        { label: 'Threat Intelligence', href: '/insights/threat-intel' }
      ]
    }
  ],
  Partners: [
    {
      label: 'Partner Programs',
      items: [
        { label: 'Reseller Program', href: '/partners/reseller' },
        { label: 'Technology Partners', href: '/partners/technology' },
        { label: 'Service Partners', href: '/partners/service' }
      ]
    },
    {
      label: 'Partner Resources',
      items: [
        { label: 'Partner Portal', href: '/partners/portal' },
        { label: 'Training', href: '/partners/training' },
        { label: 'Documentation', href: '/partners/docs' }
      ]
    }
  ],
  Careers: [
    {
      label: 'Opportunities',
      items: [
        { label: 'Current Openings', href: '/careers/openings' },
        { label: 'Internships', href: '/careers/internships' },
        { label: 'Graduate Program', href: '/careers/graduate' }
      ]
    },
    {
      label: 'Life at ABH2',
      items: [
        { label: 'Culture', href: '/careers/culture' },
        { label: 'Benefits', href: '/careers/benefits' },
        { label: 'Development', href: '/careers/development' }
      ]
    }
  ]
};

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, activeSection, onClose }) => {
  if (!isOpen || !activeSection) return null;

  const renderMenuItem = (item: MenuItem, depth: number = 0) => {
    const hasSubItems = item.items && item.items.length > 0;
    const isTopLevel = depth === 0;
    
    return (
      <div key={item.label} className={`${isTopLevel ? 'col-span-1' : ''}`}>
        <div className="flex items-center justify-between">
          {item.href ? (
            <Link
              to={item.href}
              className="text-gray-700 hover:text-[#E31937] transition-colors"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-gray-900">{item.label}</span>
          )}
          {item.tag && (
            <span className={`ml-2 px-2 py-0.5 text-xs rounded ${
              item.tag === 'NEW' ? 'bg-green-500' : 'bg-[#E31937]'
            } text-white`}>
              {item.tag}
            </span>
          )}
        </div>
        
        {hasSubItems && (
          <div className={`${isTopLevel ? 'mt-4' : 'mt-2 ml-4'}`}>
            {item.items.map(subItem => renderMenuItem(subItem, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-50">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-4 gap-8">
          {menuData[activeSection]?.map(item => renderMenuItem(item))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;