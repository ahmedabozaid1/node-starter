module.exports = (app, url, route, middlewares = []) => {
  middlewares.forEach((middleware) => {
    app.use(url, middleware);
  });
  app.use(url, route);
};
