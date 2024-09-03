import { StyledArrowIcon } from '@/app/components/Hero/Hero.styled';
import React from 'react';
import { StyledButton } from './Primary.styled';

interface ButtonProps {
  text: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href = '#' }) => {
  const splittedText = text.split(' ');

  return (
    <StyledButton href={href}>
      {splittedText.map((word, index) => (
        <div
          key={index}
          style={{ display: 'inline-block', whiteSpace: 'nowrap', color:  'var(--text-blackdarkmode-whitelightmode)' }}
        >
          {word.split('').map((char, index) => (
            <i key={index}>{char}</i>
          ))}
        </div>
      ))}
      <i style={{ lineHeight: '0', display: 'flex', alignItems: 'center' }}>
        <StyledArrowIcon size={18} />
      </i>
    </StyledButton>
  );
};

export default Button;
