var map = require('through2-map');
var http = require('http');
var fs = require('fs');


http.createServer(function(res, req) {
  var instream;
  console.log(req);
    // instream = fs.createReadStream(req);
    // instream.pipe(map(function(chunk) {
    //   return chunk.toString().toUpperCase();
    // })).pipe(res);
}).listen(process.argv[2], function(){
  console.log(process.argv[2]);
});
