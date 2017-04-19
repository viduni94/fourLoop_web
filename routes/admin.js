/**
 * Created by savinda on 4/19/17.
 */


const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
var db;

//send email
function sendMail(email) {
    console.log(email);
}

//connect to mongo server and start server
MongoClient.connect('mongodb://root:admin@ds157390.mlab.com:57390/team-fourloop', function(err, database) {
    if (err) return console.log('mongo error - '+err);
    db = database;
    console.log('connect to mongodb');
    //listen to localhost port 3000
});


router.get('/', function(req, res) {
    //res.send('test');
    res.render('admin/admin_panel.ejs');
});

//get all members
router.post('/getTeamMembers', function(req, res){

    db.collection('team').find().toArray(function (err, result) {
        if (err) return console.log(err);
        var response = '';
        for(var i = 0; i<result.length; i++){
            response += '<div class="row" style="border: solid; border-radius: 5px; border-color: #394A59; border-width: 1px;margin: 5px">' +
                '<div class="col-md-2" style="padding-top: 10px; padding-bottom: 10px">' +
                '<img alt="Bootstrap Image Preview" src="/teamMember/'+ result[i].image +'" class="img-thumbnail" /></div>' +
                '<div class="col-md-6" style="padding-top: 10px; padding-bottom: 10px">' +
                '<h4><b>'+ result[i].name +'</b></h4><h5>'+ result[i].position +'</h5></div>' +
                '<div class="col-md-4" style="margin-top: 10px" style="padding-top: 10px; padding-bottom: 10px">' +
                '<button type="button" class="btn btn-primary" onclick="editMember(\''+ result[i]._id +'\')">Edit</button> ' +
                '<button type="button" class="btn btn-danger" onclick="removeMember(\''+ result[i]._id +'\')">Remove</button></div></div>';
        }

        res.send(response);
    });

});

//get all members
router.post('/getProjects', function(req, res){

    db.collection('project').find().toArray(function (err, result) {
        if (err) return console.log(err);
        var response = '';
        for(var i = 0; i<result.length; i++){
            response += '<div class="row" style="border: solid; border-radius: 5px; border-color: #394A59; border-width: 1px;margin: 5px">' +
                '<div class="col-md-3" style="padding-top: 10px; padding-bottom: 10px">' +
                '<img alt="Bootstrap Image Preview" src="/project/'+ result[i].image +'" class="img-thumbnail" /></div>' +
                '<div class="col-md-5" style="padding-top: 10px; padding-bottom: 10px">' +
                '<h4><b>'+ result[i].name +'</b></h4><h5>'+ result[i].description +'</h5></div>' +
                '<div class="col-md-4" style="margin-top: 10px" style="padding-top: 10px; padding-bottom: 10px">' +
                '<button type="button" class="btn btn-primary" onclick="editProject(\''+ result[i]._id +'\')">Edit</button> ' +
                '<button type="button" class="btn btn-danger" onclick="removeProject(\''+ result[i]._id +'\')">Remove</button></div></div>';
        }

        res.send(response);
    });

});

//get all members
router.post('/getBlogs', function(req, res){

    db.collection('blog').find().toArray(function (err, result) {
        if (err) return console.log(err);
        var response = '';
        for(var i = 0; i<result.length; i++){
            response += '<div class="row" style="border: solid; border-radius: 5px; border-color: #394A59; border-width: 1px;margin: 5px">' +
                '<div class="col-md-2" style="padding-top: 10px; padding-bottom: 10px">' +
                '<img alt="Bootstrap Image Preview" src="/blog/'+ result[i].image +'" class="img-thumbnail" /></div>' +
                '<div class="col-md-5" style="padding-top: 10px; padding-bottom: 10px">' +
                '<h4><b>'+ result[i].name +'</b></h4><h5>by savinda</h5></div>' +
                '<div class="col-md-5" style="margin-top: 10px" style="padding-top: 10px; padding-bottom: 10px"> ' +
                '<button type="button" class="btn btn-success" onclick="viewBlog(\''+ result[i]._id +'\')">View</button> ' +
                '<button type="button" class="btn btn-primary" onclick="editBlog(\''+ result[i]._id +'\')">Edit</button> ' +
                '<button type="button" class="btn btn-danger" onclick="removeBlog(\''+ result[i]._id +'\')">Remove</button> </div> </div>';
        }

        res.send(response);
    });

});

module.exports = router;