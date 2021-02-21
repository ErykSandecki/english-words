// @ts-nocheck
import getFp from 'lodash/fp/get';
import { createSelector, Selector } from 'reselect';

// others
import { TFetchWords } from './types';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TLocationState } from './types';

export const groupedEndpointsSelector: Selector<
  TMainState,
  TLocationState
> = getFp(REDUCER_KEY);

export const isPendingSelector: Selector<TMainState, boolean> = createSelector(
  groupedEndpointsSelector,
  getFp('isPending')
);

export const getCategories: Selector<
  TMainState,
  Array<TFetchWords>
> = createSelector(groupedEndpointsSelector, getFp('categories'));

export const getListNamesOfCategoriesSelector: Selector<
  Array<TFetchWords>,
  Array<string>
> = createSelector(getCategories, (data) => data.map(({ name }) => name));

export const getSumTotalWordsSelector: Selector<
  Array<TFetchWords>,
  number
> = createSelector(getCategories, (data) =>
  data
    ? data.reduce(
        (current, { words }) => current + (words ? words.length : 0),
        0
      )
    : 0
);

export const getSumWordsFormCategorySelector = (
  index: number
): Selector<Array<TFetchWords>, number> =>
  createSelector(getCategories, (data) => {
    if (data.length > 0 && data[index].words) {
      return data[index].words.length;
    }
    return 0;
  });

export const getListWordsSelector = (
  index: number
): Selector<Array<TFetchWords>, number> =>
  createSelector(getCategories, (data) => {
    if (data.length > 0 && data[index].words) {
      return data[index].words;
    }
    return [];
  });
