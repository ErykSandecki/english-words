// @ts-nocheck
import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Space, Spin } from 'antd';
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
// styles
import { App as AppStyled } from './AppStyled';

const App: FunctionComponent<{}> = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const isPending = useSelector(isPendingSelector);
  const [filterType, setFilterType] = useState(FilterType.latest);

  return (
    <AppStyled>
      <PageLoader isPending={isPending} />
      {!isPending && (
        <>
          {/* OVERLAY */}
          {filterType === FilterType.pending && (
            <div className="overlay">
              <Space size="middle">
                <Spin size="large" />
              </Space>
            </div>
          )}

          {/* SCROLL BUTTON */}
          <ScrollButton />

          {/* PAGE HEADER */}
          <PageHeader selectedCategory={selectedCategory} />

          {/* WORDS */}
          <ListWords
            filterType={filterType}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* FOOTER */}
          <PageFooter filterType={filterType} setFilterType={setFilterType} />
        </>
      )}
    </AppStyled>
  );
};

export default App;
