/**
 * Created by savinda on 4/11/17.
 */

function changeData() {
    console.log('Changed');

    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        document.getElementById("email").style.borderColor="red";
    }

    else if (document.getElementById("name").value == "") {
        document.getElementById("submit").disabled = true;
        console.log('3');
    }

    else if (document.getElementById("subject").value == "") {
        document.getElementById("submit").disabled = true;
        console.log('5');
    }

    else if (document.getElementById("message").value == "") {
        document.getElementById("submit").disabled = true;
        console.log('6');
    }

    else {
        document.getElementById("submit").disabled = false;
        console.log('2');
    }
}

function changeName() {
    changeData();
    if(document.getElementById("name").value==""){
        document.getElementById("name").style.borderColor="red";
    }
    else{
        document.getElementById("name").style.borderColor="#0066FF";
    }
}

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

function changeSubject() {
    changeData();
    if(document.getElementById("subject").value==""){
        document.getElementById("subject").style.borderColor="red";
    }
    else{
        document.getElementById("subject").style.borderColor="#0066FF";
    }

}

function changeMessage() {
    changeData();
    if(document.getElementById("message").value==""){
        document.getElementById("message").style.borderColor="red";
    }
    else{
        document.getElementById("message").style.borderColor="#0066FF";
    }
}


