import { SIGNUP_FAIL } from '../SignUp/commands'

const initialState = {};

const errors = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_FAIL:
      return { ...state, signup: payload };
    default:
      return state;
  }
}

export { errors };