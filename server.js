//include express framework
const express = require('express');

//include body-parser which parse form inputs to controllers
const bodyParser = require('body-parser');

//include mongodb
const MongoClient = require('mongodb').MongoClient;

//include path
const path = require('path');

const app = express();
var db;

//connect to mongo server
MongoClient.connect('mongodb://root:admin@ds157390.mlab.com:57390/team-fourloop', function(err, database) {
    if (err) return console.log('mongo error - '+err);
    db = database;

    //listen to localhost port 3000
    app.listen(3000, function() {
        console.log('listening on 3000');
    });
});

app.set('view engine', 'ejs');

//set path
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/css',express.static(path.join(__dirname, 'public/website/css')));
app.use('/js',express.static(path.join(__dirname, 'public/website/js')));
app.use('/teamMember',express.static(path.join(__dirname, 'public/website/img/team')));
app.use('/blog',express.static(path.join(__dirname, 'public/website/img/blog')));
app.use('/project',express.static(path.join(__dirname, 'public/website/img/project')));

//extract data from the form element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({extended: true}));


// app.get('/', function (req,res) {
//     res.render('/application/view/', locals);
//     // res.sendFile(__dirname + '/application/view/index.html');
// });


app.get('/', function(req, res) {
    db.collection('team').find().toArray(function(err, result) {
        if (err) return console.log(err);
        res.render('index.ejs', {team: result});
    });
});

app.post('/contact', function(req, res){
    db.collection('contact').save(req.body, function(err, result){
        if (err) return console.log('function err - '+err);

        console.log('saved to database');
        res.redirect('/');
    });
});

app.post('/project', function(req, res){
    db.collection('project').find().limit(3).toArray(function (err, result) {
        if (err) return console.log(err);

        var response = '';

        for(var i=0; i<result.length; i++) {

            response += '<div class="col-md-4 col-sm-6 col-xs-12 portfolio-item padding-right-zero mr-btn-15">' +
                '<figure><img src="/project/' + result[i].image+'" class="img-responsive"><figcaption>' +
                '<h2>'+result[i].name+'</h2>' +
                '<p>'+result[i].description+'</p>' +
                '</figcaption></figure></div>';

        }

        res.send(response);
    });

});