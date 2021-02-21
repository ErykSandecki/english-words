// @ts-nocheck
import { PutEffect, select } from 'redux-saga/effects';

// services
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';
import { getCategories } from './selectors';

export function* addNewWord(data): Generator<PutEffect<any>> {
  const { categoryIndex, words } = data.payload;

  try {
    yield getRefDatabase(['categories', categoryIndex, 'words']).set(words);
  } catch (error) {}
}

export function* addNewCategory(data): Generator<PutEffect<any>> {
  const { name, words } = data.payload;
  const categories = [...(yield select(getCategories))];

  try {
    yield getRefDatabase(['categories']).set([...categories, { name, words }]);
  } catch (error) {}
}
