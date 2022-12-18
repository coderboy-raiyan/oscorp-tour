const express = require('express');
const http = require('http');

const app = express();
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
const { readTheFile } = require('./utils/readAndWriteFile');
const routes = require('./routes/root');
const connectDb = require('./config/db');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

connectDb();

// MIDDLEWARES
colors.enable();
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
