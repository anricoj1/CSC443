var http = require('http');
var url = require('url');
const main = require('./src/main');


// server with switch cases (routes)
http.createServer((req, res) => {
    var parsedUrl = url.parse(req.url);

    switch (parsedUrl.pathname) {
        case '/':
            main.index(req, res);
            break;
        case '/results':
            main.resultscb(req, res);
            break;
        case '/data':
            main.resjson(req, res);
            break;
        case '/post':
            main.post(req, res)

    }
}).listen(8080);
console.log("Server Running At http://localhost:8080");