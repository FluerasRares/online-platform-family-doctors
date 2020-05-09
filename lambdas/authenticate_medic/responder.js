// const success = result => ({
//   isBase64Encoded: false,
//   statusCode: 200,
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*', // Required for CORS support to work
//     'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS 
//   },
//   'multiValueHeaders': {
//     'Content-Type': ['application/json'],
//     'Access-Control-Allow-Origin': ['*'],
//     'Access-Control-Allow-Credentials': [true]
//   },
//   body: { ...result },
// });

const success = result => result;
const failure = ({ message }) => ({ error: message });

module.exports = { success, failure }

