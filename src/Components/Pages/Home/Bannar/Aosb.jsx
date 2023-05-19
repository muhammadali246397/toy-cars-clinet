
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSComponent = ({ children }) => {
  useEffect(() => {
    AOS.init({duration:800});
    return () => {
      AOS.refresh();
    };
  }, []);

  return <div data-aos="zoom-in-up" data-aos-duration="1000">{children}</div>;
};

export default AOSComponent;