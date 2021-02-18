// @ts-nocheck
import { put, PutEffect, select } from 'redux-saga/effects';

// services
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';

// store
import {fetchWordsSuccessAction} from './actions';

export function* addNewWord(data): Generator<PutEffect<any>> {
  try {
    yield getRefDatabase(path).set('');
  } catch (error) {
    //yield put(addNotification(error, 'Add new endpoint', EFeedbackTypes.ERROR));
  }
}
