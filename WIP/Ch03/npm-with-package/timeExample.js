var moment = require('moment-timezone');
console.log(moment().format('MM-DD-YYYY'));

console.log(moment('20110101', 'YYYYMMDD').fromNow());

console.log(moment().tz('America/New_York').format('ha z'));
console.log(moment().tz('America/Los_Angeles').format('ha z'));