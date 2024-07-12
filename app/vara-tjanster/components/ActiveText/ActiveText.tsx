import React from 'react';
import { StyledContainer } from './ActiveText.styled';

type ActiveTextProps = {
  text: string;
};

const ActiveText: React.FC<ActiveTextProps> = ({ text }) => {
  return <StyledContainer>{text}</StyledContainer>;
};

export default ActiveText;
