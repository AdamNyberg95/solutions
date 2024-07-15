'use client';

import React from 'react';
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

import { BtnPrimaryBig } from '../Hero/Hero.styled';

export const About: React.FC = () => {
  const text =
    'Vi är två utvecklare med olika bakgrund inom utveckling och tech som tillsammans med dig vill skapa smarta weblösningar för ditt företag. Vi vill hjäla dig att digitalisera ditt företag och hålla ditt företag i framkant med dagens teknologi.';
  return (
    <>
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
              <Primary text="Kontakta oss" />
            </StyledLink>
          </BtnWrapper>
        </CardBtnWrapper>
      </StyledSection>
    </>
  );
};
