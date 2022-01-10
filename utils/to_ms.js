var readlineSync = require('readline-sync');
 
const fecha = readlineSync.question('Fecha YYYYMMDD  ? ');
const hora = readlineSync.question('Hora HHMM ? ');

var moment = require('moment'); // require
moment().format();

var now = moment.utc(fecha+"T"+hora).valueOf();
console.log(now);


