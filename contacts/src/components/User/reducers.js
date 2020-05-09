import {
  SIGNUP_SUCCESS,
} from '../SignUp/commands';

const initialState = {};

const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS:
      return { ...state, current: payload };
    default:
      return state;
  }
}

export { users };