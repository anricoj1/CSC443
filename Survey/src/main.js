var fs = require('fs');
var url = require('url');

// rootpath for view
var rootPath = './views/';


// index function read file index
exports.index = (req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    fs.readFile(rootPath + 'index.html', null, (err, data) => {
        if (err) {
            errorcb(req, res)
        } else {
            res.write(data);
        }
        res.end();
    });
}


// post the survey form
exports.post = (req, res) => {
    if (req.method === 'POST') {
        var form = '/?';
        req.on('data', (chunk) => {
            form += chunk.toString();
        });
        req.on('end', () => {
            result = url.parse(form, true).query;
            console.log(result);
            fs.readFile(rootPath + 'index.html', null, (err, data) => {
                if (err) {
                    errorcb(req, res);
                } else {
                    res.write(data);
                }
                res.end();
            });
        });
    }
}

// results view read charts
exports.resultscb = (req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    fs.readFile(rootPath + 'results.html', null, (err, data) => {
        if (err) {
            errorcb(req, res);
        } else {
            res.write(data);
        }
        res.end();
    });
}


// resjson of results 
exports.resjson = (req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'application/json'
    });

    fs.readFile('results.json', null, (err, data) => {
        res.write(data);
        res.end();
    });
}

const errorcb = (req, res) => {
    res.writeHead(404);
    res.write(
        '<div class="container">' +
            '<h3> 404!! We Ran Into an error </h3>' +
            '<a class="btn btn-default" href="/">Home</a>' +
        '</div>'
    )
}

