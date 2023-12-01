//Task3
// var express = require('express');

// var app = express();

// app.get('/', (req, res) => {
//     res.send(`<h1>Welcome To Main Page</h1>
//             <a href="/about">Go To About Page</a>`)
// })

// app.get('/about', (req, res) => {
//     res.send(`<h1>This Is About Page</h1>
//             <a href="/">Go To Main</a>`)
// })

// app.listen(3030)

//Task4

var express = require('express');

var app = express();

app.use(express.static('static'))

app.listen(3030)