// @ts-nocheck
// others
import { TFetchWordsSuccess } from './types';

// store
import { WordsActionsType } from './actionsType';
import { TAnyAction } from '../../types';
import { TWordsState as TWordsState } from './types';

const initialState: TWordsState = {
  data: [],
  isPending: true,
};

const fetchWordsSuccess = (
  state: TWordsState,
  action: TFetchWordsSuccess
): TWordsState => ({
  ...state,
  data: action.payload,
  isPending: false,
});

const words = (
  state: TWordsState = initialState,
  action: TAnyAction
): TWordsState => {
  switch (action.type) {
    case WordsActionsType.fetchWordsSuccess:
      return fetchWordsSuccess(state, action);
    default:
      return state;
  }
};

export default words;
