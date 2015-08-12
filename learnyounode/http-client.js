var http = require("http");

var providedUrl = process.argv[2];

http.get(providedUrl, function(response) {
  response.setEncoding("utf8");
  response.on("data", function(data) {
    console.log(data);
  });
});
