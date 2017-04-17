/**
 * Created by savinda on 4/11/17.
 */

//clear all input fields
function clearInputs() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

}

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
            if(msg=='success'){
                clearInputs();
                swal("Good job!", "You clicked the button!", "success");
            }
            else{
                swal({
                        title: "Are you sure?",
                        text: "Your will not be able to recover this imaginary file!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "Yes, delete it!",
                        closeOnConfirm: false
                    },
                    function(){
                        swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    });
                console.log('fail');
            }

        }
    });
}
