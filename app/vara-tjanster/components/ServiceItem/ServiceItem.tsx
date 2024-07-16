'use client';

import React from 'react';
import {
  ItemContainer,
  IconContainer,
  Title,
  Text,
} from './ServiceItem.styled';
import { IconType } from 'react-icons';

interface ServiceItemProps {
  Icon: IconType;
  title: string;
  text: string;
  onClick: () => void;
  isActive: boolean; // Add isActive prop
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  Icon,
  title,
  text,
  onClick,
  isActive,
}) => {
  return (
    <ItemContainer onClick={onClick} isActive={isActive}>
      {' '}
      {/* Pass isActive to styles */}
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
          <Icon color='#99f1ed' />
        </IconContainer>
        <Title style={{color: 'white'}}>{title}</Title>
      </div>
      <Text style={{color: 'white'}}>{text}</Text>
    </ItemContainer>
  );
};

export default ServiceItem;
