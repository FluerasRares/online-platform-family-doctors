import axios from 'axios';
const { medic } = require('../../apicfg.json');

export const fetchAll = async () => {
  // const { data: response } = await axios.request({ baseURL: medic.baseURL, ...medic.fetchAll });
  // return response;
  return [{ id: 1, name: 'Ion Ionescu', specialitate: 'chirurg' }, { id: 2, name: 'Mihai Vasilescu', specialitate: 'ortoped' }];
}
