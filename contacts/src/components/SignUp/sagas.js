import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

const commands = require('./commands');
const actions = require('./actions');
const api = require('./api');

function* signupSaga({ payload }) {
  const { cip } = payload;
  try {
    const response = yield call(api.authenticate, { cip });
    if (response.error) {
      yield put(actions.signupFail(response.error));
    } else {
      yield put(actions.signupSuccess(response));
      yield put(push('/myprofile'));
    }
  } catch (err) {
    yield put(actions.signupFail(err.message));
  }
}

export default function* saga() {
  yield takeLatest(commands.SIGNUP, signupSaga);
}
