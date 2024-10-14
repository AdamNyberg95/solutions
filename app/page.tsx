'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Popup } from './components/popup/Popup';
import Services from './components/Services/Services';
import LogoSlider from './components/LogoSlider/LogoSlider';
import Slider from './components/Slider/Slider';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;

  // Responsive styles for mobile
  @media (max-width: 768px) {
    gap: 60px;
  }
`;

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const togglePopup = (event: React.MouseEvent<HTMLElement>) => {
    setShowPopup(false);
  };
  return (
    <MainContainer>
      <Hero />
      {showPopup && <Popup togglePopup={togglePopup} />}
      <LogoSlider />
      <Services />
      <About />
      <Slider />
    </MainContainer>
  );
};

export default Home;
