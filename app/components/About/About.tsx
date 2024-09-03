'use client';

<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 4ba9a821cc6ffcfc8bb4b4d63400b1b19f181604
import {
  Card,
  CardBtnWrapper,
  CardTextWrapper,
  CardWrapper,
  StyledLink,
  StyledSection,
  TitleWrapper,
  TextName,
  TextRolle,
  StyledImage,
} from './About.styled';
import {
  H2,
  TypographyBigThin,
} from '../Hero/Hero.styled';
import Primary from '@/src/components/Button/Primary/Primary';
import { useRouter } from 'next/navigation';
import CustomCursor from '../CustomCursor/CustomCrusor';


<<<<<<< HEAD
import { motion, useAnimation, useInView } from 'framer-motion';
=======
>>>>>>> 4ba9a821cc6ffcfc8bb4b4d63400b1b19f181604

export const About: React.FC = () => {
  const router = useRouter();
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isCursorVisible) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isCursorVisible]);

  const navigateToSection = (section: string) => {
    router.push(`/about#${section}`);
  };

  const text =
<<<<<<< HEAD
    'Vi är två utvecklare med olika bakgrund inom utveckling och tech som tillsammans med dig vill skapa smarta weblösningar för ditt företag. Vi vill hjäla dig att digitalisera ditt företag och hålla ditt företag i framkant med dagens teknologi.';

  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50% 0px' });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
=======
    'Vi är två utvecklare med olika bakgrund inom utveckling och tech som tillsammans med dig vill skapa smarta webblösningar för ditt företag. Vi vill hjäla dig att digitalisera ditt företag och hålla ditt företag i framkant med dagens teknologi.';


    const handleMouseEnter = (text: string) => {
      setCursorText(text);
      setIsCursorVisible(true);
    };
  
    const handleMouseLeave = () => {
      setCursorText('');
      setIsCursorVisible(false);
    };

    
  return (
    <>
 {isCursorVisible && <CustomCursor x={cursorPosition.x} y={cursorPosition.y} text={cursorText} />}
>>>>>>> 4ba9a821cc6ffcfc8bb4b4d63400b1b19f181604
      <StyledSection>
        <TitleWrapper>
          <H2>Vi är SA Solutions</H2>
          <TypographyBigThin>{text}</TypographyBigThin>
        </TitleWrapper>

        <CardBtnWrapper>
          <CardWrapper>
            <Card>

              <StyledImage src={'./Sara-2.jpg'} alt="profile-img" onClick={() => navigateToSection('saraSection')} onMouseEnter={() => handleMouseEnter('Mer om Sara')}    onMouseLeave={handleMouseLeave}
      ></StyledImage>
              <CardTextWrapper>
                <TextName>Sara Södergård</TextName>
                <TextRolle>Frontend utvecklare</TextRolle>
                <TextRolle>UX/UI designer</TextRolle>
              </CardTextWrapper>
            </Card>
            <Card>
              <StyledImage src={'/adam.jpeg'} alt="profile-img"  onClick={() => navigateToSection('adamSection')} onMouseEnter={() => handleMouseEnter('Mer om Adam')}
      onMouseLeave={handleMouseLeave}></StyledImage>
              <CardTextWrapper>
                <TextName>Adam Nyberg</TextName>
                <TextRolle>Frontend utvecklare</TextRolle>
                <TextRolle>Backend utvecklare</TextRolle>
              </CardTextWrapper>
            </Card>
          </CardWrapper>
            <StyledLink href={`/about`}>
              <Primary text="Läs mer om oss" />
            </StyledLink>
        </CardBtnWrapper>
      </StyledSection>
    </motion.div>
  );
};

