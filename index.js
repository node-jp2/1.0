const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const reminder = new MyEmitter();
exports.reminder = reminder;
const dayjs = require('dayjs') 
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)
setInterval(() => {
    let godzina = Number(dayjs(Date.now()).tz("Europe/Warsaw").format('HH'))
    let minuta = Number(dayjs(Date.now()).tz("Europe/Warsaw").format('mm'))
    if (godzina == 21 && minuta == 32){
        reminder.emit("2132")
    }
    if (minuta !== 37) return;
    if (godzina == 9){
        reminder.emit("937")
    }
    if (godzina == 20){
        reminder.emit("2037")
    }
    if (godzina == 21){
        reminder.emit("2137")
    }
}, 1000 * 60)
exports.ile = function() {
    let data = new Date()
    let godzina = data.getHours();
    let minuta = data.getMinutes();  
    let ile_godzin;
    let ile_minut;  
    if (godzina > 21){
        ile_godzin = 24 - Number(godzina) + 21;
    } else if (godzina == 21){
        ile_godzin = 0;
    } else {
        ile_godzin = 21 - Number(godzina);
    }

    if (minuta > 37){
        ile_minut = 60 - Number(minuta) + 37;
    } else if (minuta == 37){
        ile_minut = 0;
    } else {
        ile_minut = 37 - Number(minuta);
    }
    return {
        "hours": ile_godzin,
        "minutes": ile_minut
    }
}
exports.help = function() {
    console.log(`
    .---------------------------------------------------------------------------------------------------------------------------------.
    |                                                            Pomoc                                                                |
    |---------------------------------------------------------------------------------------------------------------------------------|
    |                Github                 |                   Funkcje                    |                Przykłady                 |
    |---------------------------------------|----------------------------------------------|------------------------------------------|
    |   https://github.com/node-jp2/1.0     | https://github.com/node-jp2/1.0/functions.md | https://github.com/node-jp2/1.0/example/ |
    '---------------------------------------------------------------------------------------------------------------------------------'
    `)
}
