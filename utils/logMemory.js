module.exports = (function() {
  let initialMemory;
  return {
    start: () => {
      // Resident set size: Memory assigned to the process in bytes
      initialMemory = process.memoryUsage().rss/1024/1024
      console.log('-'.repeat(30));
      console.log (`🔥  Start logging memory...`)
    },
    end: () => {
      // Resident set size: Memory assigned to the process in bytes
      const finalMemory = process.memoryUsage().rss/1024/1024
      const totalUsedMemory = (finalMemory - initialMemory).toFixed(2)
      console.log (`💻  Memory used → ${totalUsedMemory}  MB`)
    }
  }
})()