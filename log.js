import exp from 'constants';
import * as fs from 'fs';

var currentTime = "nAn";

export function newSession() {
    getTime();
    fs.appendFileSync('log.txt', '\r\n')
    fs.appendFileSync('log.txt', "New session started at: " + currentTime + '\r\n')
    fs.appendFileSync('log.txt', '\r\n')
}

export function AXlog(msg) {
    getTime();
    console.log(msg)
    fs.appendFileSync('log.txt', "[" + currentTime + "] " + msg + '\r\n')
}

export function AXlogColor(param1, msg) {
    getTime();
    console.log(param1, msg)
    fs.appendFileSync('log.txt', "[" + currentTime + "] " + msg + '\r\n')
}

function getTime() {
    let date_time = new Date();

    // get current date
    // adjust 0 before single digit date
    let date = ("0" + date_time.getDate()).slice(-2);

    // get current month
    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

    // get current year
    let year = date_time.getFullYear();

    // get current hours
    let hours = date_time.getHours();

    // get current minutes
    let minutes = date_time.getMinutes();

    // get current seconds
    let seconds = date_time.getSeconds();

    // prints date in YYYY-MM-DD format
    //console.log(year + "-" + month + "-" + date);

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    currentTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}