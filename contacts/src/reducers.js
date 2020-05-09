import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { users } from './components/User/reducers';
import { errors } from './components/Errors/reducers';

const appReducer = history => combineReducers({
  router: connectRouter(history),
  users,
  errors,
})

export default appReducer;
