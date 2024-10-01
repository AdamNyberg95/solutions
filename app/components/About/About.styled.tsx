import styled from 'styled-components';
import Link from 'next/link';

export const StyledSection = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 150px 0px 0px 0px;
  margin-bottom: 150px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Card = styled.div`
  max-width: 550px;
  margin: 20px 20px;
`;

export const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 6px;
  cursor: none;
  z-index: 1;
`;

export const CardTextWrapper = styled.div`
  margin: 4px 4px;
`;

export const TextName = styled.p`
  font-size: 16px;
  margin-top: -2px;
`;

export const TextRolle = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin-top: -12px;
`;

export const Text1Wrapper = styled.div`
  border-bottom: solid 1px;
  border-color: grey;
  max-width: 200px;
`;

export const CardBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



export const StyledLink = styled(Link)`
  text-decoration: none;
`;
