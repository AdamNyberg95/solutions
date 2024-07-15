'use client';

import React from 'react';
import { StyledDiv, StyledSection } from './Services.styled';
import ServiceItem from '@/app/vara-tjanster/components/ServiceItem/ServiceItem';
import { IoIosCode, IoIosBrush, IoIosMegaphone } from 'react-icons/io';
import Link from 'next/link';

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
        <h1>Våra tjänster</h1>
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
            title="Web utveckling"
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
