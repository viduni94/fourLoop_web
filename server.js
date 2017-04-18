//include express framework
const express = require('express');

//include body-parser which parse form inputs to controllers
const bodyParser = require('body-parser');
const favicon = require('express-favicon');
const MongoClient = require('mongodb').MongoClient; //include mongodb
const path = require('path'); //include path

const app = express();
var db;

app.set('view engine', 'ejs');

//connect to mongo server
MongoClient.connect('mongodb://root:admin@ds157390.mlab.com:57390/team-fourloop', function(err, database) {
    if (err) return console.log('mongo error - '+err);
    db = database;

    //listen to localhost port 3000
    app.listen(3000, function() {
        console.log('listening on 3000');
    });
});

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

//validate contact form
function validateContactForm(body) {
    var email = body.email;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        return false;
    }
    else if(body.name == ""){
        return false;
    }
    else if(body.subject == ""){
        return false;
    }
    else if(body.message == ""){
        return false;
    }
    else{
        return true;
    }

}

//send email
function sendMail(email) {
    console.log(email);
}

//routes
//index page
app.get('/', function(req, res) {
    db.collection('team').find().toArray(function(err, result) {
        if (err) return console.log(err);
        res.render('index.ejs', {team: result});
    });
});

app.get('/admin_fourLoop', function(req, res) {
    //res.send('test');
    res.render('admin/admin_panel.ejs');
});

//save new contact
app.post('/contact', function(req, res){
    if(validateContactForm(req.body)) {
        db.collection('contact').save(req.body, function (err, result) {
            if (err) {
                res.send('fail');
                return console.log('function err - ' + err);
            }
            console.log('saved to database');
            sendMail(req.body.email);
            res.send('success');
        });
    }
    else{
        res.send('fail');
    }
});

//get project details from db
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

//get blog details from db
app.post('/blog', function(req, res){
    var memberID = req.body.memberId;

    db.collection('blog').find({'member_id' : memberID}).limit(1).toArray(function (err, result) {
        if (err) return console.log(err);

        var response = '<div class="blog-sec">' +
            '<div class="blog-img"><a href=""><img src="/blog/'+ result[0].image +'" class="img-responsive"></a></div>' +
            '<div class="blog-info"><h2>'+ result[0].name +'</h2><div class="blog-comment">' +
            '<p><small>Posted In: <span>Legal Advice</span></small></p>' +
            '<p><span><a href="#"><i class="fa fa-comments"></i></a> '+ result[0].num_comments + ' ' +'</span><span><a href="#"><i class="fa fa-eye"></i></a> '+ result[0].num_views +'</span></p>' +
            '</div><p><small>'+ result[0].description +'</small></p> ' +
            '<a href="'+ result[0].link +'" class="read-more">Read more →</a> </div></div>';
        res.send(response);
    });

});

app.use(function(req, res) {
    res.status(404);
    res.render('errors/404');
});

app.use(function(error, req, res, next) {
    res.status(500);
    res.render('errors/500');
});

