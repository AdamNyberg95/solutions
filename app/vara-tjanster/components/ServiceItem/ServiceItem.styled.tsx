import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: flex-start;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const IconContainer = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 18px;
`;

export const Text = styled.p`
  font-size: 14px;
`;
