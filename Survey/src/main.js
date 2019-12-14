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
            '<button href="/">Home</button>' +
        '</div>'
    )
}

// post the survey form
exports.post = async function(req, res) {
    if (req.method === 'POST') {
        var form = '/?';
        req.on('data', (chunk) => {
            form += chunk.toString();
        });
        req.on('end', () => {
            result = url.parse(form, true).query;
            fs.readFile('results.json', null, (err, data) => {
                var res = JSON.parse(data);
                /* 
                fs.appendFile('results.json', result, (err) => {
                    for (var i = 0; i < res.results.length; i++) {
                        "result" should be obj (i.e)
                        var result = {
                            "q1" : neutral,
                            "q2" : neutral,
                            "q3" : neutral,
                            "q4" : neutral,
                            "q5" : neutral,
                            "q6" : neutral,
                            "q7" : neutral,
                            "q8" : neutral
                        };

                        if (result.q1 === "neutral") {
                            res.results[0].neutral + 1;
                        }

                        make function to handle this no continous if statements
                    }
                });
                */

            });
        });
    }
}

