//var http = require('http');
//var port = 3000;

//var requestHandler = function(request, response) {
//    console. log(request.url);
//    response.end('Hello from node server!');
//}

//var server = http.createServer(requestHandler);
//server.listen(port);

//console.log('Node server started on port');

/*const express = require('express');
const app = express();
const port = 3000;

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response) {
    response.render('home', {name: 'John Doe'})
});

app.listen(port);
console.log('server is listening on port 3000');
*/


const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/contacts', function (request, response){
    response.render('contact_us');
});

app.post('/process-contacts', urlEncodedParser, function (request, reponse){
    response.end('Thankyou ' + request.body.first_name + '' + request.body.last_name);
});

const results = []

app.post('/calculate', (req, res) => {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const bmi = weight / Math.pow(height, 2);

    let status;
    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi < 25) {
        status = 'Normal';
    } else if (bmi < 30){
        status - 'Overweight';
    } else {
        status = 'Obese'
    }

    results.push({ weight, height, bmi, status })
    res.render('results', {bmi, status});
});
app.get('/bmiResults', (req, res) => {
    const averageBmi = results.reduce((sum, individual) =>  sum + individual.bmi, 0) / results.length;
    res.render('bmiResults', {results, averageBmi });
});
app.listen(port);
console.log('server is listening on port 3000');

