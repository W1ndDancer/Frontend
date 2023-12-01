var fs = require('fs');
var path = require('path')


var person = {
    name: 'Ivan',
    surname: 'Pupkin',
    age: 15,
    city: 'Prague'
}

fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(person, null, 2))