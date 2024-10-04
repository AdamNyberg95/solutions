import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../../context/ThemeContext';

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

const LogoImage = styled.img<{ isDarkTheme: boolean }>`
  // Add prop for theme
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: ${({ isDarkTheme }) =>
    isDarkTheme ? 'grayscale(100%) invert(100%)' : 'grayscale(100%)'};
`;

const Logo: React.FC<LogoProps> = ({ src, alt, icon }) => {
  const { theme } = useTheme(); // Get the current theme

  const isDarkTheme = theme === 'dark'; // Determine if the theme is 'dark'

  return (
    <LogoWrapper>
      {src ? (
        <LogoImage
          src={src}
          alt={alt}
          isDarkTheme={isDarkTheme} // Pass theme as prop
        />
      ) : (
        <div aria-label={alt}>{icon}</div>
      )}
    </LogoWrapper>
  );
};

export default Logo;
