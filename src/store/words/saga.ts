// @ts-nocheck
import { PutEffect } from 'redux-saga/effects';

// services
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';

export function* addNewWord(data): Generator<PutEffect<any>> {
  const { categoryIndex, words } = data.payload;

  try {
    yield getRefDatabase(['categories', categoryIndex, 'words']).set(words);
  } catch (error) {}
}
