'use strict';
require('babel-register');

// require('./build.js');
require('./app/app.js');

const koa = require('koa');

const App = ()=> {
  let app = koa();
  return app;


}

const createApp = ()=> {
  const app = App();

  // http服务端口监听
  app.listen(3000, ()=> {
    console.log('3000 is listening!');
  });
  // require('koa-trace')(app);
  // app.debug();
  return app;
};
createApp();

