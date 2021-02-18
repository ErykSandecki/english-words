// @ts-nocheck
// others
import {
  TFetchWords,
} from './types';

// store
import { WordsActionsType } from './actionsType';
import {
  TFetchWordsSuccess,
} from './types';

export const fetchWordsSuccessAction = (
  payload: Array<TFetchWords>
): TFetchWordsSuccess => ({
  type: WordsActionsType.fetchWordsSuccess,
  payload,
});
