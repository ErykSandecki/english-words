import { all, AllEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

// store
import { addNewCategory, addNewWord } from './saga';
import { WordsActionsType } from './actionsType';
import { TWord } from './types';

export function* watchGroupedEndpoints(): Generator<
  AllEffect<ForkEffect<TWord>>
> {
  yield all([
    takeEvery(WordsActionsType.addNewWord, addNewWord),
    takeEvery(WordsActionsType.addNewCategory, addNewCategory),
  ]);
}
