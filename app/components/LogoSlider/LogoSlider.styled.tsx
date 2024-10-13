import styled, { keyframes } from 'styled-components';

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
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
  z-index: 1;
  @media (max-width: 768px) {
    height: 40px;
    overflow: hidden;
    padding-bottom: 60px;
  }
`;

export const LogoSliderContainer = styled.div`
  display: flex;
  gap: 80px;
  animation: ${moveLeft} 25s linear infinite;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
