'use client';

import React from 'react';
import EmailForm from '../components/EmailForm/EmailForm';
import {
  ContactBox,
  EmailFormWrapper,
  InsideBox,
  StyledSection,
  TextWrapper,
  Typography,
  TextAndFormWrapper,
  Wrapper,
  TextBox,
} from './page.styled';
import {
  ColorSpan,
  H2,
  TypographyBigThin,
} from '../components/Hero/Hero.styled';

const Contact: React.FC = () => {
  return (
    <StyledSection>
      <Wrapper>
        <h1>Kontakt</h1>
        <TextAndFormWrapper>
          <TextWrapper>
            <H2>Kontakta oss</H2>
            <TextBox>
            <TypographyBigThin>
              Vi vill hjälpa dig digitalisera eller förbättra ditt företags
              digitalakanaler. Välkommen att kontakta oss!
            </TypographyBigThin>
            </TextBox>
            <ContactBox>
              <InsideBox>
                <h3>Mail</h3>
                <Typography style={{ marginTop: '-10px' }}>
                  info@sasolutions.com
                </Typography>
              </InsideBox>
              <InsideBox>
                <h3>Telefon</h3>
                <Typography style={{ marginTop: '-10px' }}>
                  +46763437347
                </Typography>
              </InsideBox>
            </ContactBox>
            <ContactBox>
              <InsideBox>
                <h3>Sara Södergård</h3>
                <Typography style={{ marginTop: '-10px' }}>
                  Sara@sasolutions.com
                </Typography>
                <Typography style={{ marginTop: '-10px' }}>
                  +46 763437347
                </Typography>
              </InsideBox>
              <InsideBox>
                <h3>Adam Nyberg</h3>
                <Typography style={{ marginTop: '-10px' }}>
                  Adam@sasolutions.com
                </Typography>
                <Typography style={{ marginTop: '-10px' }}>
                  +46 763437347
                </Typography>
              </InsideBox>
            </ContactBox>
          </TextWrapper>

          <EmailFormWrapper>
            <h1>Skicka ett meddelande</h1>
            <EmailForm />
          </EmailFormWrapper>
        </TextAndFormWrapper>
      </Wrapper>
    </StyledSection>
  );
};

export default Contact;
