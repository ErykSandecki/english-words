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
  filterType,
  setFilterType,
}) => {
  const onClickHandler = (filterType: FilterType): void => {
    if (filterType === FilterType.shuffle) {
      scrollTop();
      setFilterType(FilterType.pending);
      setTimeout(() => setFilterType(filterType), 1000);
    } else {
      setFilterType(filterType);
    }
  };

  return (
    <PageFooterStyled>
      {buttons.map(
        (
          { alt, filterType: _filterType, src: { selected, unSelected }, text },
          index
        ) => {
          const selectedFilter = filterType === index;
          return (
            <div
              className="filter-button"
              onClick={() => onClickHandler(_filterType)}
              key={index}
            >
              <img alt={alt} src={selectedFilter ? selected : unSelected} />
              <p className={selectedFilter ? 'selected' : ''}>{text}</p>
            </div>
          );
        }
      )}
    </PageFooterStyled>
  );
};

export default PageFooter;
