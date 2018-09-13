const fs = require('fs');
const FILENAME = './file.md';
fs.readFile(FILENAME, (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink(FILENAME, (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
  });
});
