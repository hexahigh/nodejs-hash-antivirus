var prompt = require("prompt-sync")({ sigint: true });
var fs = require('fs');
var crypto = require('crypto');
var os = require("os");

// Set delay to ms
function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
const filetoadd = prompt("Enter path/name of file to be added: ");
const buff = fs.readFileSync(filetoadd);
var outputdata0 = crypto.createHash("md5").update(buff).digest("hex");
var outputdata = outputdata0.toString().toUpperCase();

var text = outputdata;
processInput()

function processInput () {     
  fs.open('customdb.txt', 'a', 666, function( e, id ) {
   fs.write( id, text + os.EOL, null, 'utf8', function(){
    fs.close(id, function(){
     console.log('Custom database is updated, check the dbcreator.txt file');
     console.log('If the file is a virus, please submit the hash here:');
     console.log('\x1b[32m%s\x1b[0m', "boof.eu.org/other/av-hashes")
    });
   });
  });
 }