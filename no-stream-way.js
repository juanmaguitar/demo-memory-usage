const fs = require('fs')
const logMemory = require('./utils/logMemory')

const [from, to] = process.argv.slice(2)

logMemory.start()
const content = fs.readFileSync(from)
fs.writeFileSync(to, content)
console.log(`copied file ${from} to ${to}`)
logMemory.end()