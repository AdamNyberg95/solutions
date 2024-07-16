import styled from 'styled-components';
import { StarSvgDark } from '@/app/assets/icons/StarSvgDark';

const WiStarDarkDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(
  StarSvgDark
)}`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  border: 1px solid #99f1ed;
  border-radius: 8px;
  background:url(${WiStarDarkDataUrl}) repeat,
#000
  ;
  padding: 20px 0px;
`;

export const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc; /* Adjust color as needed */
  margin: 10px 0; /* Adjust margin as needed */
`;

export const StyledActiveTitle = styled.p`
font-size: 28px;
color: white;
`;

export const StyledActiveText = styled.p`
font-size: 18px;
color: white;
font-weight: 200;
line-height: 1.5;
margin-left: 8px;
width: 96%;
`;

export const Text = styled.p`
color: #99f1ed;
font-size: 16px;
border: 1px solid #99f1ed;
border-radius: 30px;
padding: 8px 8px;


`;