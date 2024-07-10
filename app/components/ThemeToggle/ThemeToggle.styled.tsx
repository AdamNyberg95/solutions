// ThemeToggle.styled.tsx

import styled from 'styled-components';

interface ToggleContainerProps {
  mode: 'light' | 'dark';
}

export const ToggleContainer = styled.div<ToggleContainerProps>`
  .toggle {
    position: relative;
    display: inline-block;
    width: 50px; /* Adjusted width */
    height: 30px; /* Adjusted height */
    background-color: ${(props) => (props.mode === 'light' ? '#ccc' : '#333')};
    border-radius: 30px; /* Adjusted border-radius to make it rounder */
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  .circle {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px; /* Adjusted width of the circle */
    height: 24px; /* Adjusted height of the circle */
    background-color: ${(props) => (props.mode === 'light' ? '#fff' : '#000')};
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${(props) =>
      props.mode === 'light' ? 'translateX(0)' : 'translateX(20px)'};
  }

  .toggle:active .circle {
    transform: ${(props) =>
      props.mode === 'light' ? 'translateX(20px)' : 'translateX(0)'};
  }
`;
