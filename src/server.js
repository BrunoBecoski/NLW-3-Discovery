// import dependency
const express = require('express');
const path = require('path');
const pages = require('./pages');

// starting the express
const server = express();

// using static files
server
  .use(express.static('public'))

  // configure template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  // application routes
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage);

// turn on the server
server.listen(5500);

console.log('🚀 Server Start!');