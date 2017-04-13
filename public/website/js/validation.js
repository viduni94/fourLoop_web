/**
 * Created by savinda on 4/11/17.
 */

$( document ).ready(function() {
    document.getElementById("submit").disabled = true;
});

//disable or enable submit button
function changeData() {
    console.log('Changed');

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
    if(document.getElementById("name").value==""){
        document.getElementById("name").style.borderColor="red";
    }
    else{
        document.getElementById("name").style.borderColor="#0066FF";
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
    }
    else{
        document.getElementById("email").style.borderColor="#0066FF";
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


