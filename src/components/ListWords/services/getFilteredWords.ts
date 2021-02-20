// others
import { FilterType } from '../../App/constants';
import { TWord } from '../../../store/words/types';

const getShuffledData = (data: Array<TWord>): Array<TWord> => {
  let randomIndex, prevValue, currentIndex;
  for (currentIndex = data.length - 1; currentIndex > 0; currentIndex--) {
    randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    prevValue = data[currentIndex];
    data[currentIndex] = data[randomIndex];
    data[randomIndex] = prevValue;
  }
  return data;
};

const getSortedDataByAlphabetically = (data: Array<TWord>): Array<TWord> =>
  [...data].sort(({ english: a }, { english: b }) => a.localeCompare(b));

const getFilteredWords = (
  filterType: FilterType,
  data: Array<TWord>
): Array<TWord> => {
  switch (filterType) {
    case FilterType.latest:
      return [...data].reverse();
    case FilterType.alphabetically:
      return getSortedDataByAlphabetically(data);
    case FilterType.shuffle:
      return getShuffledData([...data]);
    default:
      return data;
  }
};

export default getFilteredWords;
