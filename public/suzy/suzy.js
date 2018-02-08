// back button
function goBack() {
    window.history.back();
}

// tab buttons
function openPage(evt, pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}


// star popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


// annoying alerts

console.log("Hello from Suzy's js file!");

let firstName = prompt("What is your first name?");

let lastName = prompt("What is your last name?");

let fullName = firstName + " " + lastName;

console.log("Nice to meet you, " + fullName);


if (firstName === null && lastName === null){
    alert("Fine then. Be that way.");
}
else {

    let userAge = prompt("What is your age?");
    let ageDays = userAge * 365;

    if (userAge >= 30) {
        alert("Hello, " + fullName + ". You are approx. " + ageDays + " days old. Which is pretty old.");
        console.log("I hear you're getting pretty old.");
    }
    else {
        alert("Hello, " + fullName + ". You are approx. " + ageDays + " days old. Just a baby!");
        console.log("You're a cute little guy!")
    }
}
