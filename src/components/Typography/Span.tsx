import styled from 'styled-components';

interface SpanProps {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
}

const Span = styled.span<SpanProps>`
  color: ${({ color }) => color || '#333'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  margin: ${({ margin }) => margin || '0'};
`;

export default Span;
