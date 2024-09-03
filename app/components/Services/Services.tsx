'use client';

import React, { useEffect } from 'react';
import { StyledDiv, StyledSection } from './Services.styled';
import ServiceItem from '@/app/vara-tjanster/components/ServiceItem/ServiceItem';
import { IoIosCode, IoIosBrush, IoIosMegaphone } from 'react-icons/io';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';

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
