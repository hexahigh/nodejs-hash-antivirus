var prompt = require("prompt-sync")({ sigint: true });
var fs = require('fs');
var crypto = require('crypto');

// Variables
var isdetected = false;
var databasetouse2 = 0;

// Set delay to ms
function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
//Credits
console.log('\x1b[32m%s\x1b[0m', "███╗   ███╗ █████╗ ██████╗ ███████╗    ██████╗ ██╗   ██╗    ██████╗  ██████╗  ██████╗ ███████╗██████╗ ███████╗██╗   ██╗")
console.log('\x1b[32m%s\x1b[0m', "████╗ ████║██╔══██╗██╔══██╗██╔════╝    ██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔═══██╗██╔═══██╗██╔════╝██╔══██╗██╔════╝██║   ██║")
console.log('\x1b[32m%s\x1b[0m', "██╔████╔██║███████║██║  ██║█████╗      ██████╔╝ ╚████╔╝     ██████╔╝██║   ██║██║   ██║█████╗  ██║  ██║█████╗  ██║   ██║")
console.log('\x1b[32m%s\x1b[0m', "██║╚██╔╝██║██╔══██║██║  ██║██╔══╝      ██╔══██╗  ╚██╔╝      ██╔══██╗██║   ██║██║   ██║██╔══╝  ██║  ██║██╔══╝  ╚██╗ ██╔╝")
console.log('\x1b[32m%s\x1b[0m', "██║ ╚═╝ ██║██║  ██║██████╔╝███████╗    ██████╔╝   ██║       ██████╔╝╚██████╔╝╚██████╔╝██║     ██████╔╝███████╗ ╚████╔╝ ")
console.log('\x1b[32m%s\x1b[0m', "╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝    ╚═════╝    ╚═╝       ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝     ╚═════╝ ╚══════╝  ╚═══╝  ")
console.log('\x1b[36m%s\x1b[0m', "boofdev.eu.org" + " ©2023")
console.log()

//Ask user what database to use.
console.log("What database should be used?")
console.log("[1] Virus database")
const databasetouse = prompt("");
if (databasetouse == 1) {
    databasetouse2 = "db.txt"
}
if (databasetouse == 69) {
    databasetouse2 = "h-db.txt"
}

// Load database
console.log("Loading database...")
var database0 = fs.readFileSync(databasetouse2).toString().split("\n");
var database = database0.toString().toUpperCase();
console.log ("Database loaded!")
// Ask user what file they should scan
const filetoscan = prompt("Enter path of file to be scanned: ");
console.log("Obtaining hash...")
const buff = fs.readFileSync(filetoscan);
var outputdata0 = crypto.createHash("md5").update(buff).digest("hex");
var outputdata = outputdata0.toString().toUpperCase();
console.log("Hash: " + outputdata)
// Check if database contains output data
console.log("Checking if the hash matches the database...")
if (database.includes(outputdata)) {
    isdetected = true;
    console.log("The file IS a virus.");
} else {
    isdetected = false;
    console.log("The file is NOT a virus.");
}


/*async function printout() {
    await delay(100);
    if (isdetected == true) {
        console.log("")
    }
}*/