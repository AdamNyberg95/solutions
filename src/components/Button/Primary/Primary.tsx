import React from 'react';
import { StyledButton } from './Primary.styled'; // Adjust the path as per your file structure

interface ButtonProps {
  text: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href = '#' }) => {
  return (
    <StyledButton href={href}>
      {text.split('').map((char, index) => (
        <i key={index}>{char}</i>
      ))}
    </StyledButton>
  );
};

export default Button;
