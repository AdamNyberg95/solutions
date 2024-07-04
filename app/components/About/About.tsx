'use client';

import React from 'react';
import { Card, CardBtnWrapper, CardTextWrapper, CardWrapper, StyledSection, TitleWrapper, BtnWrapper } from './About.styled';
import { BtnTypography, H2, TypographyBigThin } from '../Hero/Hero.styled';
import Image from 'next/image';
import saraImg from '../../../../../image/Sara-2.jpg';
import { BtnPrimaryBig } from '../Hero/Hero.styled';
import { IoIosArrowRoundForward } from 'react-icons/io';


export const About: React.FC = () => {
  const text = 'Vi är två Frontend utvecklare med olika bakgrund inom frontend utveckling som tillsammans med dig vill skapa smarta weblösningar för ditt företag. Vi vill hjäla dig att digitalisera ditt företag och hålla ditt företag i framkant med dagens tekonologi.'
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
              <Image src={saraImg} alt="profile-img" width={300} height={300} ></Image>
              <CardTextWrapper>
                <text >Sara Södergård<br></br>Frontend utvecklare</text>
              </CardTextWrapper>
            </Card>
            <Card>
              <Image src={saraImg} alt="profile-img" width={300} height={300} ></Image>
              <CardTextWrapper>
                <text>Adam Nyberg<br></br>Frontend utvecklare</text>
              </CardTextWrapper>
            </Card>
          </CardWrapper>
          <BtnWrapper>
            <BtnPrimaryBig><BtnTypography>Läs mer om oss</BtnTypography>
              <IoIosArrowRoundForward size={23} color="white" />
            </BtnPrimaryBig>
          </BtnWrapper>

        </CardBtnWrapper>

      </StyledSection>

    </>
  )



}