// store
import { WordsActionsType } from './actionsType';

export type TWord = {
  english: string;
  polish: string;
  pronunciation?: string;
}

export type TWordsState = {
  data: Array<TWord>;
};

export type TFetchWordsSuccess = {
  type: typeof WordsActionsType.fetchWordsSuccess;
  payload: Array<TWord>;
};
