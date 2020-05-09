import axios from 'axios';
const { user } = require('../../apicfg.json');

export const authenticate = async ({ cip }) => {
  const data = { cip };
  const { data: response } = await axios.request({ baseURL: user.baseURL, ...user.authenticate, data });
  return response;
}
