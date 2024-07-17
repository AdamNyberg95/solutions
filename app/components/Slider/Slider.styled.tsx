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
  background-color: var(--beige-color);
  border: 1px solid #ccc;
  border-radius: 30px;
  box-shadow: 0 2px 8px var(--header-boxshadow-color);
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
    background-color: rgba(0, 0, 0, 0.2); /* Default dot color */
    padding: 10px;
    border-radius: 30px;
  }

  .swiper-pagination-bullet {
    width: 10px; /* Adjust the dot size */
    height: 10px; /* Adjust the dot size */
    background-color: green; /* Default dot color */
    opacity: 0.5; /* Default dot opacity */
    margin: 0 5px; /* Adjust spacing between dots */
    cursor: pointer; /* Make dots clickable */
  }

  .swiper-pagination-bullet-active {
    background-color: #000; /* Active dot color */
    opacity: 1; /* Active dot opacity */
  }
`;
