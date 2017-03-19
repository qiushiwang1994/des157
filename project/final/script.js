// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    var buttonMap = document.getElementById("buttonMap");
    var buttonBook = document.getElementById("buttonBook");
    var button = document.getElementById("button");

    var buttonTipA = document.getElementById("buttonTipA");
    var tipTimer;
    //button start
    button.addEventListener("mouseover", function() {
        console.log("mouse over on button");
        tipTimer = setTimeout(showButtonTipA, 200);
    });
    button.addEventListener("mouseout", function() {
        console.log("mouse out on button");
        clearTimeout(tipTimer);
        buttonTipA.style.opacity = 0;
    });

    function showButtonTipA() {
        console.log("showing tip");
        buttonTipA.style.opacity = 0.5;
    }





    alert("Hello, this message is a clarification that this project is an educational project and not for profit purpose. Copyright for all source materials are sited. ");




});
