import React from 'react';
import Logo from './components/Logo/Logo';
import { LogoSliderWrapper, LogoSliderContainer } from './LogoSlider.styled';

interface LogoData {
  id: number;
  src: string;
  alt: string;
}

const logos: LogoData[] = [
  { id: 1, src: '/next.svg', alt: 'Logo 1' },
  { id: 2, src: '/next.svg', alt: 'Logo 2' },
  { id: 3, src: '/next.svg', alt: 'Logo 3' },
  { id: 4, src: '/next.svg', alt: 'Logo 4' },
  { id: 5, src: '/typescript.svg', alt: 'Logo 5' },
  { id: 6, src: '/next.svg', alt: 'Logo 6' },
  { id: 7, src: '/java.svg', alt: 'Logo 7' },
  // Add more logos as needed
];

const LogoSlider: React.FC = () => {
  return (
    <LogoSliderWrapper>
      <LogoSliderContainer>
        {logos.map((logo) => (
          <Logo key={logo.id} src={logo.src} alt={logo.alt} />
        ))}
        {logos.map((logo) => (
          <Logo key={logo.id} src={logo.src} alt={logo.alt} />
        ))}
        {logos.map((logo) => (
          <Logo key={logo.id} src={logo.src} alt={logo.alt} />
        ))}
      </LogoSliderContainer>
    </LogoSliderWrapper>
  );
};

export default LogoSlider;
