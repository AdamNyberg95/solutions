'use client';

import React from 'react';
import {
  OutsideContainer,
  ItemContainer,
  IconContainer,
  Title,
  Text,
} from './ServiceItem.styled';
import { IconType } from 'react-icons';
import ActiveText from '../ActiveText/ActiveText'; // Ensure the path is correct for ActiveText

interface ServiceItemProps {
  Icon: IconType;
  title: string;
  text: string;
  onClick?: () => void; // Make onClick optional
  isActive?: boolean; // Make isActive optional
  isMobileView?: boolean; // Make isMobileView optional
  activeService?: {
    activeTitle: string;
    activeText: string;
    keywords: string[];
  } | null; // Make activeService optional
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  Icon,
  title,
  text,
  onClick,
  isActive = false, // Default to false if not provided
  isMobileView = false, // Default to false if not provided
  activeService = null, // Default to null if not provided
}) => {
  return (
    <OutsideContainer>
      <ItemContainer onClick={onClick} isActive={isActive}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          <IconContainer>
            <Icon color="#99f1ed" />
          </IconContainer>
          <Title style={{ color: 'white' }}>{title}</Title>
        </div>
        <Text style={{ color: 'white' }}>{text}</Text>
      </ItemContainer>

      {/* Conditionally render ActiveText for mobile view */}
      {isActive && isMobileView && activeService && (
        <ActiveText
          activeText={activeService.activeText}
          text={''} // You might want to pass some text here if needed
          activeTitle={activeService.activeTitle}
          keywords={activeService.keywords}
        />
      )}
    </OutsideContainer>
  );
};

export default ServiceItem;
