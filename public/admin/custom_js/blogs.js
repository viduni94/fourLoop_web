/**
 * Created by savinda on 4/18/17.
 */

$( document ).ready(function() {

    $.ajax({
        type: "POST",
        url: "/getBlogs",
        success: function(msg) {
            $('#div1').hide().html(msg).fadeIn(500);
        }
    });

});