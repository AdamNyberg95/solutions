import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: var(--reviewSlider-background-color);
  border: 1px solid #ccc;
  border-radius: 30px;
  box-shadow: 0 2px 8px var(--reviewSlider-boxshadow-color);
  cursor: grabbing;
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
    background-color: var(--reviewSlider-background-color); /* Default dot color */


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
flex-direction: column ;
justify-content: center;
align-items: center;
`;

export const Text = styled.p`
text-align: center;
font-size: 20px;
color: var(--text-color);
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
`;

export const ImgText2 = styled.p`
font-size: 16px;
font-weight: 200;
margin-top: -13px;
`;