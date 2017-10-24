const fs = require('fs')
const logMemory = require('./utils/logMemory')

if (process.argv.length !== 4)
  throw new Error('not enough arguments')

const [from, to] = process.argv.slice(2)

if (from === to)
  throw new Error('origin and target files cannot be the same')

logMemory.start()
const content = fs.readFileSync(from)
fs.writeFileSync(to, content)
console.log(`copied file ${from} to ${to}`)
logMemory.end()