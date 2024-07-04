import styled from 'styled-components';


export const ClickButton = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PopupCard = styled.div`
  width: 300px;
  position: absolute;
  bottom: -80px;
  right: 30px;
  margin-left: -150px;


  background-color: var(--header-color-light-beigeWhite) ;
  border-radius: 6px;
  padding: 20px;
  transform: translateY(-50%);
  pointer-events: auto;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  background-color: transparent;
  pointer-events: none;
`;

export const TextWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

`;

export const TypographySmall = styled.p`
font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
`;

export const TypographySmallThin = styled.p`
font-size: 16px;
  font-weight: 200;
  line-height: 1.5;
`;