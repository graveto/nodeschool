var fs = require('fs');

var text = fs.readFileSync(process.argv[2]).toString();
console.log(text);
var lines = text.split("\n");

console.log(lines.length-1);

