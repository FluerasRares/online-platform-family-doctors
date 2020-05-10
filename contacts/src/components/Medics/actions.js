import {
  FETCH_ALL, FETCH_ALL_SUCCESS, FETCH_ALL_FAIL,
  SEND_FILE,
}
  from './commands';

export const fetchAll = payload => ({ type: FETCH_ALL, payload });
export const fetchAllSuccess = payload => ({ type: FETCH_ALL_SUCCESS, payload });
export const fetchAllFail = payload => ({ type: FETCH_ALL_FAIL, payload });

export const sendFile = payload => ({ type: SEND_FILE, payload });
