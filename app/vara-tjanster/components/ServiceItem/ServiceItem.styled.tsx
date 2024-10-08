import styled from 'styled-components';

export const OutsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    gap: 0px;
  }
`;

export const ItemContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: flex-start;
  padding: 20px;
  border: 1px solid #99f1ed;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease, border 0.3s ease;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? 'black' : '#222222')};
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px #99f1ed;
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const IconContainer = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: white;
`;

export const Text = styled.p`
  font-size: 14px;
  color: white;
`;
