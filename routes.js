const route = require('./helpers/MainRouter');
const authRouter = require('./routes/auth');
const authMiddleware = require('./middlewares/auth');
module.exports = (app) => {

  route(
    app,
    '/auth',
    authRouter,
  );
  /*
    route(
      app,
      '/user',
      userRouter,
      [middleware]
    )
  */
};