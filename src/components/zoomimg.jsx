import React, { useEffect, useState } from 'react';

const ScrollZoomImage = () => {
  const [scale, setScale] = useState(1.5);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const calculateStartZoom = (width) => {
      // Adjust these values to control how the zoom scales with width
      if (width > 1200) {
        return 2; // Very large screens
      } else if (width > 768) {
        return 3; // Desktops/laptops
      } else {
        return 3; // Mobile phones
      }
    };

    setScale(calculateStartZoom(window.innerWidth));
    setWindowWidth(window.innerWidth);

    const handleScrollAndResize = () => {
      const currentScrollTop = window.scrollY;
      const currentWindowWidth = window.innerWidth;

      if (currentWindowWidth !== windowWidth) {
        setWindowWidth(currentWindowWidth);
      }

      const maxZoomOut = 1;
      const dynamicStartZoom = calculateStartZoom(currentWindowWidth);
      const zoomSpeed = 2500;

      const newScale = Math.max(
        maxZoomOut,
        dynamicStartZoom - currentScrollTop / zoomSpeed
      );

      setScale(newScale);
    };

    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, [windowWidth]);

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      zIndex: 1,
      boxShadow: '0px 25px 25px rgb(29, 29, 29)',
      backgroundColor: 'black'
    }}>
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: '48% 30%',
          transition: 'transform 0.1s ease-out',
          width: '100%',
          height: '100%',

        }}
      >
        <img
          src="./beautiful-shot-snowy-mountain-sunset.jpg"
          alt="Zoom Out"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',




          }}
        />
      </div>
    </div>
  );
};

export default ScrollZoomImage;