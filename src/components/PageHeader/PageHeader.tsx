// @ts-nocheck
import React from 'react';

// others
import PlusIcon from '../../assets/icons/plus.svg';

// styles
import { PageHeader as PageHeaderStyled } from './PageHeaderStyled';

const PageHeader = () => {
  return (
    <PageHeaderStyled>
      {/* TITLE */}
      <h3>English Words</h3>

      {/* ICON */}
      <img alt="plus-icon" src={PlusIcon} />

      {/* STATISTICS */}
      <div className="statistic-container">
        <div className="statistic-wrapper">
          <p>128</p>
          <span>Total Words</span>
        </div>
        <div className="statistic-wrapper">
          <p>128</p>
          <span>Words</span>
        </div>
      </div>
    </PageHeaderStyled>
  );
};

export default PageHeader;
