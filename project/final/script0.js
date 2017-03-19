// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
$("#toggle").hide();
$(document).click(function(){
  $("#toggle").toggle("fade");

});


});
