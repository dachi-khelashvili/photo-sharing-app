import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { ChevronUp } from 'lucide-react';

export const UpButton: React.FC = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const scrollListner = () => {
      if (window.scrollY > 400) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', scrollListner);

    return () => {
      window.removeEventListener('scroll', scrollListner);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!showTopButton) {
    return null;
  }

  return (
    <Container onClick={goToTop}>
      <ChevronUp size={24} />
    </Container>
  );
};
