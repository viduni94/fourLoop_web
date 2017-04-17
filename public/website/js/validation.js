/**
 * Created by savinda on 4/11/17.
 */

$( document ).ready(function() {
    document.getElementById("submit").disabled = true;
    document.getElementById("for_name").style.display = "none";
    document.getElementById("for_email").style.display = "none";
});

//disable or enable submit button
function changeData() {

    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        document.getElementById("submit").disabled = true;
    }

    else if (document.getElementById("name").value == "") {
        document.getElementById("submit").disabled = true;
    }

    else if (document.getElementById("subject").value == "") {
        document.getElementById("submit").disabled = true;
    }

    else if (document.getElementById("message").value == "") {
        document.getElementById("submit").disabled = true;
    }

    else {
        document.getElementById("submit").disabled = false;
    }
}

//onchange name
function changeName() {
    changeData();
    var letters = /^[A-Za-z]+$/;
    var name = document.getElementById("name").value;
    if(name == "" || !name.match(letters)){
        document.getElementById("name").style.borderColor="red";
        document.getElementById("for_name").style.display = "inline";
    }
    else{
        document.getElementById("name").style.borderColor="#0066FF";
        document.getElementById("for_name").style.display = "none";
    }
}

//onchange email
function changeEmail() {
    changeData();
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        document.getElementById("email").style.borderColor="red";
        document.getElementById("for_email").style.display = "inline";
    }
    else{
        document.getElementById("email").style.borderColor="#0066FF";
        document.getElementById("for_email").style.display = "none";
    }
}

//onchange sublect
function changeSubject() {
    changeData();
    if(document.getElementById("subject").value==""){
        document.getElementById("subject").style.borderColor="red";
    }
    else{
        document.getElementById("subject").style.borderColor="#0066FF";
    }

}

//onchange message
function changeMessage() {
    changeData();
    if(document.getElementById("message").value==""){
        document.getElementById("message").style.borderColor="red";
    }
    else{
        document.getElementById("message").style.borderColor="#0066FF";
    }
}


