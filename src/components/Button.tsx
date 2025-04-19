import React from 'react';
import { Link } from './Navigation';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition-all duration-200 focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-[#E31937] text-white hover:bg-[#c31730] active:bg-[#a6152a]',
    secondary: 'bg-[#333333] text-white hover:bg-[#444444] active:bg-[#222222]',
    outline: 'bg-transparent border-2 border-[#E31937] text-[#E31937] hover:bg-[#E31937] hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <Link to={href} className={buttonStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;