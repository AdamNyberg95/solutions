'use client';

import React from 'react';
import {
  Overlay,
  PopupCard,
  ClickButton,
  TextWrapper,
  TypographySmallThin,
  TypographySmall,
} from './Popup.styled';
import { IoIosClose } from 'react-icons/io';
import { BtnPrimarySmall, BtnSmallTypography } from '../Header/Header.styled';
import { ColorSpan, StyledArrowIcon } from '../Hero/Hero.styled';
import Primary from '@/src/components/Button/Primary/Primary';
type Popup = {
  togglePopup: (event: React.MouseEvent<HTMLElement>) => void;
};

export const Popup = ({ togglePopup }: Popup) => {
  return (
    <>
      <Overlay>
        <PopupCard>
          <ClickButton onClick={togglePopup}>
            <IoIosClose size={30} />
          </ClickButton>
          <TextWrapper>
            <TypographySmall>
              Få en digital lösning till <ColorSpan>20%</ColorSpan> av
              marknadspris
            </TypographySmall>
            <TypographySmallThin style={{ marginTop: '-10px' }}>
              {' '}
              Våra fem första kunder får kanon erbjudandet. Hör av dig nu!
            </TypographySmallThin>
            <Primary text="Kontakta oss" />
          </TextWrapper>
        </PopupCard>
      </Overlay>
    </>
  );
};
