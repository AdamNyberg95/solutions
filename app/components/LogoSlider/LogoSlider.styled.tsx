import styled, { keyframes } from 'styled-components';

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export const LogoSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  overflow-x: hidden;
  z-index: 1;
`;

export const LogoSliderContainer = styled.div`
  display: flex;
  gap: 80px;
  animation: ${moveLeft} 25s linear infinite;
`;
