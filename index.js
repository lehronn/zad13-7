var fs = require('fs');
var list;

fs.readdir ('./', (err, files) => {
  for (var i = 0; i < files.length ; i++ ) {
    // list = files[i] + '/n';
    fs.appendFile('./dirList.log', files[i] + '\n', function (err) {
    if (err) throw err;
    });
  };
});
