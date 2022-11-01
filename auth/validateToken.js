const jwt = require('jsonwebtoken');

const secret = 'segredo!';

const validateToken = (token) => {
  const check = jwt.decode(token, secret);
  return check;
};

module.exports = validateToken;