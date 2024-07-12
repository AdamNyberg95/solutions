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
    title: 'Web Development',
    text: 'We provide modern web development services to help you build your online presence.',
  },
  {
    Icon: IoIosBrush,
    title: 'UI/UX Design',
    text: 'Our design team will ensure your product looks amazing and provides a great user experience.',
  },
  {
    Icon: IoIosMegaphone,
    title: 'Digital Marketing',
    text: 'Reach a larger audience with our effective digital marketing strategies.',
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
