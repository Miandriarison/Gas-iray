import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md'
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverClass = hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : '';

  return (
    <div className={`
      bg-white rounded-xl shadow-sm border border-gray-200
      ${paddingClasses[padding]}
      ${hoverClass}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;