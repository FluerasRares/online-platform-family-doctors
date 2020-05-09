import { fork } from 'redux-saga/effects';
import SignUpSaga from './components/SignUp/sagas';

export default function* sagas() {
    yield fork(SignUpSaga);
};
