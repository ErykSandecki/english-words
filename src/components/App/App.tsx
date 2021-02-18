// @ts-nocheck
import React, { FunctionComponent } from 'react';

// components
import Firebase from '../Firebase/Firebase';
import ListWords from '../ListWords/ListWords';
import { enhanceApp } from './enhanceApp';

export type TInnerProps = {};

const App: FunctionComponent<TInnerProps> = () => {
  return (
    <>
      <Firebase />
      <ListWords />
    </>
  );
};

export default enhanceApp(App);
