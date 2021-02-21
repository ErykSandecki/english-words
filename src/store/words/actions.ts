// @ts-nocheck
// others
import { TFetchWords } from './types';

// store
import { WordsActionsType } from './actionsType';
import { TAddNewWord, TFetchWordsSuccess } from './types';

export const fetchWordsSuccessAction = (
  payload: Array<TFetchWords>
): TFetchWordsSuccess => ({
  type: WordsActionsType.fetchWordsSuccess,
  payload,
});

export const addNewWordAction = (payload: {
  categoryIndex: number;
  words: Array<TAddNewWord>;
}): TAddNewWord => ({
  type: WordsActionsType.addNewWord,
  payload,
});
