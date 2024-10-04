import styled from 'styled-components';

export const StyledSection = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 150px 0px 100px 0px;
  @media (max-width: 768px) {
    padding: 100px 16px 50px 16px;
  }
`;
export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 50px 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0px;
  }
`;
export const StyledToggle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  @media (max-width: 768px) {
    gap: 5px;
  }
`;
