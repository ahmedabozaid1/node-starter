const route = require('./helpers/MainRouter');
const authRouter = require('./routes/auth');

module.exports = (app) => {

  route(
    app,
    '/auth',
    authRouter,
  );
};