'use client';

import React from 'react';
import EmailForm from '../components/EmailForm/EmailForm';
import { ContactBox, EmailFormWrapper, InsideBox, StyledSection, TextWrapper, Typography, Wrapper } from './page.styled';
import { ColorSpan, H2, TypographyBigThin } from '../components/Hero/Hero.styled';

const Contact: React.FC = () => {
  return (
    <StyledSection>
          <h1>Kontakt</h1>
      <Wrapper>
  
      <TextWrapper>
    
  
      <H2 style={{marginBottom: '55px' }}>Kontakta oss</H2>
      <H2> på <ColorSpan>SA Solutions</ColorSpan></H2>
      <TypographyBigThin style={{marginTop: '50px', width: '85%', marginLeft: '0px'}}>Välkommen att kontakta oss - Vi vill hjälpa dig digitalisera eller förbättra ditt företags digitalakanaler!</TypographyBigThin>

      <ContactBox>
        <InsideBox>
      <h3>Mail</h3>
      <Typography style={{marginTop: '-10px'}}>info@sasolutions.com</Typography>
      </InsideBox>
      <InsideBox>
      <h3>Telefon</h3>
      <Typography style={{marginTop: '-10px'}}>+46763437347</Typography>
      </InsideBox>
      </ContactBox>
      <ContactBox>
        <InsideBox>
      <h3>Sara Södergård</h3>
      <Typography style={{marginTop: '-10px'}}>Sara@sasolutions.com</Typography>
      <Typography style={{marginTop: '-10px'}}>+46 763437347</Typography>

      </InsideBox>
      <InsideBox>
      <h3>Adam Nyberg</h3>
      <Typography style={{marginTop: '-10px'}}>Adam@sasolutions.com</Typography>
      <Typography style={{marginTop: '-10px'}}>+46 763437347</Typography>

      </InsideBox>
      </ContactBox>


     
      </TextWrapper>

    


<EmailFormWrapper>
  <h2>Skicka ett meddelande!</h2>
      <EmailForm />

      </EmailFormWrapper>
      </Wrapper>
    </StyledSection>
  );
};

export default Contact;
