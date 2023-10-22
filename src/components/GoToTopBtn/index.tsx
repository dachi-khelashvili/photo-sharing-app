import React, { useState, useEffect } from 'react';

import { StyledGoToTopBtn, SVG } from './styles';
// import { UpArrow } from './up-arrow.svg';

export const GoToTopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    showTopBtn && (
      <StyledGoToTopBtn onClick={goToTop}>
        <SVG src="./up-arrow.svg" />
      </StyledGoToTopBtn>
    )
  );
};
