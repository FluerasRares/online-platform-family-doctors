import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { users } from './components/User/reducers';

const appReducer = history => combineReducers({
  router: connectRouter(history),
  users,
})

export default appReducer;
