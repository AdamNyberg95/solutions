// src/components/typography/H2.tsx

import styled from 'styled-components';

interface H2Props {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
}

const H2 = styled.h2<H2Props>`
  color: ${({ color }) => color || '#333'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  margin: ${({ margin }) => margin || '0 0 1rem'};
  @media (max-width: 768px) {
    font-size: ${({ fontSize }) =>
      fontSize ? `calc(${fontSize} * 0.68)` : '2rem'};
    margin: 0px;
  }
`;

export default H2;
