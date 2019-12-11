var http = require('http');
var url = require('url');
var fs = require('fs');

// rootPath
var rootPath = './views/pages/';

http.createServer((req, res) => {
    var parseUrl = url.parse(req.url);

    switch (parseUrl.pathname) {
        case "/":
            index(req, res);
            break;
        case "/charts":
            thisChart(req, res);
            break;
        case "/postIndex":
            postIndex(req, res);
            break;
    }
}).listen(8080);
console.log("Server Running at http://localhost:8080");



var index = (req, res) => {
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


var postIndex = (req, res) => {
    if (req.method === 'POST') {
        var form = '/?';
        req.on('data', (chunk) => {
            form += chunk.toString();
        });
        req.on('end', () => {
            q = url.parse(form, true).query;
            console.log(q);
        })
    }
}

var thisChart = (req, res) => {
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


