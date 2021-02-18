// @ts-nocheck
import { SagaMiddleware } from 'redux-saga';

// store
import { watchGroupedEndpoints } from './words/watch';

const watches = [watchGroupedEndpoints];

const sagaMiddlewareRuns = (sagaMiddleware: SagaMiddleware): void => {
  for (const watch of watches) sagaMiddleware.run(watch);
};

export default sagaMiddlewareRuns;
