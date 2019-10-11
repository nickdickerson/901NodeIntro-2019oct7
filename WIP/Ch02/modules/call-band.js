//const Band = require('./constructor-band');
const Band = require('./band.js');
const beatles = new Band('The Beatles', ['John', 'Paul', 'George', 'Ringo']);
console.log(`beatles member count ${beatles.memberCount()}`);