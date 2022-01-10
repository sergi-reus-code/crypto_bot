var readlineSync = require('readline-sync');

var milliseconds = readlineSync.question('Fecha unix? ');

const dateObject = new Date(Number(milliseconds))

const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15

console.log(humanDateFormat);