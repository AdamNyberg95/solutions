'use client';

import React from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  ImgText,
  ImgText2,
  ImgTextBox,
  Slide,
  SlideContainer,
  SliderContainer,
  StyledImg,
  StyledSwiper,
  Text,
  TextBox,
} from './Slider.styled';

const MySwiper: React.FC = () => {
  return (
    <SliderContainer>
      <StyledSwiper
        // install Swiper modules
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={80}
        slidesPerView={1.5}
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true} //%
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: {
            slidesPerView: 1, // Use a number here
            spaceBetween: 40, // Use colon instead of equal sign
          },
        }}
      >
        <SwiperSlide>
          <Slide>
            <SlideContainer>
              <Text>
                "Sara tar sig an problem och sätter sig in i de verktyg vi
                använder på Qte på ett mycket bra sätt. Sara är kommunikativ och
                alla hon jobbar med är väldigt nöjda med det hon har gjort"
              </Text>
              <ImgTextBox>
                <StyledImg src={'/oskar.png'} />
                <TextBox>
                  <ImgText>Oskar Råhlén</ImgText>
                  <ImgText2>Grundare, Qte development</ImgText2>
                </TextBox>
              </ImgTextBox>
            </SlideContainer>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <SlideContainer>
              <Text>
                "Adam har bidragit till att bygga E-GO App, där han visat sig
                vara ansvarstagande och driven. Hans problemlösningsförmåga och
                snabba inlärning av nya verktyg gör honom mycket uppskattad."
              </Text>
              <ImgTextBox>
                <StyledImg src={'/navid.jpeg'} />
                <TextBox>
                  <ImgText>Navid Nayeri</ImgText>
                  <ImgText2>Grundare, E-GO App</ImgText2>
                </TextBox>
              </ImgTextBox>
            </SlideContainer>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <SlideContainer>
              <Text>
                "Sara tar sig an problem och sätter sig in i de verktyg vi
                använder på Qte på ett mycket bra sätt. Sara är kommunikativ och
                alla hon jobbar med är väldigt nöjda med det hon har gjort"
              </Text>
              <ImgTextBox>
                <StyledImg src={'/oskar.png'} />
                <TextBox>
                  <ImgText>Oskar Råhlén</ImgText>
                  <ImgText2>Grundare, Qte development</ImgText2>
                </TextBox>
              </ImgTextBox>
            </SlideContainer>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <SlideContainer>
              <Text>
                "Adam har bidragit till att bygga E-GO App, där han visat sig
                vara ansvarstagande och driven. Hans problemlösningsförmåga och
                snabba inlärning av nya verktyg gör honom mycket uppskattad."
              </Text>
              <ImgTextBox>
                <StyledImg src={'/navid.jpeg'} />
                <TextBox>
                  <ImgText>Navid Nayeri</ImgText>
                  <ImgText2>Grundare, E-GO App</ImgText2>
                </TextBox>
              </ImgTextBox>
            </SlideContainer>
          </Slide>
        </SwiperSlide>
      </StyledSwiper>
    </SliderContainer>
  );
};

export default MySwiper;
