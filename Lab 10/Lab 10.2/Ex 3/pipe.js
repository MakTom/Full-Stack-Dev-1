const request = require('request');
const fs = require('fs');

request('http://google.ca').pipe(fs.createWriteStream('output.html'));
