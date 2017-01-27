'use strict';

const port    = process.env.PORT || 3000;
const Koa     = require('koa');
const serve   = require('koa-static');
const convert = require('koa-convert');
const router  = require('koa-router');
const logger  = require('koa-logger');
const app     = new Koa();
const _use    = app.use;
const data    = require('./data');

app.use(logger());

app.use = (x) => _use.call(app, convert(x));
app.use(serve('./build'));

const server = app.listen(port, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});

/**
 * REST
 */

app.use(router.get('/data/', books.all));
app.use(route.get('/view/books/', books.list));
