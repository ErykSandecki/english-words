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

  const onClickHandler = (): void => {
    scrollTop();
    setShowButton(false);
  };

  const onScrollHandler = () => {
    if (window.pageYOffset > 400) {
      setShowButton(true);
    } else if (window.pageYOffset <= 400) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);
    // eslint-disable-next-line
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <ScrollButtonStyled onClick={onClickHandler}>
      <img alt="arrow-up" src={ArrowUp} />
    </ScrollButtonStyled>
  );
};

export default ScrollButton;
