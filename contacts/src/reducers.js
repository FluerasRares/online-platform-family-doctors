import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { users } from './components/User/reducers';
import { medics } from './components/Medics/reducers';
import { errors } from './components/Errors/reducers';

const appReducer = history => combineReducers({
  router: connectRouter(history),
  users,
  medics,
  errors,
})

export default appReducer;
