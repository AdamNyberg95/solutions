import styled from 'styled-components';

export const StyledSection = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 150px 0px 150px 0px;
  @media (max-width: 768px) {
    box-sizing: border-box;
    padding: 100px 16px 50px 16px;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextAndFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EmailFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3px;
`;

export const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  margin-right: 50px;
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

export const Typography = styled.p`
  font-size: 16px;
  color: var(--text-color);
  font-weight: 200;
`;
