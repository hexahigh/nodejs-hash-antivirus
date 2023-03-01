var prompt = require("prompt-sync")({ sigint: true });
var fs = require('fs');
const path = require('path');
var crypto = require('crypto');
var os = require("os");

let arraynumber = 1

// Set delay to ms
function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

fs.readdir(filetoadd, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  const fileNamesAndExtensions = files.map((fileName) => {
    const extension = path.extname(fileName);
    const name = path.basename(fileName, extension);
    return { name, extension };
  });

  console.log(fileNamesAndExtensions);
});

const filetoadd = prompt("Enter path/name of file/folder to be added: ");
while(true) {
const buff = fs.readFileSync(filetoadd2);
var outputdata0 = crypto.createHash("md5").update(buff).digest("hex");
var outputdata = outputdata0.toString().toUpperCase();

var text = outputdata;
processInput()

//const directoryPath = '/path/to/directory'; // Replace with your directory path

function processInput () {     
  fs.open('dbcreator.txt', 'a', 666, function( e, id ) {
   fs.write( id, text + os.EOL, null, 'utf8', function(){
    fs.close(id, function(){
      let filetoadd2 = fileNamesAndExtensions[arraynumber]
      arraynumber = arraynumber + 1
     console.log('Custom database is updated, check the dbcreator.txt file');
     console.log('If the file is a virus, please submit the hash here:');
     console.log('\x1b[32m%s\x1b[0m', "boof.eu.org/other/av-hashes")
    });
   });
  });
 }
}
