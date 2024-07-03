import { StarSvg } from '@/app/assets/icons/StarSvg';
import styled from 'styled-components';

const WiStarsDataURL = `data:image/svg+xml;utf8,${encodeURIComponent(StarSvg)}`;

export const Container = styled.header`
  height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  background: url(${WiStarsDataURL}) repeat,
    linear-gradient(
      to bottom,
      var(--header-color-light-beigeWhite) 0%,
      var(--header-color-light-beige) 25%,
      var(--header-color) 50%,
      var(--header-color-shade) 75%,
      var(--header-color-light-beige) 100%
    );
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;
  max-width: 1200px;
`;

export const H1 = styled.h1`
  font-size: 72px;
  font-weight: 300;
  line-height: 0px;
  color: #619894;
`;

export const H2 = styled.h2`
  font-size: 45px;
  font-weight: 300;
  line-height: 1px;
  margin-top: 28px;
`;

export const ColorSpan = styled.span`
  color: #619894;
`;

export const TypographyBigThin = styled.h4`
  font-size: 20px;
  font-weight: 200;
  line-height: 1.5;
  margin-left: 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

export const BtnText = styled.button`
  border: none;
  background-color: transparent;
  display: flex;

  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const TypographySmall = styled.p`
  font-size: 18px;
`;

export const BtnTypography = styled.p`
  font-size: 16px;
  color: white;
`;

export const BtnPrimaryBig = styled.button`
  width: 175px;
  height: 45px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  margin-right: 10px;
  background-color: black;
  border-color: white;
`;
