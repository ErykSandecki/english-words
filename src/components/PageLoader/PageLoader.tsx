// @ts-nocheck
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

// others
import Logo from '../../assets/images/logo.svg';

// styles
import { PageLoader as PageLoaderStyled } from './PageLoaderStyled';

type TProps = {
  isPending: boolean;
};

const PageLoader: FunctionComponent<TProps> = ({ isPending }) =>
  ReactDOM.createPortal(
    <PageLoaderStyled isPending={isPending}>
      {/* SPINNER */}
      <div className="preloader">
        <div className="loader"></div>
      </div>

      {/* TEXT */}
      <p>loading</p>

      {/* LOGO */}
      <img alt="logo" className="logo" src={Logo} />
    </PageLoaderStyled>,
    document.getElementById('pageLoader')
  );

export default PageLoader;
