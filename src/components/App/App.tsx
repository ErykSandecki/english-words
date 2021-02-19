// @ts-nocheck
import React, { FunctionComponent, useState } from 'react';

// components
import ListWords from '../ListWords/ListWords';
import PageHeader from '../PageHeader/PageHeader';
import { enhanceApp } from './enhanceApp';

export type TInnerProps = {};

const App: FunctionComponent<TInnerProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <>
      <PageHeader />
      <ListWords
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
};

export default enhanceApp(App);
