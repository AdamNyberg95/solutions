'use client';

import React from 'react';
import {
  ColorSpan,
  BtnPrimaryBig,
  BtnText,
  BtnTypography,
  BtnWrapper,
  Container,
  H2,
  TextBox,
  TypographyBigThin,
  TypographySmall,
  StyledArrowIcon,
  StyledIconBtnText,
} from './Hero.styled';
import { BtnPrimary } from '../Header/Header.styled';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Primary from '@/src/components/Button/Primary/Primary';
import H1 from '@/src/components/Typography/H1';

export const Hero: React.FC = () => {
  const text =
    'SA Solutions erbjuder skärddarsydda digitala lösningar för din web. Ser du behov av en hemsida till ditt företag, behöver din hemsida uppdateras eller vill du hitta andra digitala lösningar för ditt företag? Då tror vi att vi är rätt partner för dig!'.split(
      ' '
    );

  return (
    <Container>
      <TextBox>
        <H1 color={'var(--blue-color)'} fontSize={'72px'} fontWeight="300">
          SA Solutions
        </H1>
        <H2>
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
          <Link href={`/about`}>
            <TypographySmall> Läs mer om oss </TypographySmall>
          </Link>

          <StyledIconBtnText size={25} />
        </BtnText>
        <BtnWrapper>
          <Primary text="Kontakta oss" />
          <Primary text="Våra tjänster" />
        </BtnWrapper>
      </TextBox>
    </Container>
  );
};
