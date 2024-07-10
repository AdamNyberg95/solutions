import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  src: string;
  alt: string;
}

const LogoImage = styled.img`
  width: 100px; /* Adjust size as needed */
  height: auto; /* Maintain aspect ratio */
  margin: 0 20px; /* Adjust spacing between logos */
`;

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <LogoImage src={src} alt={alt} />;
};

export default Logo;
