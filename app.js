let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let port = process.env.PORT || 3001;

let urlencodedParser = bodyParser.urlencoded({ extended: false })

let jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
    console.log('Request Url: '+ req.url);
    next(); 
});

app.get('/', function(req, res) {
    // res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /> </head><body><h1>Yoloooo</h1></body></html>')
    res.render('index');    
});

app.get('/api', function(req, res) {
    res.json({ firstName: 'Alejandro', skill: 'Programmer' });
});

app.get('/api/user/:id', function(req, res) {
    //res.send('<html><head></head><body><h1>User: ' + req.params.id + '</h1></body></html>')
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr });    

});

app.post('/api/userJson', jsonParser, function(req, res) {
    // Save to the database
})

app.delete('/api/user/:id', function(req, res) {
    // Delete from the database
})

app.listen(port);