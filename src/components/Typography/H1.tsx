import styled from 'styled-components';

interface H1Props {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
}

const H1 = styled.h1<H1Props>`
  color: ${({ color }) => color || '#333'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-size: ${({ fontSize }) => fontSize || '2.5rem'};
  margin: ${({ margin }) => margin || '0 0 1rem'};
  @media (max-width: 768px) {
    font-size: ${({ fontSize }) => fontSize ? `calc(${fontSize} * 0.60)` : '2rem'};
    margin: ${({ margin }) => margin || '0 0 0.7rem'};

  }
`;

export default H1;
