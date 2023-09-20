import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Space, Spin } from 'antd';

// components
import AddNewWordForm from '../AddNewWordForm/AddNewWordForm';
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
import getRefDatabase from '../Firebase/services/getRefDatabase';

const App: FunctionComponent<{}> = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const isPending = useSelector(isPendingSelector);
  const [filterType, setFilterType] = useState(FilterType.latest);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        getRefDatabase(['locations']).set(data);
      });
  }, []);

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

          {/* ADD NEW WORD FORM */}
          <AddNewWordForm
            isModalVisible={isModalVisible}
            selectedCategory={selectedCategory}
            setModalVisible={setModalVisible}
          />

          {/* SCROLL BUTTON */}
          <ScrollButton />

          {/* PAGE HEADER */}
          <PageHeader
            selectedCategory={selectedCategory}
            setModalVisible={setModalVisible}
          />

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
