/**
 * Created by savinda on 4/13/17.
 */

function getBlog(memberId, divId) {
    $.ajax({
        type: "POST",
        url: "/blog",
        data: { memberId : memberId},
        success: function(msg) {
            $(divId).hide().html(msg).fadeIn(1000);
        }
    });
}

$( document ).ready(function() {

    //number of members
    var numMembers = document.getElementById('numBlogs').value;
    //Get each member id
    for(var i = 0; i<numMembers; i++){
        var memberId = document.getElementById('m_'+i).value;
        getBlog(memberId,'#b_'+i);

    }

});