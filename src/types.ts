// others
import { TWordsState } from './store/words/types';

// store
import { REDUCER_KEY as GROUPED_ENDPOINTS_REDUCER_KEY } from './store/words/actionsType';

export type TMainState = {
  [GROUPED_ENDPOINTS_REDUCER_KEY]: TWordsState;
};

export type TAnyAction = {
  type: string;
  payload?: any;
};


