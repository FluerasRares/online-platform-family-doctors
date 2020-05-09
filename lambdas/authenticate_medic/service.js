const axios = require('axios');

const CMR_BASE_URL = `https://regmed.cmr.ro/api/v1/public`;

const authenticate = async ({ cip = '' }) => {
  const url = `/cautare/${cip}`;
  if (!cip) throw new Error('lipseste CIP-ul');
  const { data = {} } = await axios.request({ baseURL: CMR_BASE_URL, url });
  const { results = [] } = data;
  if(results.length) {
    return results[0];
  } else {
    throw new Error('CIP invalid')
  }
}

module.exports = { authenticate };
