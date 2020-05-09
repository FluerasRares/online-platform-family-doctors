import {
  SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL,
}
  from './commands';

export const signup = payload => ({ type: SIGNUP, payload });
export const signupSuccess = payload => ({ type: SIGNUP_SUCCESS, payload });
export const signupFail = payload => ({ type: SIGNUP_FAIL, payload });
