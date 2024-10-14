import styled from 'styled-components';
import { PiCopyrightThin } from 'react-icons/pi';
import { StarSvgBlue } from '@/app/assets/icons/StarSvgBlue';
import { StarSvgDark } from '@/app/assets/icons/StarSvgDark';

const WiStarsBlueDataURL = `data:image/svg+xml;utf8,${encodeURIComponent(
  StarSvgBlue
)}`;
const WiStarDarkDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(
  StarSvgDark
)}`;

export const Container = styled.footer`
  width: 100vw;
  height: 430px;
  top: 0;
  width: 100vw;
  height: 430px;
  top: 0;
  background: url(${WiStarDarkDataUrl}) repeat,
    linear-gradient(
      to left,
      var(--footer-background-color) 25%,
      var(--footer-background-shade) 100%,
      var(--footer-background-shade) 80%
    );
  [data-theme='dark'] & {
    background: url(${WiStarsBlueDataURL}) repeat,
      linear-gradient(
        to left,
        var(--footer-background-color) 25%,
        var(--footer-background-shade) 100%,
        var(--footer-background-shade) 80%
      );
  }
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const TextFooter = styled.p`
  color: var(--text-blackdarkmode-whitelightmode);
  font-size: 30px;
  font-weight: 300;
  @media (max-width: 768px) {
    margin: 10px 0px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin: 0px;
  }
`;

export const Wrapper = styled.div`
  padding: 20px 20px;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin: 0px;
    padding: 10px 20px;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.p`
  color: var(--text-blackdarkmode-whitelightmode);
  font-size: 20px;
  font-weight: 200;
`;

export const Typography = styled.p`
  color: var(--text-blackdarkmode-whitelightmode);
  font-size: 16px;
  font-weight: 200;
  line-height: 0;
`;

export const TypographySmall = styled.p`
  color: var(--text-blackdarkmode-whitelightmode);
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
  color: var(--text-blackdarkmode-whitelightmode);
  margin-top: 3.7px;
  margin-right: 4px;
`;

export const TextAndIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
`;

export const WrapperBox2 = styled.div`
  margin-left: 3px;
  margin-top: -18px;
`;

export const TypographyBox2 = styled.p`
  color: var(--text-blackdarkmode-whitelightmode);
  font-size: 16px;
  font-weight: 200;
`;

export const StyledImage = styled.img`
  height: 80px;
  border-radius: 6px;
`;
