const fs = require('fs')
const logMemory = require('./utils/logMemory')

const [from, to] = process.argv.slice(2)
const highWaterMark = 1024 * 1024  // size Chunk → 1MB

var readableStream = fs.createReadStream(from, { highWaterMark });
var writableStream = fs.createWriteStream(to);
let chunks = 0

logMemory.start()

readableStream.on('data', function(chunk) {
  console.log(`⛏  CHUNK ${++chunks}`)
  writableStream.write(chunk);
  logMemory.end()
  logMemory.start()
});

readableStream.on('end', function() {
  logMemory.end()
  console.log(`copied file ${from} to ${to}`)
});