'use client';

import React, { useState } from 'react';
import { StyledDiv, StyledSection, StyledToggle } from './page.styled';
import ServiceItem from './components/ServiceItem/ServiceItem';
import ActiveText from './components/ActiveText/ActiveText'; // Adjust the import path as needed
import { IoIosCode, IoIosBrush, IoIosMegaphone } from 'react-icons/io';

// Define a type for the service
type Service = {
  Icon: React.ElementType;
  title: string;
  text: string;
};

const services: Service[] = [
  {
    Icon: IoIosCode,
    title: 'Web Utveckling',
    text: 'Vi skapar smarta och moderna weblösningar för ditt företag.',
  },
  {
    Icon: IoIosBrush,
    title: 'UI/UX Design & Branding',
    text: 'Vi hjälper dig ta fram den bästa användarupplevelsen där ditt varukmärke är i centrum.',
  },
  {
    Icon: IoIosMegaphone,
    title: 'Analys, SEO och Growth',
    text: 'Vi analyserar, tänker på sökoptimering och vill hjälpa ditt företag växa.',
  },
];

const Service: React.FC = () => {
  // Initialize state for the active service with the first service in the array
  const [activeService, setActiveService] = useState<Service>(services[0]);

  // Handler to set the active service
  const handleServiceClick = (service: Service) => {
    setActiveService(service);
  };

  return (
    <StyledSection>
      <h1>Våra tjänster</h1>
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
            />
          ))}
        </StyledToggle>
        {activeService && <ActiveText text={activeService.text} />}
      </StyledDiv>
    </StyledSection>
  );
};

export default Service;
