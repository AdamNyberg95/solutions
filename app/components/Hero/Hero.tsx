'use client';

import React from 'react';
import { ColorSpan, BtnPrimaryBig, BtnText, BtnTypography, BtnWrapper, Container, H1, H2, TextBox, TypographyBigThin, TypographySmall} from './Hero.styled';
import { BtnPrimary } from '../Header/Header.styled';
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from 'next/link';


export const Hero: React.FC = () => {
    return(
    <Container>
        <TextBox>
           <H1>SA Solutions</H1> 
           <H2>Your solution for  <ColorSpan>your</ColorSpan> web</H2> 
             <TypographyBigThin> SA Solutions erbjuder skärddarsydda digitala lösningar för din web. Ser du behov av en hemsida till ditt företag, behöver din hemsida uppdateras eller vill du hitta andra digitala lösningar för ditt företag? Då tror vi att vi är rätt partner för dig! </TypographyBigThin>
             <BtnText> <Link href={`/about`}> <TypographySmall> Läs mer om oss </TypographySmall> </Link><IoIosArrowRoundForward size={25} /></BtnText> 
             <BtnWrapper>
             <BtnPrimaryBig><BtnTypography>Boka möte med oss</BtnTypography> <IoIosArrowRoundForward size={23} color="white"/></BtnPrimaryBig>        <BtnPrimary> <BtnTypography>Kontakta oss</BtnTypography> <IoIosArrowRoundForward size={23} color="white"/></BtnPrimary> 
             </BtnWrapper>
             </TextBox>
    </Container>
    )

}