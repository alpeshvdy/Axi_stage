import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <img 
      src="https://raw.githubusercontent.com/alpeshvdy/Axi_stage/main/asset/logo.svg" 
      alt="Axionera Logo" 
      className={`${className} object-contain`}
      style={{ display: 'block' }}
      loading="eager"
    />
  );
};

export default Logo;