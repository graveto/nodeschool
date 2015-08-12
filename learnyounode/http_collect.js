var http = require('http');
var bl = require('bl');

var providedUrl = process.argv[2];

http.get(providedUrl, function(response) {
  response.pipe(bl(function(err, data) {
    if(err) {
      return console.error(err);
    }else {
      console.log(data.toString().length);
      console.log(data.toString());
    }
  }));
});
