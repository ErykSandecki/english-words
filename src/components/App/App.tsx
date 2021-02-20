// @ts-nocheck
import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';

// components
import ListWords from '../ListWords/ListWords';
import PageHeader from '../PageHeader/PageHeader';
import PageLoader from '../PageLoader/PageLoader';

// others
import { FilterType } from './constants';

// store
import { isPendingSelector } from '../../store/words/selectors';
import ScrollButton from '../ScrollButton/ScrollButton';
import PageFooter from '../PageFooter/PageFooter';

const App: FunctionComponent<{}> = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const isPending = useSelector(isPendingSelector);
  const [filterType, setFilterType] = useState(FilterType.latest);

  return (
    <>
      <PageLoader isPending={isPending} />
      {!isPending && (
        <>
          <ScrollButton />
          <PageHeader selectedCategory={selectedCategory} />
          <ListWords
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <PageFooter filterType={filterType} setFilterType={setFilterType} />
        </>
      )}
    </>
  );
};

export default App;
