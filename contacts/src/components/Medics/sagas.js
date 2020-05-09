import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { SIGNUP } from '../SignUp/commands';

// const commands = require('./commands');
const actions = require('./actions');
const api = require('./api');

function* fetchMedicsSaga({ payload }) {
  try {
    const response = yield call(api.fetchAll);
    if (response.error) {
      yield put(actions.fetchAllFail(response.error));
    } else {
      yield put(actions.fetchAllSuccess(response));
    }
  } catch (err) {
    yield put(actions.fetchAllFail(err.message));
  }
}

export default function* saga() {
  yield takeLatest(SIGNUP, fetchMedicsSaga);
}
