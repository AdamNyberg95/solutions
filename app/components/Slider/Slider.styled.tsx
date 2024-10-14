import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0px 20px;
    box-sizing: border-box;
  }
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  background-color: var(--reviewSlider-background-color);
  border: 1px solid #ccc;
  border-radius: 30px;
  box-shadow: 0 2px 8px var(--reviewSlider-boxshadow-color);
  cursor: grabbing;
  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  padding: 0px 0px 50px 0px;
  .swiper-pagination {
    bottom: 5px; /* Adjust the position from the bottom as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: auto;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: var(
      --reviewSlider-background-color
    ); /* Default dot color */

    padding: 10px;
    border-radius: 30px;
  }

  .swiper-pagination-bullet {
    width: 10px; /* Adjust the dot size */
    height: 10px; /* Adjust the dot size */
    background-color: var(--blue-color); /* Default dot color */
    opacity: 0.5; /* Default dot opacity */
    margin: 0 5px; /* Adjust spacing between dots */
    cursor: pointer; /* Make dots clickable */
  }

  .swiper-pagination-bullet-active {
    background-color: var(--pagination-background-color); /* Active dot color */
    opacity: 1; /* Active dot opacity */
  }
`;

export const SlideContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 20px;
  color: var(--text-color);
  @media (max-width: 768px) {
    padding: 18px;
  font-size: 18px;
  font-weight: 300
  }
`;

export const StyledImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

export const ImgTextBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ImgText = styled.p`
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  font-weight: 300;

  }
`;

export const ImgText2 = styled.p`
  font-size: 16px;
  font-weight: 200;
  margin-top: -13px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
