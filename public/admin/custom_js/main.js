/**
 * Created by savinda on 4/18/17.
 */

function loadDashboard() {
    var title = "Dashboard";
    $('#pageTitle').hide().html('<h3 class="page-header">'+ title +'</h3>').fadeIn(500);
    //todo
    $('#loadJs').html('<script src="/custom_js_admin/dashboard.js"></script>');
}

function loadMessages() {
    var title = "Messages";
    $('#pageTitle').hide().html('<h3 class="page-header">'+ title +'</h3>').fadeIn(500);
    //todo
    $('#loadJs').html('<script src="/custom_js_admin/message.js"></script>');
}

function loadTeam() {
    var title = "Team";
    var pageContent = '<div class="row">' +
        '<div class="col-md-6 portlets" >' +
        '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
        '<div class="pull-left">Team members</div></div>' +
        '<div class="panel-body" id="div1"><div class="loading" style="margin: auto"></div></div></div></div>' +
        '<div class="col-md-6 portlets" id="div2">' +
        '<div class="panel panel-default">' +
        '<div class="panel-heading"><div class="pull-left">Add team member</div></div>' +
        '<div class="panel-body" id="div2"><form role="form"><div class="form-group">' +
        '<label for="exampleInputEmail1">Name</label><input type="text" id="name" class="form-control"/></div>' +
        '<div class="form-group"><label>Possition</label><input type="text" id="possition" class="form-control"/></div>' +
        '<div class="form-group"><label>Upload image</label><input type="file" id="image" /></div>' +
        '<button type="submit" class="btn btn-primary">Add team member</button></form></div></div></div></div>';

    $('#pageTitle').hide().html('<h3 class="page-header">'+ title +'</h3>').fadeIn(500);
    $('#pageContent').hide().html(pageContent).fadeIn(500);


    $('#loadJs').html('<script src="/custom_js_admin/team.js"></script>');
}

function loadBlogs() {
    var title = "Blogs";
    var pageContent = '<div class="row">' +
        '<div class="col-md-7 portlets" >' +
        '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
        '<div class="pull-left">Blogs</div></div>' +
        '<div class="panel-body" id="div1"><div class="loading" style="margin: auto"></div></div></div></div>' +
        '<div class="col-md-5 portlets" id="div2">' +
        '<div class="panel panel-default">' +
        '<div class="panel-heading"><div class="pull-left">Add new blog</div></div>' +
        '<div class="panel-body" id="div2"><form role="form">' +
        '<div class="form-group"><label>Name</label><input type="text" id="name" class="form-control"/></div>' +
        '<div class="form-group"><label>Description</label><input type="text" id="descripion" class="form-control"/></div>' +
        '<div class="form-group"><label>Upload image</label><input type="file" id="image" /></div>' +
        '<div class="form-group"><label>Number of  views</label><input type="number" id="numViews" class="form-control"/></div>' +
        '<div class="form-group"><label>Number of  comments</label><input type="number" id="numComments" class="form-control"/></div>' +
        '<div class="form-group"><label>Link</label><input type="text" id="link" class="form-control"/></div>' +
        '<button type="submit" class="btn btn-primary">Add team member</button></form></div></div></div></div>';

    $('#pageTitle').hide().html('<h3 class="page-header">'+ title +'</h3>').fadeIn(500);
    $('#pageContent').hide().html(pageContent).fadeIn(500);

    $('#loadJs').html('<script src="/custom_js_admin/blogs.js"></script>');
}

function loadProjects() {
    var title = "Projects";
    var pageContent = '<div class="row">' +
        '<div class="col-md-7 portlets" >' +
        '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
        '<div class="pull-left">Projects</div></div>' +
        '<div class="panel-body" id="div1"><div class="loading" style="margin: auto"></div></div></div></div>' +
        '<div class="col-md-5 portlets" id="div2">' +
        '<div class="panel panel-default">' +
        '<div class="panel-heading"><div class="pull-left">Add new project</div></div>' +
        '<div class="panel-body" id="div2"><form role="form">' +
        '<div class="form-group"><label>Name</label><input type="text" id="name" class="form-control"/></div>' +
        '<div class="form-group"><label>Description</label><input type="text" id="description" class="form-control"/></div>' +
        '<div class="form-group"><label>Upload image</label><input type="file" id="image" /></div>' +
        '<div class="form-group"><label>Link</label><input type="text" id="link" class="form-control"/></div>' +
        '<button type="submit" class="btn btn-primary">Add team member</button></form></div></div></div></div>';

    $('#pageTitle').hide().html('<h3 class="page-header">'+ title +'</h3>').fadeIn(500);
    $('#pageContent').hide().html(pageContent).fadeIn(500);

    $('#loadJs').html('<script src="/custom_js_admin/projects.js"></script>');
}

function editMember(id) {
    alert(id);
}

function removeMember(id) {
    alert(id);
}