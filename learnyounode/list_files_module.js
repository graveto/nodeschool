var fs = require('fs');
var path = require('path');

var listFiles = function(dirName, extName, callback) {
  fs.readdir(dirName, function(err, list) {
    if(err) {
      return callback(err);
    }else {
      var data = [];
      list.forEach(function(item) {
        if(path.extname(item).replace(".", "") === extName) {
          data.push(item);
        }
      });
      callback(null, data);
    }
  });
};

module.exports = listFiles;
