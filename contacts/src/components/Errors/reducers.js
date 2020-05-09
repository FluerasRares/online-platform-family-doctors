import { SIGNUP_FAIL, SIGNIN_FAIL } from '../User/commands'
import { CLEAR_ERROR } from './commands'

const initialState = {};

const errors = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_FAIL:
      return { ...state, signup: payload };
    case SIGNIN_FAIL:
      return { ...state, signin: payload };
    case CLEAR_ERROR:
      return { ...state, [payload]: undefined };
    default:
      return state;
  }
}

export { errors };