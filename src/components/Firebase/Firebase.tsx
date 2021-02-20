// @ts-nocheck
import { FunctionComponent, useEffect } from 'react';
import firebase from 'firebase';

// components
import { enhanceFirebase } from './enhanceFirebase';

// others
import { config } from './constants';
import { TWord } from '../../store/words/types';

// services
import databaseHandler from './services/databaseHandler';

export type TInnerProps = {
  fetchWordsSuccess: (payload: Array<TGroupedEndpoint>) => void;
};

const Firebase: FunctionComponent<TInnerProps> = ({ fetchWordsSuccess }) => {
  const actions = (payload: Array<TWord>): void => {
    fetchWordsSuccess(payload);
  };

  useEffect(() => {
    firebase.initializeApp(config);
    databaseHandler(firebase, actions);
    // eslint-disable-next-line
  }, []);

  return null;
};

export default enhanceFirebase(Firebase);
