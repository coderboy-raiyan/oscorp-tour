const express = require('express');
const http = require('http');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

let tours = [];

function readTheTours() {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(
      path.join(__dirname, 'dev-data', 'data', 'tours.json')
    );

    readStream.on('data', (chunk) => {
      tours.push(chunk.toLocaleString());
    });

    readStream.on('end', () => {
      tours = JSON.parse(tours);
      resolve(tours);
    });
    readStream.on('error', (err) => {
      reject(err);
    });
  });
}

app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', result: tours.length, data: { tours } });
});

async function startApp() {
  await readTheTours();
  server.listen(PORT, () => {
    console.log('Listening...');
  });
}

startApp();
