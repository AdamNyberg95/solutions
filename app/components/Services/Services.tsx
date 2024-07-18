'use client';

import React from 'react';
import { StyledDiv, StyledSection } from './Services.styled';
import ServiceItem from '@/app/vara-tjanster/components/ServiceItem/ServiceItem';
import { IoIosCode, IoIosBrush, IoIosMegaphone } from 'react-icons/io';
import Link from 'next/link';
import { H2, TypographyBigThin } from '../Hero/Hero.styled';
import { TitleWrapper } from '../About/About.styled';

const Services: React.FC = () => {
  return (
    <StyledSection>
      <Link
        href={`/`}
        style={{
          textDecoration: 'none',
          color: 'var(--text-color)',
        }}
      >

        <H2 style={{marginBottom: '60px'}}>Vi vill vara din digitala partner - </H2>
        <H2 style={{marginBottom: '70px', fontWeight: '200', marginLeft: '6px'}}>vi erbjuder heltäckande skärddarsydda webblösningar</H2>

      </Link>
      <StyledDiv>
        <Link
          href={`/vara-tjanster`}
          style={{
            textDecoration: 'none',
            color: 'var(--text-color)',
          }}
        >
          <ServiceItem
            Icon={IoIosCode}
            title="Webbutveckling"
            text="Vi skapar smarta och moderna weblösningar för ditt företag."
          />
        </Link>
        <Link
          href={`/vara-tjanster`}
          style={{
            textDecoration: 'none',
            color: 'var(--text-color)',
          }}
        >
          <ServiceItem
            Icon={IoIosBrush}
            title="UI/UX Design & Branding"
            text="Vi tar fram den bästa användarupplevelsen där ditt varukmärke är i centrum."
          />
        </Link>
        <Link
          href={`/vara-tjanster`}
          style={{
            textDecoration: 'none',
            color: 'var(--text-color)',
          }}
        >
          <ServiceItem
            Icon={IoIosMegaphone}
            title="Analys, SEO och Growth"
            text="Vi tänker på analys och sökoptimering och vill hjälpa ditt företag växa."
          />
        </Link>
      </StyledDiv>
    </StyledSection>
  );
};

export default Services;
