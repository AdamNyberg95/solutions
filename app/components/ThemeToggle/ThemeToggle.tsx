'use client';

// ThemeToggle.tsx

import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ToggleContainer } from './ThemeToggle.styled';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleContainer mode={theme}>
      <div className="toggle" onClick={toggleTheme}>
        <div className="circle" />
      </div>
    </ToggleContainer>
  );
};

export default ThemeToggle;
