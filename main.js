//var prompt = require("prompt-sync")({ sigint: true });
//var fs = require('fs');
//var crypto = require('crypto');

import promptSync from 'prompt-sync';
import {AXlog, newSession, AXlogColor} from './log.js';
import * as fs from 'fs';
import * as crypto from 'crypto';


const prompt = promptSync({ sigint: true });

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
AXlogColor('\x1b[32m%s\x1b[0m', "███╗   ███╗ █████╗ ██████╗ ███████╗    ██████╗ ██╗   ██╗    ██████╗  ██████╗  ██████╗ ███████╗██████╗ ███████╗██╗   ██╗")
AXlogColor('\x1b[32m%s\x1b[0m', "████╗ ████║██╔══██╗██╔══██╗██╔════╝    ██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔═══██╗██╔═══██╗██╔════╝██╔══██╗██╔════╝██║   ██║")
AXlogColor('\x1b[32m%s\x1b[0m', "██╔████╔██║███████║██║  ██║█████╗      ██████╔╝ ╚████╔╝     ██████╔╝██║   ██║██║   ██║█████╗  ██║  ██║█████╗  ██║   ██║")
AXlogColor('\x1b[32m%s\x1b[0m', "██║╚██╔╝██║██╔══██║██║  ██║██╔══╝      ██╔══██╗  ╚██╔╝      ██╔══██╗██║   ██║██║   ██║██╔══╝  ██║  ██║██╔══╝  ╚██╗ ██╔╝")
AXlogColor('\x1b[32m%s\x1b[0m', "██║ ╚═╝ ██║██║  ██║██████╔╝███████╗    ██████╔╝   ██║       ██████╔╝╚██████╔╝╚██████╔╝██║     ██████╔╝███████╗ ╚████╔╝ ")
AXlogColor('\x1b[32m%s\x1b[0m', "╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝    ╚═════╝    ╚═╝       ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝     ╚═════╝ ╚══════╝  ╚═══╝  ")
AXlogColor('\x1b[36m%s\x1b[0m', "boofdev.eu.org" + " ©2023")
AXlog()

newSession();

//Ask user what database to use.
AXlog("What database should be used?")
AXlog("[1] Virus database")
const databasetouse = prompt("");
if (databasetouse == 1) {
    databasetouse2 = "db.txt"
}
if (databasetouse == 69) {
    databasetouse2 = "h-db.txt"
}

// Load database
AXlog("Loading database...")
var database0 = fs.readFileSync(databasetouse2).toString().split("\n");
var database = database0.toString().toUpperCase();
AXlog ("Database loaded!")
// Ask user what file they should scan
const filetoscan = prompt("Enter path of file to be scanned: ");
AXlog("Obtaining hash...")
const buff = fs.readFileSync(filetoscan);
var outputdata0 = crypto.createHash("md5").update(buff).digest("hex");
var outputdata = outputdata0.toString().toUpperCase();
AXlog("Hash: " + outputdata)
// Check if database contains output data
AXlog("Checking if the hash matches the database...")
if (database.includes(outputdata)) {
    isdetected = true;
    AXlog("The file IS a virus.");
} else {
    isdetected = false;
    AXlog("The file is NOT a virus.");
}


/*async function printout() {
    await delay(100);
    if (isdetected == true) {
        AXlog("")
    }
}*/