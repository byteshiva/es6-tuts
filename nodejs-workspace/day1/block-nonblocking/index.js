const fs = require('fs');
console.log("start");
const data = fs.readFileSync('./file.md'); // blocks here until file is read

console.log(data);
console.log("end");
