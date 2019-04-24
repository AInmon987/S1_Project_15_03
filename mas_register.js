"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Austin inmon
   Date:    4.23.19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
window.addEventListener("load", function () {
    //called the calcart function. 
    calCart();
    //Runs the session test when the button is clicked.
    document.getElementById("regSubmit").onclick = sessionTest;
    //When focused is changed the calcart function is ran.
    document.getElementById("fnBox").onblur = calCart;
    document.getElementById("inBox").onblur = calCart;
    document.getElementById("groupBox").onblur = calCart;
    document.getElementById("mailBox").onblur = calCart;
    document.getElementById("phoneBox").onblur = calCart;
    document.getElementById("banquetBox").onblur = calCart;
    //When onchange occurs the calCart function is run. 
    document.getElementById("sessionBox").onchange = calCart;
    document.getElementById("mediaCB"), onclick = calCart;
});

//provides validation tets for selection list. 
function sessionTest() {
    if (document.getElementById("sessionBox").selectedindex === -1) {
        document.getElementById("sessionBox").setCustomValidity("Select a Session package.");
    } else {
        document.getElementById("sessionBox").setCustomValidity("");
    }
}
//Calculates the cost of the registration and saves data in session storage
function calCart() {
    //when the fields are being used by the user, the information will be entered when the user switches the field.
    sessionStorage.setItem("confName", document.getElementById("fnBox").value + "" + document.getElementById("lnBox").value + "");
    sessionStorage.setItem("confGroup", document.getElementById("group").value);
    sessionStorage.setItem("confMail", document.getElementById("email").value);
    sessionStorage.setItem("confPhone", document.getElementById("phoneNumber").value);
    sessionStorage.setItem("confBanquet", document.getElementById("banquetGuest").value);




}
//Writes data values from session storage in to the registration summary form.
function writeSessionValues() {
    //the users information is put on the page when entered
    document.getElementById("regName").textContent = sessionStorage.getItem("confName");
    document.getElementById("regGroup").textContent = sessionStorage.getItem("confGroup");
    document.getElementById("regEmail").textContent = sessionStorage.getItem("confMail");
    document.getElementById("regPhone").textContent = sessionStorage.getItem("confPhone");
    document.getElementById("regSession").textContent = sessionStorage.getItem("confSession");
    document.getElementById("regBanquet").textContent = sessionStorage.getItem("confBanquet");
    document.getElementById("regPack").textContent = sessionStorage.getItem("confPack");
    document.getElementById("regTotal").textContent = "$" + sessionStorage.getItem("confTotal");



}