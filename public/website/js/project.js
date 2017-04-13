/**
 * Created by savinda on 4/13/17.
 */


$( document ).ready(function() {
    $.ajax({
        type: "POST",
        url: "/project",
        success: function(msg) {

            $('#project').html(msg);
        }
    });
});