import React from 'react';
import { StyledButton } from './Primary.styled';

interface ButtonProps {
  text: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href = '#' }) => {
  console.log(text);

  const splittedText = text.split(' ');
  console.log(splittedText);

  return (
    <StyledButton href={href}>
      {splittedText.map((word, index) => (
        <div
          key={index}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word.split('').map((char, index) => (
            <i key={index}>{char}</i>
          ))}
        </div>
      ))}
    </StyledButton>
  );
};

export default Button;
