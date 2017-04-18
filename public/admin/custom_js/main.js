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
    $('#pageTitle').hide().html('<h3 class="page-header">'+ title +'</h3>').fadeIn(500);
    //todo
    $('#loadJs').html('<script src="/custom_js_admin/team.js"></script>');
}

function loadBlogs() {
    var title = "Blogs";
    $('#pageTitle').hide().html('<h3 class="page-header">'+ title +'</h3>').fadeIn(500);
    //todo
    $('#loadJs').html('<script src="/custom_js_admin/blog.js"></script>');
}

function loadProjects() {
    var title = "Projects";
    $('#pageTitle').hide().html('<h3 class="page-header">'+ title +'</h3>').fadeIn(500);
    //todo
    $('#loadJs').html('<script src="/custom_js_admin/project.js"></script>');
}