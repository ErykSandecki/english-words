import React, { FunctionComponent, useEffect, useState } from 'react';

// others
import ArrowUp from '../../assets/images/arrow-up.svg';

// styles
import { ScrollButton as ScrollButtonStyled } from './ScrollButtonStyled';

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ScrollButton: FunctionComponent = () => {
  const [showButton, setShowButton] = useState(false);

  const onScrollHandler = () => {
    if (!showButton && window.pageYOffset > 400) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 400) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <ScrollButtonStyled onClick={scrollTop}>
      <img alt="arrow-up" src={ArrowUp} />
    </ScrollButtonStyled>
  );
};

export default ScrollButton;
