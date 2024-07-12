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
            title="Web Development"
            text="We provide modern web development services to help you build your online presence."
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
            title="UI/UX Design"
            text="Our design team will ensure your product looks amazing and provides a great user experience."
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
            title="Digital Marketing"
            text="Reach a larger audience with our effective digital marketing strategies."
          />
        </Link>
      </StyledDiv>
    </StyledSection>
  );
};

export default Services;
