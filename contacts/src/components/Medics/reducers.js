import {
  FETCH_ALL_SUCCESS,
} from './commands';

const initialState = {};

const medics = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_SUCCESS:
      return { ...state, all: payload };
    default:
      return state;
  }
}

export { medics };