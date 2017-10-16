var fs = require('fs');

fs.readdir ('./', (err, files) => {
  for (var i = 0; i < files.length ; i++ ) {
    fs.appendFile('./dirList.log', files[i] + '\n', function (err) {
    if (err) throw err;
    });
  };
});
