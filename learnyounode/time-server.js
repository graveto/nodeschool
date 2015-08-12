var net = require('net');
var port = Number(process.argv[2]);



var server = net.createServer(function(socket){
  var date = new Date();
  var month;
  var day;
  var hour;
  var minute;

  if(date.getMonth() < 9){
    month = "0" + (date.getMonth() + 1);
  }else {
    month = date.getMonth +1;
  }

  if(date.getDate() < 10) {
    day = "0" + date.getDate();
  }else {
    day = date.getDate();
  }

  if(date.getHours() < 10){
    hour = "0" + date.getHours();
  }else {
    hour = date.getHours();
  }

  if(date.getMinutes() < 10) {
    minute = "0" + date.getMinutes();
  }else {
    minute = date.getMinutes();
  }

  var formattedDate = date.getFullYear() +
                      "-" +
                      month +
                      "-" +
                      day +
                      " " +
                      hour +
                      ":" +
                      minute

  socket.write(formattedDate + "\n");
  socket.end();
});


server.listen(port);
