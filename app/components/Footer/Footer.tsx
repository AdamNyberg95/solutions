'use client';

import React from 'react';
import {
  Container,
  TextFooter,
  Title,
  Wrapper,
  Typography,
  FooterCard,
  TextWrapper,
  Box,
  BoxWrapper,
  Box2,
  Border,
  TypographySmall,
  EndTypographyWrapper,
  TextAndIconWrapper,
  StyledIcon,
  WrapperBox2,
  TypographyBox2,
  StyledImage,
} from './Footer.styled';
import { useTheme } from '@/app/context/ThemeContext';




export const Footer: React.FC = () => {
  const { theme } = useTheme(); 
  return (
    <>
      {' '}
      <Container>
        <Wrapper>
          <TextFooter>SA Solutions</TextFooter>
          <BoxWrapper>
            <Box>
              <Title>Kontakt</Title>
              <FooterCard>
                <StyledImage
                src={'./Sara-2.jpg'} alt="profile-img"  
                ></StyledImage>
                <TextWrapper>
                  <Typography style={{marginBottom: '8px'}}>Sara@sasolutions.com</Typography>
                  <Typography style={{ fontWeight: '200' }}>
                    +46 763437347
                  </Typography>
                </TextWrapper>
              </FooterCard>
              <FooterCard>
                <StyledImage
                  src={'/adam.jpeg'} alt="profile-img"
                ></StyledImage>
                <TextWrapper>
                  <Typography style={{marginBottom: '8px'}}>Adam@sasolutions.com</Typography>
                  <Typography>+46 763437347</Typography>
                </TextWrapper>
              </FooterCard>
            </Box>

            <Box2>
              <Title>Våra tjänster</Title>
              <WrapperBox2>
              <TypographyBox2>Webutveckling</TypographyBox2>
              <TypographyBox2>UXI/UX Design</TypographyBox2>
              <TypographyBox2>Digital marknadsföring</TypographyBox2>
              </WrapperBox2>

            

              
            </Box2>

          </BoxWrapper>
        </Wrapper>

        <EndTypographyWrapper>
          <Border></Border>
          <TextAndIconWrapper>
          <StyledIcon size={15}/> 
          <TypographySmall>
          2024 SA Solutions
          </TypographySmall>
          </TextAndIconWrapper>
        </EndTypographyWrapper>
      </Container>
    </>
  );
};
