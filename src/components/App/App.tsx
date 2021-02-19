// @ts-nocheck
import React, { FunctionComponent } from 'react';

// components
import ListWords from '../ListWords/ListWords';
import PageHeader from '../PageHeader/PageHeader';
import { enhanceApp } from './enhanceApp';

export type TInnerProps = {};

const App: FunctionComponent<TInnerProps> = () => {
  return (
    <>
      <PageHeader />
      <ListWords />
    </>
  );
};

export default enhanceApp(App);
