var fs = require('fs');
// console.log(fs);
var readFile = function(fileName) {
  fs.readFile(fileName, 'utf-8',function(err, data) {
    console.log(err,data);
  });
};

readFile('file.txt');