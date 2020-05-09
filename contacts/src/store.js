import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    )
  ),
);
sagaMiddleware.run(rootSaga);

export default store;
