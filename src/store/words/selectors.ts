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

export const getDataSelector: Selector<
  TMainState,
  Array<TFetchWords>
> = createSelector(groupedEndpointsSelector, getFp('data'));

export const getListCategoriesSelector: Selector<
  Array<TFetchWords>,
  Array<string>
> = createSelector(getDataSelector, (data) => data.map(({ name }) => name));

export const getSumTotalWordsSelector: Selector<
  Array<TFetchWords>,
  number
> = createSelector(getDataSelector, (data) =>
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
  createSelector(getDataSelector, (data) => {
    if (data.length > 0 && data[index].words) {
      return data[index].words.length;
    }
    return 0;
  });
