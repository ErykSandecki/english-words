// @ts-nocheck
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// others
import PlusIcon from '../../assets/icons/plus.svg';
import LogoNeutral from '../../assets/images/logo-neutral.svg';

// store
import {
  getSumTotalWordsSelector,
  getSumWordsFormCategorySelector,
} from '../../store/words/selectors';

// styles
import { PageHeader as PageHeaderStyled } from './PageHeaderStyled';

type TProps = {
  selectedCategory: number;
  setModalVisible: (flag: boolean) => void;
};

const PageHeader: FunctionComponent<TProps> = ({
  selectedCategory,
  setModalVisible,
}) => {
  const totalAmountWords = useSelector(getSumTotalWordsSelector);
  const amountWords = useSelector(
    getSumWordsFormCategorySelector(selectedCategory)
  );

  return (
    <PageHeaderStyled>
      <div className="wrapper-items">
        {/* ICON */}
        <img alt="logo-neutral" src={LogoNeutral} />

        {/* TITLE */}
        <h3>English Words</h3>

        {/* ICON */}
        <img
          alt="plus-icon"
          onClick={() => setModalVisible(true)}
          src={PlusIcon}
        />
      </div>

      {/* STATISTICS */}
      <div className="statistic-container">
        <div className="statistic-wrapper">
          <p>{totalAmountWords}</p>
          <span>Total Words</span>
        </div>
        <div className="statistic-wrapper">
          <p>{amountWords}</p>
          <span>Words In This Section</span>
        </div>
      </div>
    </PageHeaderStyled>
  );
};

export default PageHeader;
