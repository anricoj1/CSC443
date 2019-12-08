var http = require('http');
var url = require('url');
var fs = require('fs');

// rootPath
var rootPath = './views/pages/';



let requestHandler = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    fs.readFile(rootPath + 'index.html', null, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write("Whoops! File Not Found");
        } else {
            res.write(data);
        }
        res.end();
    });
};

http.createServer(requestHandler).listen(8080);
console.log('Server Running at http://localhost:8080');