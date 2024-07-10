'use client';

import React from 'react';
import { StyledDiv, StyledSection } from './page.styled';
import ServiceItem from './components/ServiceItem/ServiceItem';
import { IoIosCode, IoIosBrush, IoIosMegaphone } from 'react-icons/io';

const Service: React.FC = () => {
  return (
    <StyledSection>
      <h1>Våra tjänster</h1>
      <StyledDiv>
        <ServiceItem
          Icon={IoIosCode}
          title="Web Development"
          text="We provide modern web development services to help you build your online presence."
        />
        <ServiceItem
          Icon={IoIosBrush}
          title="UI/UX Design"
          text="Our design team will ensure your product looks amazing and provides a great user experience."
        />
        <ServiceItem
          Icon={IoIosMegaphone}
          title="Digital Marketing"
          text="Reach a larger audience with our effective digital marketing strategies."
        />
      </StyledDiv>
    </StyledSection>
  );
};

export default Service;
