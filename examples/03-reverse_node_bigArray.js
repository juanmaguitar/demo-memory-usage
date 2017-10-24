let arr = Array(1e6).fill("some string");
//let arr = Array(1e8).fill("some string");
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used.toFixed(2)} MB`);