import styled from 'styled-components';

interface H1Props {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
}

const H1 = styled.h1<H1Props>`
  color: ${({ color }) => color || '#333'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  font-size: ${({ fontSize }) => fontSize || '2.5rem'};
  margin: ${({ margin }) => margin || '0 0 1rem'};
`;

export default H1;
