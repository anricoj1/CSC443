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

exports.post = (req, res) => {
    if (req.method === 'POST') {
        var form = '/?';
        req.on('data', (chunk) => {
            form += chunk.toString();
        });
        req.on('end', () => {
            result = url.parse(form, true).query;
            var object = Object.keys(result);

            var post = {
                'q1' : object[0],
                'q2' : object[1],
                'q3' : object[2],
                'q4' : object[3],
                'q5' : object[4],
                'q6' : object[5],
                'q7' : object[6],
                'q8' : object[7]
            }

            fs.readFile('results.json', null, (err, data) => {
                var p = JSON.parse(data);
                appendJson(post, p);
                fs.writeFile('results.json', JSON.stringify(p), (err) => {
                    if (err) {
                        errorcb(req, res);
                    } else {
                        res.write("Appended Data!");
                        res.end();
                    }
                })
            });
        });
    }
}

var appendJson = (post, p) => {
    var q = [post.q1, post.q2, post.q3, post. q4, post.q5, post.q6, post.q7, post.q8];
    var index = indexQuestion();
    var arr = new Array();
    for (var i = 0; i < index.length; i++) {
        for (var j = 0; j < q.length; j++) {
            if (q[j] === index[i][0]) {
                arr.push({'1' : index[i][0]})
            }
            if (q[j] === index[i][1]) {
                arr.push({'2' : index[i][1]})
            }
            if (q[j] === index[i][2]) {
                arr.push({'3' : index[i][2]})
            }
            if (q[j] === index[i][3]) {
                arr.push({'4' : index[i][3]})
            }
            if (q[j] === index[i][4]) {
                arr.push({'5' : index[i][4]})
            }
            if (q[j] === index[i][5]) {
                arr.push({'6' : index[i][5]})
            }
            if (q[j] === index[i][6]) {
                arr.push({'7' : index[i][6]})
            }
            if (q[j] === index[i][7]) {
                arr.push({'8' : index[i][7]})
            }
        }
        console.log(arr);
    }
}

const indexQuestion = () => {
    var choices = [
        ['q1_neutral','q1_disSomewhat','q1_disStrong','q1_agreeSome','q1_agreeStrong'],
        ['q2_neutral','q2_disSomewhat','q2_disStrong','q2_agreeSome','q2_agreeStrong'],
        ['q3_neutral','q3_disSomewhat','q3_disStrong','q3_agreeSome','q3_agreeStrong'], 
        ['q4_neutral','q4_disSomewhat','q4_disStrong','q4_agreeSome','q4_agreeStrong'], 
        ['q5_neutral','q5_disSomewhat','q5_disStrong','q5_agreeSome','q5_agreeStrong'], 
        ['q6_neutral','q6_disSomewhat','q6_disStrong','q6_agreeSome','q6_agreeStrong'], 
        ['q7_neutral','q7_disSomewhat','q7_disStrong','q7_agreeSome','q7_agreeStrong'], 
        ['q8_neutral','q8_disSomewhat','q8_disStrong','q8_agreeSome','q8_agreeStrong'],
    ];

    return choices;
}

