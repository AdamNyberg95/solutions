import React from 'react';
import { StyledContainer, StyledLine } from './ActiveText.styled';

type ActiveTextProps = {
  text: string;
};

const ActiveText: React.FC<ActiveTextProps> = ({ text }) => {
  return (
    <StyledContainer>
      <div
        style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
      >
        {text}
      </div>
      <StyledLine />
      <div
        style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
      >
        {text}
      </div>
      <StyledLine />
      <div
        style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
      >
        {text}
      </div>
    </StyledContainer>
  );
};

export default ActiveText;
