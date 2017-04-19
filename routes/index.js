/**
 * Created by savinda on 4/19/17.
 */

const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
var db;

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

//connect to mongo server and start server
MongoClient.connect('mongodb://root:admin@ds157390.mlab.com:57390/team-fourloop', function(err, database) {
    if (err) return console.log('mongo error - '+err);
    db = database;
    console.log('connect to mongodb');
    //listen to localhost port 3000
});


router.get('/', function(req, res) {
    db.collection('team').find().toArray(function(err, result) {
        if (err) return console.log(err);

        res.render('index.ejs', {team: result});

    });
});

//get project details from db
router.post('/project', function(req, res){
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
router.post('/blog', function(req, res){
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


//save new contact
router.post('/contact', function(req, res){
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


module.exports = router;