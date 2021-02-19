// @ts-nocheck
import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';

// components
import ListWords from '../ListWords/ListWords';
import PageHeader from '../PageHeader/PageHeader';
import PageLoader from '../PageLoader/PageLoader';
import { enhanceApp } from './enhanceApp';

// store
import { isPendingSelector } from '../../store/words/selectors';

export type TInnerProps = {};

const App: FunctionComponent<TInnerProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const isPending = useSelector(isPendingSelector);

  return (
    <>
      <PageLoader isPending={isPending} />
      <PageHeader selectedCategory={selectedCategory} />
      <ListWords
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
};

export default enhanceApp(App);
