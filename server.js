//include express framework
const express = require('express');

//include body-parser which parse form inputs to controllers
const bodyParser = require('body-parser');
const favicon = require('express-favicon');
const MongoClient = require('mongodb').MongoClient; //include mongodb
const path = require('path'); //include path

const app = express();
var db;

const index = require('./routes/index');
const admin = require('./routes/admin');

app.set('view engine', 'ejs');


//set path
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/css',express.static(path.join(__dirname, 'public/website/css')));
app.use('/js',express.static(path.join(__dirname, 'public/website/js')));
app.use('/css_admin',express.static(path.join(__dirname, 'public/admin/css')));
app.use('/js_admin',express.static(path.join(__dirname, 'public/admin/js')));
app.use('/assets_admin',express.static(path.join(__dirname, 'public/admin/assets')));
app.use('/img_admin',express.static(path.join(__dirname, 'public/admin/img')));
app.use('/fonts_admin',express.static(path.join(__dirname, 'public/admin/fonts')));
app.use('/custom_js_admin',express.static(path.join(__dirname, 'public/admin/custom_js')));

app.use('/teamMember',express.static(path.join(__dirname, 'public/website/img/team'))); //team members images
app.use('/blog',express.static(path.join(__dirname, 'public/website/img/blog'))); // blog images
app.use('/project',express.static(path.join(__dirname, 'public/website/img/project'))); // project images

//extract data from the form element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({extended: true}));

//favicon
app.use(favicon(__dirname + '/public/favicon.png'));

//routes
app.use('/',index);
app.use('/admin_fourLoop/',admin)


//404 error page
app.use(function(req, res) {
    res.status(404);
    res.render('errors/404');
});

//500 error page
app.use(function(error, req, res, next) {
    res.status(500);
    res.render('errors/500');
});

//start node server
app.listen(3000, function() {
    console.log('listening on 3000');
});


