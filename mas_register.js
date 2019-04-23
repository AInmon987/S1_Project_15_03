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
      document.getElementById("regSubmit").onclick = sessionTest;
      document.getElementById("fnBox").onblur = calCart;
      document.getElementById("inBox").onblur = calCart;
      document.getElementById("groupBox").onblur = calCart;
      document.getElementById("mailBox").onblur = calCart;
      document.getElementById("phoneBox").onblur = calCart;
      document.getElementById("banquetBox").onblur = calCart;

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
      var confNames
}