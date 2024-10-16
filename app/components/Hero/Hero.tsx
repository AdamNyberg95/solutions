'use client';

import React from 'react';
import {
  StyledLink,
  ColorSpan,
  BtnText,
  BtnWrapper,
  Container,
  TextBox,
  TypographyBigThin,
  TypographySmall,
  StyledIconBtnText,
} from './Hero.styled';
import { motion } from 'framer-motion';
import Primary from '@/src/components/Button/Primary/Primary';
import H1 from '@/src/components/Typography/H1';
import H2 from '@/src/components/Typography/H2';

export const Hero: React.FC = () => {
  const text =
    'SA Solutions erbjuder skärddarsydda digitala lösningar för din webb. Ser du behov av en hemsida till ditt företag, behöver din hemsida uppdateras eller vill du hitta andra digitala lösningar för ditt företag? Då tror vi att vi är rätt partner för dig!'.split(
      ' '
    );

  return (
    <Container>
      <TextBox>
        <H1 color={'var(--blue-color)'} fontSize={'72px'} fontWeight="300">
          SA Solutions
        </H1>
        <H2 color={'var(--text-color)'} fontSize={'45px'} fontWeight="300">
          Your solution for <ColorSpan>your</ColorSpan> web
        </H2>
        <TypographyBigThin>
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.15,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{' '}
            </motion.span>
          ))}
        </TypographyBigThin>
        <BtnText>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <StyledLink href={`/about`}>
              <TypographySmall> Läs mer om oss </TypographySmall>
              <StyledIconBtnText size={25} />
            </StyledLink>
          </motion.div>
        </BtnText>
        <BtnWrapper>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <StyledLink href={`/contact`}>
              <Primary text="Kontakta oss" />
            </StyledLink>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <StyledLink href={`/vara-tjanster`}>
              <Primary text="Våra tjänster" />
            </StyledLink>
          </motion.div>
        </BtnWrapper>
      </TextBox>
    </Container>
  );
};
