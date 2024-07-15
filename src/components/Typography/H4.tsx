// src/components/typography/H4.tsx

import styled from 'styled-components';

interface H4Props {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
}

const H4 = styled.h4<H4Props>`
  color: ${({ color }) => color || '#333'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
  margin: ${({ margin }) => margin || '0 0 1rem'};
`;

export default H4;
