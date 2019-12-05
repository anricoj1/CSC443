var http = require('http');
var url = require('url');

// rootPath
var rootPath = '../views/pages/';


http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end()
})
