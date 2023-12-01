var http = require('http');

var server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'content-type': 'text/html; charset=utf-8'
        });
        res.end('<a href="/about">Go To About Page</a>');
    }
    else if (req.url === '/about') {
        res.writeHead(200, {
            'content-type': 'text/html; charset=utf-8'
        });
        res.end('<a href="/">Go To Main Page</a>');
    }
    else {
        res.writeHead(404, {
            'content-type': 'text/html; charset=utf-8'
        });
        res.end(`<h1>Page Not Found</h1>
                        <br>
                        <a href="/">Go To Main Page</a>`);
    }

})

var port = '3000';

server.listen(port)