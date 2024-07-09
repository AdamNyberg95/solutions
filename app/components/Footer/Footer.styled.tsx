import styled from 'styled-components';
import { PiCopyrightThin } from 'react-icons/pi';



export const Container = styled.footer`
width: 100vw;
background-color: var(--footer-background-color);
height: 430px;
top: 0;
`;

export const TextFooter = styled.p`
color: var(--footer-text-color);
font-size: 30px;
`;

export const Box = styled.div`
display: flex;
flex-direction: column;
`;

export const Box2 = styled.div`
display: flex;
flex-direction: column;
margin-left: 30px;
`;

export const Wrapper = styled.div`
padding: 20px 20px;
margin-left: 20px;
`;

export const BoxWrapper = styled.div`
display:flex;
flex-direction: row;
`;

export const Title = styled.p`
color: var(--footer-text-color);
font-size: 20px;
font-weight: 200;
`;

export const Typography = styled.p`
color: var(--footer-text-color);
font-size: 16px;
font-weight: 200;
line-height: 0;
`;

export const TypographySmall = styled.p`
color: var(--footer-text-color);
font-size: 12px;
font-weight: 200;
line-height: 0;
`;

export const FooterCard = styled.div`
display: flex;
flex-direction: row; 
margin-bottom: 10px;
`;

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
margin-left: 10px;
`;

export const Border = styled.div`
border-bottom: solid 1px;
border-color: grey;
width: 95vw;
`;

export const EndTypographyWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const StyledIcon = styled(PiCopyrightThin)`
color: var(--icon-color);
margin-top: 3.7px;
margin-right: 4px;

`;

export const TextAndIconWrapper = styled.div`
display: flex; 
flex-direction: row;
padding: 10px 10px;
`;






