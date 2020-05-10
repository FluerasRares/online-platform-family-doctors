import axios from 'axios';
const { medic, files } = require('../../apicfg.json');

export const fetchAll = async () => {
  const { data: response } = await axios.request({ baseURL: medic.baseURL, ...medic.fetchAll });
  return response;
  // return response.slice(0, 10);
  // return [{ id: 1, name: 'Ion Ionescu', specialitate: 'chirurg' }, { id: 2, name: 'Mihai Vasilescu', specialitate: 'ortoped' }];
}

export const uploadFile = async content => {
  const { data: response } = await axios.request({ baseURL: files.baseURL, ...files.upload });
  return response;
}
