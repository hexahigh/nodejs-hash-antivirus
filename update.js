import promptSync from 'prompt-sync';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';


const prompt = promptSync({ sigint: true });

console.log("This will update the database.")
console.log("Do you wish to proceed? Y/N")
const useragree = prompt("");
if (useragree == "Y") {
    console.log("Deleting old files")
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
    console.log("Exiting")
}