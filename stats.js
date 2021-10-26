const { table } = require('console');
const os = require('os');

//const freemem = os();
//const totalmem = os();

setInterval(() => {

    const{freemem, totalmem, platform} = os; //desestruturação

    const free = parseInt(freemem() / 1024 / 1024)
    const total = parseInt(totalmem() / 1024 / 1024)
    const percents = parseInt((free/total) * 100) 
    const plataform = platform()


    const stats = {
        free : `${free} MB`,
        total : `${total} MB`,
        percents : `${percents}%`,
        plataform : `${plataform}`
    }

    console.clear()
    console.log('### PC STATS ###')
    console.table(stats)


}, 1000)

