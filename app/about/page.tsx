'use client';

import React from 'react';
import { Card, CardWrapper, StyledSection, TextWrapper, Wrapper, CardTextWrapper, Text1Wrapper } from './page.styled';
import { H2, TypographyBigThin } from '../components/Hero/Hero.styled';
import { Hero } from '../components/Hero/Hero';
import saraImg from '../../../../image/Sara-2.jpg'
import Image from 'next/image';


const About: React.FC = () => {
  return ( <>
      
    <StyledSection>

      <Wrapper>
<TextWrapper>
      <H2>Vi är SA Solutions</H2>
      <TypographyBigThin>Vi är två Frontend utvecklare med olika bakgrund inom frontend utveckling som tillsammans med dig vill skapa smarta weblösningar för ditt företag. Vi vill hjäla dig att digitalisera ditt företag och hålla din web i framkant med dagens tekonologi.</TypographyBigThin>
      </TextWrapper>
      </Wrapper>

      <CardWrapper>
        <Card>
          <Image src={saraImg} alt="profile-img" width={300} height={300} ></Image>
          <CardTextWrapper>

          <text >Sara Södergård <br></br>Frontend utvecklare</text>
          </CardTextWrapper>
        </Card>
        <Card>
           <Image src={saraImg} alt="profile-img" width={300} height={300} ></Image>
           <CardTextWrapper>
            <text>Adam Nyberg <br></br>Frontend utvecklare</text>
            </CardTextWrapper>
        </Card>
      </CardWrapper>



      


    </StyledSection>
    </>
  );
};

export default About;
