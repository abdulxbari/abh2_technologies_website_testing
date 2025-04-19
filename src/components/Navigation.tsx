import React from 'react';

interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

// Since we're using simple navigation, we'll use this Link component
// In a real app, you might want to use React Router's Link component
export const Link: React.FC<LinkProps> = ({ to, className, children, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // In a real app with React Router, this would navigate to the route
      // For now, we'll simulate navigation by scrolling to sections
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log(`Navigating to ${to}`);
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};