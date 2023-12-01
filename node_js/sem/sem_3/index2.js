var fs = require('fs');
var path = require('path');
var pathToFile = path.join(__dirname, 'person.json');

var personData = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));

personData.age -= 10;
personData.city = 'Ostrava';

fs.writeFileSync(pathToFile, JSON.stringify(personData, null, 2));