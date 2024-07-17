'use client';

import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Popup } from './components/popup/Popup';
import Services from './components/Services/Services';
import LogoSlider from './components/LogoSlider/LogoSlider';
import Slider from './components/Slider/Slider';

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
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '50px',
      }}
    >
      <Hero />
      {showPopup && <Popup togglePopup={togglePopup} />}
      <LogoSlider />
      <Services />
      <About />
      <Slider />
    </main>
  );
};

export default Home;
