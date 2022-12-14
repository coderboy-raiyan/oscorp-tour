const path = require('path');
const fs = require('fs');

let data = [];

function readTheFile(pathName) {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(path.join(pathName));

    readStream.on('data', (chunk) => {
      data.push(chunk.toLocaleString());
    });

    readStream.on('end', () => {
      data = JSON.parse(data);
      resolve(data);
    });
    readStream.on('error', (err) => {
      reject(err);
    });
  });
}

module.exports = { readTheFile };
