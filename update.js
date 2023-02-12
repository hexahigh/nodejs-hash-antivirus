var prompt = require("prompt-sync")({ sigint: true });
var fs = require('fs');
const http = require('http');
const https = require('https');

console.log("This will update the database.")
console.log("Do you wish to proceed? Y/N")
const useragree = prompt("");
if (useragree == "Y") {
    console.log("Deleting old files")
    fs.unlinkSync("h-db.txt")
    fs.unlinkSync("db.txt")
    console.log("Downloading new files")
    //download first database
    const db69 = fs.createWriteStream("h-db.txt");
    const request = https.get("https://hexahigh.github.io/cdn/Text/h-db.txt", function(response) {
        response.pipe(db69);

        // after download completed close filestream
        db69.on("finish", () => {
            db69.close();
        });
    });
    const dbmain = fs.createWriteStream("db.txt");
    const request2 = https.get("https://hexahigh.github.io/cdn/Text/db.txt", function(response) {
        response.pipe(dbmain);

        // after download completed close filestream
        dbmain.on("finish", () => {
            dbmain.close();
        });
    });
} else {
    exit()
}