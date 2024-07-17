import styled, { keyframes } from 'styled-components';

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const LogoWrapper = styled.div`
  width: 100px; /* Adjust the size as needed */
  height: 50px; /* Adjust the size as needed */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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
