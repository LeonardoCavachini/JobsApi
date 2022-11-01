const jwt = require('jsonwebtoken');

const secret = 'segredo!'; ///esar dotenv

const headers = {
  algorithm: 'HS256',
  expiresIn: '1d'
}
const createToken = (payload) => {
  const token = jwt.sign(payload, secret, headers)

  return token
};

module.exports = createToken;
