import { createSelector } from 'reselect'

const selectMedics = state => state.medics || {};

export const selectAllMedics = createSelector(
  selectMedics,
  ({ all }) => all
);
