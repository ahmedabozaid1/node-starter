const jwt = require('jsonwebtoken');

module.exports = async function authorize(req, res, next) {
  const apiToken = req.headers.authorization;
  const token = apiToken && apiToken.split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(401);
      req.jwt = token;
      req.user = user.user;
      return next();
    });
  } else res.status(401).json({ message: 'unauthenticated' });
};