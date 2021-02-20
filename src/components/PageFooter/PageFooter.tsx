// @ts-nocheck
import React, { FunctionComponent } from 'react';
// others
import { buttons } from './constants';
import { FilterType } from '../App/constants';
// services
import scrollTop from '../../services/scrollTop';
// styles
import { PageFooter as PageFooterStyled } from './PageFooterStyled';

type TProps = {
  filterType: FilterType;
  setFilterType: (filterType: FilterType) => void;
};

const PageFooter: FunctionComponent<TProps> = ({
  filterType: currentFilterType,
  setFilterType,
}) => {
  const onClickHandler = (filterType: FilterType): void => {
    if (filterType !== currentFilterType || filterType === FilterType.shuffle) {
      scrollTop();
      setFilterType(FilterType.pending);
      setTimeout(() => setFilterType(filterType), 500);
    }
  };

  return (
    <PageFooterStyled>
      {buttons.map(
        ({ alt, filterType, src: { selected, unSelected }, text }, index) => {
          const isSelectedFilter = currentFilterType === index;
          return (
            <div
              className="filter-button"
              onClick={() => onClickHandler(filterType)}
              key={index}
            >
              <img alt={alt} src={isSelectedFilter ? selected : unSelected} />
              <p className={isSelectedFilter ? 'selected' : ''}>{text}</p>
            </div>
          );
        }
      )}
    </PageFooterStyled>
  );
};

export default PageFooter;
