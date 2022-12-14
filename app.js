const express = require('express');
const http = require('http');
const app = express();
const { readTheFile } = require('./utils/readAndWriteFile');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

let tours;

app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', result: tours.length, data: { tours } });
});

async function startApp() {
  tours = await readTheFile(`./${__dirname}/dev-data/data/tours.json`);
  server.listen(PORT, () => {
    console.log('Listening...');
  });
}

startApp();
