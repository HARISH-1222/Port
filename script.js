'use strict';

let icon = document.getElementById("dark_icon");

icon.onclick = function () {
    document.body.classList.toggle("dark_theme")
    if (document.body.classList.contains("dark_theme")) {
        icon.src = "sun.png"
    }
    else {
        icon.src = "moon.png"
    }
}

const nameInp = document.querySelector("#name");
const mailid = document.querySelector("#mail_id");
const purpose = document.querySelector("#purpose");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorMes = document.querySelectorAll(".error");

function validateForm() {
    clearOldMess();
    let errorflag = false;
    if (nameInp.value.length < 1) {
        errorMes[0].innerText = "Enter the Name !";
        nameInp.classList.add("error-border");
        // console.log("name");
        errorflag = true;
    }

    if (mailid.value.length < 1) {
        errorMes[1].innerText = "Enter the mail id";
        mailid.classList.add("error-border");
    }
    else if (!checkEmailValid(mailid.value)) {
        errorMes[1].innerText = "Email not valid !";
        mailid.classList.add("error-border");
        // console.log("email");
        errorflag = true;
    }


    if (message.value.length < 1) {
        errorMes[3].innerText = "Enter the message !";
        message.classList.add("error-border");
        // console.log("message");
        errorflag = true;
    }

    // if (message.value.length < 1) {
    //     errorMes[2].innerText = "Enter the message !";
    //     message.classList.add("error-border");
    // }
    if (!errorflag) {
        console.log("Success");
        success.innerText = "Success";
    }
}

function clearOldMess() {
    for (let i = 0; i < errorMes.length; i++) {
        errorMes[i].innerText = "";
    }
    nameInp.classList.remove("error-border");
    mailid.classList.remove("error-border");
    message.classList.remove("error-border");
}

function checkEmailValid(mailid) {
    let pattern = /\S+@\S+\.\S+/;
    // console.log("hrll");
    return pattern.test(mailid);
}


// src = "https://smtpjs.com/v3/smtp.js";

