var http = require('http');
var url = require('url');
var fs = require('fs');

// rootPath
var rootPath = './views/pages/';
var pacman = './views/pages/pacman/';

http.createServer((req, res) => {
    var parseUrl = url.parse(req.url);

    switch (parseUrl.pathname) {
        case "/":
            index(req, res);
            break;
        case "/charts":
            chartcb(req, res);
            break;
        case "/postIndex":
            postcb(req, res);
            break;
        case "/data":
            datacb(req, res);
            break;
        case "/error":
            errorcb(req, res);
            break;
    }
}).listen(8080);
console.log("Server Running at http://localhost:8080");


// index function
const index = (req, res) => {
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

// post table form callback function
const postcb = (req, res) => {
    if (req.method === 'POST') {
        var form = '/?';
        req.on('data', (chunk) => {
            form += chunk.toString();
        });
        req.on('end', () => {
            result = url.parse(form, true).query;
            var this_result = JSON.stringify(result);
            fs.writeFile('results.txt', this_result, (err) => { // here we write to file
                if (err) {
                    res.writeHead(404);
                    res.write("There was an error: " + err);
                    index(req, res);
                } else {
                    res.writeHead(200);
                    chartcb(req, res);
                }
            })
        });
    }
}

// here we read file res as json
const datacb = (req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'application/json'
    });

    fs.readFile('results.txt', null, (err, data) => {
        res.write(data);
        res.end();
    });
}

// chart view callback function
const chartcb = (req, res) => {
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


// error callback function
const errorcb = (req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    fs.readFile(rootPath + 'error.html', (err, data) => {
        res.write(data);
    });
}


