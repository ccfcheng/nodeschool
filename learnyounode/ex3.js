const fs = require('fs');

const file = process.argv[2];

const str = fs.readFileSync(file).toString();

console.log(str.split('\n').length - 1);
