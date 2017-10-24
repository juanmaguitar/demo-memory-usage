module.exports = (function() {
  let initialMemory;
  return {
    start: () => {
      const used = process.memoryUsage().rss/1024/1024
      initialMemory = Math.round(used * 100) / 100
      console.log (`Starting process...`)
    },
    end: () => {
      const used = process.memoryUsage().rss/1024/1024
      const finalMemory = Math.round(used * 100) / 100
      const totalUsedMemory = (finalMemory - initialMemory).toFixed(2)
      console.log (`Memory used → ${totalUsedMemory}  MB`)
    }
  }
})()