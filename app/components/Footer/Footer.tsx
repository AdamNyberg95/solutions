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
} from './Footer.styled';


export const Footer: React.FC = () => {
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
                <img
                  style={{
                    width: '72px',
                    backgroundColor: '#ffff',
                    height: '80px',
                  }}
                ></img>
                <TextWrapper>
                  <Typography style={{marginBottom: '8px'}}>Sara@sasolutions.com</Typography>
                  <Typography style={{ fontWeight: '200' }}>
                    +46 763437347
                  </Typography>
                </TextWrapper>
              </FooterCard>
              <FooterCard>
                <img
                  style={{
                    width: '72px',
                    backgroundColor: '#ffff',
                    height: '80px',
                  }}
                ></img>
                <TextWrapper>
                  <Typography style={{marginBottom: '8px'}}>Adam@sasolutions.com</Typography>
                  <Typography>+46 763437347</Typography>
                </TextWrapper>
              </FooterCard>
            </Box>
            <Box2>
              <Title>Kompetenser</Title>
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
