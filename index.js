var fs = require('fs');

fs.readdir ('./', (err, files) => {
  files.forEach(file => {
    fs.writeFile('./dirList.log', files, function (err) {
      if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    });
  });
});

