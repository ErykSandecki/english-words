// others
import { EDatabaseColumns as DataBaseColumns } from '../constants';

// services
import databaseErrorHandler from './databaseErrorHandler';
import databaseSuccessHandler from './databaseSuccessHandler';

const databaseHandler = (
  firebase: any,
  actions: (data: any) => void,
  ref: DataBaseColumns = DataBaseColumns.words
) => {
  firebase
    .database()
    .ref(ref)
    .on(
      'value',
      (response: void) => databaseSuccessHandler(response, actions),
      databaseErrorHandler
    );
};

export default databaseHandler;
