var listFiles = require('./list_files_module');

function displayFiles(err, data) {
  if(err) {
    console.log(err);
  }else {
    data.forEach(function(item){
      console.log(item);
    });
  }
}

listFiles(process.argv[2], process.argv[3], displayFiles);
