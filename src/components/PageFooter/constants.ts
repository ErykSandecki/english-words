// others
import SortAlphabetically from '../../assets/icons/sort-alphabetically.svg';
import SortAlphabeticallySelected from '../../assets/icons/sort-alphabetically-selected.svg';
import SortLatest from '../../assets/icons/sort-latest.svg';
import SortLatestSelected from '../../assets/icons/sort-latest-selected.svg';
import SortOldest from '../../assets/icons/sort-oldest.svg';
import SortOldestSelected from '../../assets/icons/sort-oldest-selected.svg';
import SortShuffle from '../../assets/icons/sort-shuffle.svg';
import SortShuffleSelected from '../../assets/icons/sort-shuffle-selected.svg';
import { FilterType } from './../App/constants';

export const buttons = [
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
