const fs = require('fs');
const path = require('path');

module.exports = (dir, criteria, cb) => {
  const extension = '.' + criteria;
  fs.readdir(dir, (err, files) => {
    if (err) {
      cb(err);
    } else {
      const filtered = files.filter(name => path.extname(name) === extension);
      cb(null, filtered);
    }
  });
};
