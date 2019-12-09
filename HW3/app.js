var http = require('http');
var url = require('url');
var fs = require('fs');

// rootPath
var rootPath = './views/pages/';

http.createServer(function(req, res) {
    var parseUrl = url.parse(req.url);

    switch (parseUrl.pathname) {
        case "/":
            index(req, res);
            break;
        case "/charts":
            thisChart(req, res);
            break;
    }
}).listen(8080);
console.log("Server Running at http://localhost:8080");



function index(req, res) {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    fs.readFile(rootPath + 'index.html', null, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write("Whoops File Not Found!");
        } else {
            res.write(data);
        }
        res.end();
    });
};

function thisChart(req, res) {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    fs.readFile(rootPath + 'chart.html', null, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write("Whoops File Not Found!");
        } else {
            res.write(data);
        }
        res.end();
    });
};


