// @ts-nocheck
import { PutEffect } from 'redux-saga/effects';

// services
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';

export function* addNewWord(data): Generator<PutEffect<any>> {
  try {
    yield getRefDatabase(['words']).set(data.payload);
  } catch (error) {
    //yield put(addNotification(error, 'Add new endpoint', EFeedbackTypes.ERROR));
  }
}
