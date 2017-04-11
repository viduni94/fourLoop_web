/**
 * Created by savinda on 4/11/17.
 */

function contactBtn() {

        //get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        var status = 'NEW';

        //send data to server
        $.ajax({
            type: "POST",
            data: {name: name,
                email: email,
                subject: subject,
                message: message,
                status: status
            },
            url: "/contact",
            success: function(msg) {
                //success message
                swal("Good job!", "You clicked the button!", "success");
            }
        });
}
