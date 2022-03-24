import './db';
import './models/User';
import rootRouter from './router/rootRouter';

const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    //1. prepare to go to Next framework
    const server = express();

    server.use(express.json());

    server.use('/', rootRouter);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`✅ Server listening on ${PORT}!! 🔥`);
    });
  })
  .catch((exception) => {
    console.error(exception.stack);
    process.exit(1);
  });
