var prompt = require("prompt-sync")({ sigint: true });
var fs = require('fs');
const path = require('path');
var crypto = require('crypto');
var os = require("os");

let arraynumber = 1
let filetoadd2 = 0

const filetoadd = prompt("Enter path/name of file/folder to be added: ");

// Set delay to ms
function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

const test1 =  fs.readdir(filetoadd, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  const fileNamesAndExtensions = files.map((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    const extension = path.extname(filePath);
    const name = path.basename(filePath, extension);
    return { filePath, extension };
  });

  console.log(fileNamesAndExtensions);
});
console.log(test1)
loop1()
function loop1() {
  while (true) {
    filetoadd2 = fileNamesAndExtensions[arraynumber]
    let buff = fs.readFileSync(filetoadd2);
    let outputdata0 = crypto.createHash("md5").update(buff).digest("hex");
    let outputdata = outputdata0.toString().toUpperCase();

    let text = outputdata;
    processInput()

    //const directoryPath = '/path/to/directory'; // Replace with your directory path

    function processInput() {
      fs.open('customdb.txt', 'a', 666, function (e, id) {
        fs.write(id, text + os.EOL, null, 'utf8', function () {
          fs.close(id, function () {
            arraynumber = arraynumber + 1
            //console.log('Custom database is updated, check the dbcreator.txt file');
            //console.log('If the file is a virus, please submit the hash here:');
            //console.log('\x1b[32m%s\x1b[0m', "boof.eu.org/other/av-hashes")
          });
        });
      });
    }
  }
}
