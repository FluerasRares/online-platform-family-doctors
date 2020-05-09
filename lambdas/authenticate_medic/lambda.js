const { success, failure } = require('./responder');
const { parse, decipher } = require('./receiver');
const { authenticate } = require('./service');

exports.handler = async event => {
  try {
    const { headers: { authorization = '' }, data = {} } = parse(event);
    const { cip = '' } = data;
    const { nume, prenume, judet, specialitati } = await authenticate({ cip });
    return success({ nume, prenume, judet, specialitati });
  } catch (err) {
    console.log(err);
    return failure(err);
  }
}
