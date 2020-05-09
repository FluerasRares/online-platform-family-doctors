import axios from 'axios';
const { medic } = require('../../apicfg.json');

export const fetchAll = async () => {
  const { data: response } = await axios.request({ baseURL: medic.baseURL, ...medic.fetchAll });
<<<<<<< HEAD
  // return response.slice(0, 10);
  return [{ id: 1, name: 'Ion Ionescu', specialitate: 'chirurg' }, { id: 2, name: 'Mihai Vasilescu', specialitate: 'ortoped' }];
=======
  return response;
  // return response.slice(0, 10);
  // return [{ id: 1, name: 'Ion Ionescu', specialitate: 'chirurg' }, { id: 2, name: 'Mihai Vasilescu', specialitate: 'ortoped' }];
>>>>>>> cb985484ebd17c9ba862c460607d827bcb469a95
}
