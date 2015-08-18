var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);

http.createServer(function(req, res) {
  var src = fs.createReadStream(process.argv[3]);
  src.pipe(res);
}).listen(port);
