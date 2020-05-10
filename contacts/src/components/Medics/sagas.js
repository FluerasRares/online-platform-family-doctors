import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { SIGNUP } from '../SignUp/commands';
import { SEND_FILE } from './commands';

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

function* sendFileSaga({ payload }) {
  try {
    const uploadResponse = yield call(api.uploadFile, payload);
    if (uploadResponse.error) yield put(uploadResponse.error);
    else {
      // yield put(actions.uploadFileSuccess(uploadResponse));
    }
  } catch (err) {
    // yield put(actions.uploadFileFail(err.message));
  }
}

export default function* saga() {
  yield takeLatest(SIGNUP, fetchMedicsSaga);
  yield takeLatest(SEND_FILE, sendFileSaga);
}
