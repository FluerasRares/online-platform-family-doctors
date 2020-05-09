const parse = ({ statusCode, headers, method, path, data, params: { query = '{}' } = {} }) => ({
    statusCode,
    headers: JSON.parse(headers),
    method,
    path,
    data: JSON.parse(data),
    query: JSON.parse(query),
  }
);

const decipher = token => {
  return { tenantId: 'all', appId: 'jokes', accountId: 'ovi' };
}

module.exports = { parse, decipher };
