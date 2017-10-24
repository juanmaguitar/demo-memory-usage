const fs = require('fs')
const logMemory = require('./utils/logMemory')

if (process.argv.length !== 4)
  throw new Error('not enough arguments')

const [from, to] = process.argv.slice(2)

if (from === to)
  throw new Error('origin and target files cannot be the same')

var readableStream = fs.createReadStream(from);
var writableStream = fs.createWriteStream(to);
let chunks = 0

logMemory.start()

readableStream.on('data', function(chunk) {
  console.log(++chunks)
  writableStream.write(chunk);
  logMemory.end()
  logMemory.start()
});

readableStream.on('end', function() {
  logMemory.end()
});