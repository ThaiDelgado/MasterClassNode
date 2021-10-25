const os = require('os');

//const freemem = os();
//const totalmem = os();

const{freemem, totalmem} = os; //desestruturação

const free = parseInt(freemem() / 1024 / 1024)
const total = parseInt(totalmem() / 1024 / 1024)

console.log(`${free} MB ${total} MB`)

