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

export const getDataSelector: Selector<
  TMainState,
  Array<TFetchWords>
> = createSelector(groupedEndpointsSelector, getFp('data'));

export const getListCategoriesSelector: Selector<
  Array<TFetchWords>,
  Array<string>
> = createSelector(getDataSelector, (data) => data.map(({ name }) => name));
