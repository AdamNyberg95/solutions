import styled from 'styled-components';

export const StyledSection = styled.section`
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  padding: 150px 0px 0px 0px;
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;
export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;
