import { fork } from 'redux-saga/effects';
import SignUpSaga from './components/SignUp/sagas';
import MedicsSaga from './components/Medics/sagas';

export default function* sagas() {
    yield fork(SignUpSaga);
    yield fork(MedicsSaga);
};
