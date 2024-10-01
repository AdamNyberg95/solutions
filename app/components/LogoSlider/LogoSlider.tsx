import React from 'react';
import Logo from './components/Logo/Logo';
import { LogoSliderWrapper, LogoSliderContainer } from './LogoSlider.styled';
import { MdOutlineHtml } from "react-icons/md";
import { MdOutlineCss } from "react-icons/md";
import { ReactNode } from "react";


interface LogoData {
  id: number;
  src?: string;
  alt: string;
  icon?: ReactNode;

}

const logos: LogoData[] = [
  { id: 3, src: '/mysql.png', alt: 'Logo 3' },
  { id: 4, src: '/typescript.svg', alt: 'Logo 4' },
  { id: 7, icon: <MdOutlineHtml size={85} />, alt: "Logo 7" },
  { id: 5, src: '/figma.svg', alt: 'Logo 5' },
  { id: 8, icon: <MdOutlineCss size={85} />, alt: "Logo 8" },
  { id: 6, src: '/next.svg', alt: 'Logo 6' },
  { id: 7, src: '/java.svg', alt: 'Logo 7' },
];

const LogoSlider: React.FC = () => {
  return (
    <LogoSliderWrapper>
      <LogoSliderContainer>
      {logos.map((logo) => (
              <Logo
                key={logo.id}
                src={logo.src}
                icon={logo.icon}
                alt={logo.alt}
              />
            ))}
               {logos.map((logo) => (
              <Logo
                key={logo.id}
                src={logo.src}
                icon={logo.icon}
                alt={logo.alt}
              />
            ))}
               {logos.map((logo) => (
              <Logo
                key={logo.id}
                src={logo.src}
                icon={logo.icon}
                alt={logo.alt}
              />
            ))}
      </LogoSliderContainer>
    </LogoSliderWrapper>
  );
};

export default LogoSlider;
