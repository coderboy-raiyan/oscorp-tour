const express = require('express');
const http = require('http');
const app = express();
const { readTheFile } = require('./utils/readAndWriteFile');
const morgan = require('morgan');
const routes = require('./routes/root');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: ['http://localhost:3000'] }));

// ROUTES
app.use(routes);

async function startApp() {
  await readTheFile(`./${__dirname}/dev-data/data/tours.json`);
  server.listen(PORT, () => {
    console.log('Listening...');
  });
}

startApp();
