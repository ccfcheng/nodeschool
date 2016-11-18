const moduleFunc = require('./ex5');
const path = require('path');

const dir = process.argv[2];
const criteria = process.argv[3];
const cb = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.forEach(name => console.log(name));
  }
};

moduleFunc(dir, criteria, cb);
