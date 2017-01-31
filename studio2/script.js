// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

   document.f.onsubmit = processForm;  // all other js here

});
console.log('reading');



function processForm(){
  var userName = document.f.userName.value;
  var userName2 = document.f.userName2.value;
  var adj1 = document.f.adj1.value;
  var adj2 = document.f.adj2.value;
  var adj3 = document.f.adj3.value;
  var adj4 = document.f.adj4.value;
  var adj5 = document.f.adj5.value;
  var adj6 = document.f.adj6.value;

  var number = document.f.number.value;
  var userName3 = document.f.userName3.value;
  var userName4 = document.f.userName4.value;


  var myMsg= document.getElementById('myMsg');

 myMsg.innerHTML='One day ' + userName + "went out with " + userName2 + " to catch some Pokemon.<br>" + "They decided that on a " + adj1 + " day like this, the Grass Polemon were sure to be out in " + adj2 + " Forest.<br> They got their Pokeballs and set off. They really wanted a " + adj3 + " to complete their collection.<br> They were very " + adj4 + " when they heard the call of the Pokemon they really wanted. <br >But to their surprise, a giant " + number + " foot tall " + adj5 + " came bursting through the foliage!<br> It eyed them and snorted. They were scared " + adj6 + " with fright. All of the sudden " + userName3 + " made a run for it. <br> The big Pokemon left " + userName4 +
 " behind and went chasing after you." ;

 return false;

}
