'use client';

import React from 'react';
import EmailForm from '../components/EmailForm/EmailForm';
import { StyledSection } from './page.styled';

const Contact: React.FC = () => {
  return (
    <StyledSection>
      <h1>Kontakta oss</h1>

      <EmailForm />
    </StyledSection>
  );
};

export default Contact;
