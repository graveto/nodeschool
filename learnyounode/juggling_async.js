var http = require('http');
var bl = require('bl');

var urlOne = process.argv[2];
var urlTwo = process.argv[3];
var urlThree = process.argv[4];

var stringOne = "";
var stringTwo = "";
var stringThree = "";

var doneOne = false;
var doneTwo = false;
var doneThree = false;

http.get(urlOne, function(response) {
  response.pipe(bl(function(err, data) {
    if(err) {
      return console.error(err);
    }else {
      doneOne = true;
      stringOne = data.toString();
    }
  }));
});

http.get(urlTwo, function(response) {
  response.pipe(bl(function(err, data) {
    if(err) {
      return console.error(err);
    }else {
      doneTwo = true;
      stringTwo = data.toString();
    }
  }));
});

http.get(urlThree, function(response) {
  response.pipe(bl(function(err, data) {
    if(err) {
      return console.error(err);
    }else {
      doneThree = true;
      stringThree = data.toString();
    }
  }));
});

var intervalId = setInterval(function() {
  if(doneOne && doneTwo && doneThree) {
    console.log(stringOne);
    console.log(stringTwo);
    console.log(stringThree);
    if(intervalId){
      clearInterval(intervalId);
    }
  }
}, 500);




