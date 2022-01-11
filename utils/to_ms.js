var readlineSync = require('readline-sync');
 
const fecha = readlineSync.question('Fecha YYYYMMDD  ? ');
const hora = readlineSync.question('Hora HHMM ? ');

var moment = require('moment'); // require
moment().format();

var now = moment(fecha+"T"+hora).valueOf();
console.log(now);


//19.57  ->  1641841020000 
//             1641841020000