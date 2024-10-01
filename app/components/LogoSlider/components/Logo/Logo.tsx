import React, { ReactNode } from 'react';
import styled from 'styled-components';


interface LogoProps {
  src?: string;
  alt: string;
  icon?: ReactNode;

}

const LogoWrapper = styled.div`
  width: 100px; 
  height: 35px; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%);
`;

const Logo: React.FC<LogoProps> = ({ src, alt, icon}) => {
  return (
    <LogoWrapper>
        {src ? (
        <LogoImage src={src} alt={alt} /> // If 'src' is provided, render the image
      ) : (
        <div aria-label={alt}>{icon}</div> // If 'icon' is provided, render the icon
      )}
    </LogoWrapper>
  );
};

export default Logo;
