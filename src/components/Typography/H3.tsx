// src/components/typography/H3.tsx

import styled from 'styled-components';

interface H3Props {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
}

const H3 = styled.h3<H3Props>`
  color: ${({ color }) => color || '#333'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  font-size: ${({ fontSize }) => fontSize || '1.75rem'};
  margin: ${({ margin }) => margin || '0 0 1rem'};
`;

export default H3;
