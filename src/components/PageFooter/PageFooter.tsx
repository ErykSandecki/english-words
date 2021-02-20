// @ts-nocheck
import React, { FunctionComponent } from 'react';

// others
import SortAlphabetically from '../../assets/icons/sort-alphabetically.svg';
import SortAlphabeticallySelected from '../../assets/icons/sort-alphabetically-selected.svg';
import SortLatest from '../../assets/icons/sort-latest.svg';
import SortLatestSelected from '../../assets/icons/sort-latest-selected.svg';
import SortOldest from '../../assets/icons/sort-oldest.svg';
import SortOldestSelected from '../../assets/icons/sort-oldest-selected.svg';
import SortShuffle from '../../assets/icons/sort-shuffle.svg';
import SortShuffleSelected from '../../assets/icons/sort-shuffle-selected.svg';
import { FilterType } from '../App/constants';

// services
import scrollTop from '../../services/scrollTop';

// styles
import { PageFooter as PageFooterStyled } from './PageFooterStyled';

const data = [
  {
    alt: 'sort-latest',
    filterType: FilterType.latest,
    src: {
      unSelected: SortLatest,
      selected: SortLatestSelected,
    },
    text: 'Latest',
  },
  {
    alt: 'sort-oldest',
    filterType: FilterType.oldest,
    src: {
      unSelected: SortOldest,
      selected: SortOldestSelected,
    },
    text: 'Oldest',
  },
  {
    alt: 'sort-shuffle',
    filterType: FilterType.shuffle,
    src: {
      unSelected: SortShuffle,
      selected: SortShuffleSelected,
    },
    text: 'shuffle',
  },
  {
    alt: 'sort-alphabetically',
    filterType: FilterType.alphabetically,
    src: {
      unSelected: SortAlphabetically,
      selected: SortAlphabeticallySelected,
    },
    text: 'Alphabetically',
  },
];

type TProps = {
  filterType: FilterType;
  setFilterType: (filterType: FilterType) => void;
};

const PageFooter: FunctionComponent<TProps> = ({
  filterType,
  setFilterType,
}) => {
  const onClickHandler = (filterType: FilterType): void => {
    setFilterType(FilterType.pending);
    scrollTop();
    setTimeout(() => setFilterType(filterType), 1000);
  };

  return (
    <PageFooterStyled>
      {data.map(
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
