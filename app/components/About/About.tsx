'use client';

import React, { useEffect, useRef } from 'react';
import {
  Card,
  CardBtnWrapper,
  CardTextWrapper,
  CardWrapper,
  StyledSection,
  TitleWrapper,
  BtnWrapper,
  StyledLink,
  TextName,
  TextRolle,
  StyledImage,
} from './About.styled';
import {
  BtnTypography,
  H2,
  StyledArrowIcon,
  TypographyBigThin,
} from '../Hero/Hero.styled';
import Primary from '@/src/components/Button/Primary/Primary';

import { motion, useAnimation, useInView } from 'framer-motion';

export const About: React.FC = () => {
  const text =
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
      <StyledSection>
        <TitleWrapper>
          <H2>Vi är SA Solutions</H2>
          <TypographyBigThin>{text}</TypographyBigThin>
        </TitleWrapper>

        <CardBtnWrapper>
          <CardWrapper>
            <Card>
              <StyledImage src={'./Sara-2.jpg'} alt="profile-img"></StyledImage>
              <CardTextWrapper>
                <TextName>Sara Södergård</TextName>
                <TextRolle>Frontend utvecklare</TextRolle>
                <TextRolle>UX/UI designer</TextRolle>
              </CardTextWrapper>
            </Card>
            <Card>
              <StyledImage src={'/adam.jpeg'} alt="profile-img"></StyledImage>
              <CardTextWrapper>
                <TextName>Adam Nyberg</TextName>
                <TextRolle>Frontend utvecklare</TextRolle>
                <TextRolle>Backend utvecklare</TextRolle>
              </CardTextWrapper>
            </Card>
          </CardWrapper>
          <BtnWrapper>
            <StyledLink href={`/about`}>
              <Primary text="Läs mer om oss" />
            </StyledLink>
          </BtnWrapper>
        </CardBtnWrapper>
      </StyledSection>
    </motion.div>
  );
};
