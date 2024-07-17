import styled from 'styled-components';
import Image from 'next/image';

export const StyledSection = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 150px 0px 150px 0px;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px 30px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  max-width: 700px;
  padding: 10px 10px;
`;

export const CardTitle = styled.p`
  font-size: 22px;
`;

export const UnderTitle = styled.p`
  font-size: 18px;
  font-weight: 200;
  margin-top: -16px;
`;
export const UnderUnderTitle = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin-top: -16px;
  margin-left: 2px;
`;

export const TextWithBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Border = styled.div`
  border-bottom: 1px solid;
  border-color: var(--beige-color);
  width: 700px;
`;

export const Title2 = styled.p`
  font-size: 16px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 200;
`;

export const CompetenceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CompetenceBorder = styled.div`
  border: solid 1px;
  border-radius: 50px;
  width: 78px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const StyledImage = styled(Image)`
  border-radius: 6px;
`;
