import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  src: string;
  alt: string;
}

const LogoWrapper = styled.div`
  width: 100px; /* Adjust the size as needed */
  height: 35px; /* Adjust the size as needed */
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

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <LogoWrapper>
      <LogoImage src={src} alt={alt} />
    </LogoWrapper>
  );
};

export default Logo;
