'use client';

import React, { useEffect } from 'react';
import { StyledDiv, StyledSection } from './Services.styled';
import ServiceItem from '@/app/vara-tjanster/components/ServiceItem/ServiceItem';
import { IoIosCode, IoIosBrush, IoIosMegaphone } from 'react-icons/io';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';
import H2 from '@/src/components/Typography/H2';

const Services: React.FC = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.5 }} // Adding a delay of 0.5 seconds
    >
      <StyledSection>
        <Link
          href={`/`}
          style={{
            textDecoration: 'none',
            color: 'var(--text-color)',
          }}
        >
          <H2 color={'var(--text-color)'}fontSize={'45px'} fontWeight="300" style={{ marginBottom: '12px' }}>
            SA Solutions vill vara din digitala partner -{' '}
          </H2>
          <H2 fontWeight="200" color={'var(--text-color)'}
            style={{
              marginBottom: '50px',
              marginLeft: '6px',
            }}
          >
            vi erbjuder dig heltäckande skräddarsydda lösningar
          </H2>
        </Link>
        <Link
          href={`/`}
          style={{
            textDecoration: 'none',
            color: 'var(--text-color)',
          }}
        >
          <h1 >Våra tjänster</h1>
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
    </motion.div>
  );
};

export default Services;
