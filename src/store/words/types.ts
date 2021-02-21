// store
import { WordsActionsType } from './actionsType';

export type TWord = {
  english: string;
  polish: string;
};

export type TCategory = {
  name: string;
  words: Array<TWord>;
};

export type TWordsState = {
  categories: Array<TCategory>;
  isPending: boolean;
};

export type TFetchWordsSuccess = {
  type: typeof WordsActionsType.fetchWordsSuccess;
  payload: Array<TWord>;
};

export type TAddNewWord = {
  type: typeof WordsActionsType.addNewWord;
  payload: {
    words: Array<TWord>;
    categoryIndex: number;
  };
};

export type TAddNewCategory = {
  type: typeof WordsActionsType.addNewWord;
  payload: {
    name: string;
    words: Array<TWord>;
  };
};
