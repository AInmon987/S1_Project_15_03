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
      document.getElementById("lnBox").onblur = calCart;
      document.getElementById("groupBox").onblur = calCart;
      document.getElementById("mailBox").onblur = calCart;
      document.getElementById("phoneBox").onblur = calCart;
      document.getElementById("banquetBox").onblur = calCart;
      //When onchange occurs the calCart function is run. 
      document.getElementById("sessionBox").onchange = calCart;
      document.getElementById("mediaCB").onclick = calCart;
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
      sessionStorage.setItem("confGroup", document.getElementById("groupBox").value);
      sessionStorage.setItem("confMail", document.getElementById("mailBox").value);
      sessionStorage.setItem("confPhone", document.getElementById("phoneBox").value);
      sessionStorage.setItem("confBanquet", document.getElementById("banquetBox").value);
      var confBanquet = document.getElementById("banquetBox").value;
      sessionStorage.setItem("confBanquetCost", confBanquet * 55)
      var sessionBox = document.getElementById("sessionBox");
      var confBanquetCost = confBanquet * 55;
//Takes all the different things that can be selected, also if anyone bought a package. 
      if (sessionBox.selectedIndex !== -1) {
            sessionStorage.setItem("confSession", sessionBox[sessionBox.selectedIndex].innerText);
            sessionStorage.setItem("confSessionCost", sessionBox[sessionBox.selectedIndex].value);
            var confSessionCost = sessionBox[sessionBox.selectedIndex].value;

      } else {
            sessionStorage.setItem("confSession", "");
            sessionStorage.setItem("confSessionCost", 0);
            var confSessionCost = 0;

      }
//Takes all the different things that can be selected, also if anyone bought a package. 
      if (document.getElementById("mediaCB").checked == true) {
            sessionStorage.setItem("confPack", "yes");
            sessionStorage.setItem("confPackCost", 115);
            var confPackCost = 115;

      } else {
            sessionStorage.setItem("confPack", "no");
            sessionStorage.setItem("confPackCost", 0);
            var confPackCost = 0;
      }
      //keeps and shows the offical amount of the cost put all together. 
      sessionStorage.setItem("confTotal", parseFloat(confSessionCost)+ parseFloat(confBanquetCost)+ parseFloat(confPackCost));
      //Calls the function in to display the data that the user inputs to the fields. 
      writeSessionValues();
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