// ThemeToggle.styled.tsx

import styled from 'styled-components';

interface ToggleContainerProps {
  mode: 'light' | 'dark';
}
export const ToggleContainer = styled.div<ToggleContainerProps>`
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  height: 100%;
  .toggle {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 30px;
    background-color: ${(props) => (props.mode === 'light' ? '#ccc' : '#333')};
    border-radius: 30px;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  .circle {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
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

  @media (max-width: 768px) {
    .toggle {
      width: 40px; /* Smaller width */
      height: 24px; /* Smaller height */
    }

    .circle {
      width: 18px; /* Adjust circle size */
      height: 18px;
      transform: ${(props) =>
        props.mode === 'light' ? 'translateX(0)' : 'translateX(16px)'};
    }

    .toggle:active .circle {
      transform: ${(props) =>
        props.mode === 'light' ? 'translateX(16px)' : 'translateX(0)'};
    }
  }
`;
