const http = require('http');
const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mainRouter = require('./routes');
const {DBClient} = require('./DBClient');
const { PrismaClient } = require('@prisma/client');

app.use(cors({ origin: '*' }));
DBClient.initialize(new PrismaClient({ log: ['query', 'info', 'warn', 'error'] }));
app.use(bodyParser.urlencoded({
  extended: 'true',
})); 
app.use(express.json()); 

app.use(bodyParser.json({
  type: 'application/vnd.api+json',
})); 

mainRouter(app);
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

