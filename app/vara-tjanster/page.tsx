'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { StyledDiv, StyledSection, StyledToggle } from './page.styled';
import ServiceItem from './components/ServiceItem/ServiceItem';
import ActiveText from './components/ActiveText/ActiveText'; // Adjust the import path as needed
import { IoIosCode, IoIosBrush, IoIosMegaphone } from 'react-icons/io';
import { TitleWrapper } from '../components/About/About.styled';
import { TypographyBigThin } from '../components/Hero/Hero.styled';
import H2 from '@/src/components/Typography/H2';
import { IconType } from 'react-icons'; // Import IconType

// Define a type for the service
type Service = {
  Icon: IconType; // Use IconType from react-icons
  title: string;
  activeTitle: string;
  text: string;
  activeText: string;
  keywords: string[];
};

const services: Service[] = [
  {
    Icon: IoIosCode,
    title: 'Webbutveckling',
    activeTitle: 'Vi är experter på Webbutveckling',
    text: 'Vi skapar smarta och moderna weblösningar för ditt företag.',
    activeText:
      'Vi kan både frontend- och backend utveckling. Vi vill vara din partner oavsett om du vill ha en enkel hemsidan eller en mer komplex webb-lösning.',
    keywords: [
      'Frontend',
      'Backend',
      'Tillgänglighet/WCAG',
      'Säkerhet',
      'Underhåll',
      'Support',
    ],
  },
  {
    Icon: IoIosBrush,
    title: 'UI/UX Design & Branding',
    activeTitle: 'Användarupplevelsen och ditt varumärke är A och O',
    text: 'Vi hjälper dig ta fram den bästa användarupplevelsen där ditt varumärke är i centrum.',
    activeText:
      'Vi förstår att en snabb webbplats med rätt gränssnitt och en design som speglar ditt varumärke är avgörande för ditt företags framgång.',
    keywords: [
      'Skräddarsytt',
      'Wireframing',
      'Prototyping',
      'Responsivitet',
      'UX/UI granskning',
      'Content',
    ],
  },
  {
    Icon: IoIosMegaphone,
    title: 'Analys, SEO och Growth',
    activeTitle: 'Vi kan hjälpa ditt företag att växa',
    text: 'Vi tänker på analys och sökoptimering och vill hjälpa ditt företag växa.',
    activeText:
      'Vi trendspanar och analyserar vad som fungerar och inte funkar för dina kunder. Vi ser till att sökoptimera din webb. På så sätt kan vi hjälpa ditt företag nå nya höjder!',
    keywords: [
      'Researching',
      'Användar-analys',
      'SEO-analys',
      'Strategi',
      'Planering',
    ],
  },
];

const introText =
  'Som din digitala partner tänker vi ur ett helhetsperspektiv. Vi kombinerar den bästa tekniken för ditt företag med en design som utstrålar ditt varumärke. Våra heltäckande digitala tjänster kan få ditt företag att växa!';

const Service: React.FC = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeService, setActiveService] = useState<Service>(services[0]);

  useEffect(() => {
    // Check if window is defined before accessing it
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Call handleResize once on mount to set the initial value
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  // Handler to set the active service
  const handleServiceClick = (service: Service) => {
    setActiveService(service);
  };

  return (
    <StyledSection>
      <TitleWrapper>
        <h1>Våra tjänster</h1>
        <H2 color={'var(--text-color)'} fontSize={'45px'} fontWeight="300">
          Vi erbjuder heltäckande skräddarsydda lösningar
        </H2>
        <TypographyBigThin dangerouslySetInnerHTML={{ __html: introText }} />
      </TitleWrapper>

      <StyledDiv>
        <StyledToggle>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              Icon={service.Icon}
              title={service.title}
              text={service.text}
              onClick={() => handleServiceClick(service)}
              isActive={service.title === activeService.title} // Pass isActive prop
              isMobileView={isMobileView} // Pass isMobileView prop
              activeService={activeService} // Pass activeService prop
            />
          ))}
        </StyledToggle>
        {/* Show ActiveText only if not in mobile view */}
        {!isMobileView && activeService && (
          <ActiveText
            activeText={activeService.activeText}
            text={''}
            activeTitle={activeService.activeTitle}
            keywords={activeService.keywords}
          />
        )}
      </StyledDiv>
    </StyledSection>
  );
};

export default Service;
