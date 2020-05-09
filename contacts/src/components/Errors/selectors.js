import { createSelector } from 'reselect'

const selectErrors = state => state.errors || {};

export const selectSignupError = createSelector(
  selectErrors,
  ({ signup = '' }) => signup
);

export const selectSigninError = createSelector(
  selectErrors,
  ({ signin = '' }) => signin
);
