const validateToken = require('../../auth/validateToken');

const checkAuth = (req, res, next) => {
  const { authorization: token } = req.headers;

  const payload = validateToken(token);

  if (!token) return res.status(401).json({ message: 'missing auth token' });
  
  if (!payload) return res.status(401).json({ message: 'jwt malformed' });
  next();
};

module.exports = checkAuth;