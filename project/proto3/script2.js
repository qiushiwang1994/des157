// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    //buttonMap
    buttonMap.addEventListener("mouseover", function() {
        console.log("mouse over on button");
        tipTimer = setTimeout(showButtonTipM, 200);
    });
    buttonMap.addEventListener("mouseout", function() {
        console.log("mouse out on button");
        clearTimeout(tipTimer);
        buttonTipM.style.opacity = 0;
    });

    function showButtonTipM() {
        console.log("showing tip");
        buttonTipM.style.opacity = 0.5;
    }

    //buttonBook

    buttonBook.addEventListener("mouseover", function() {
        console.log("mouse over on button");
        tipTimer = setTimeout(showButtonTipB, 200);
    });
    buttonBook.addEventListener("mouseout", function() {
        console.log("mouse out on button");
        clearTimeout(tipTimer);
        buttonTipB.style.opacity = 0;
    });

    function showButtonTipB() {
        console.log("showing tip");
        buttonTipB.style.opacity = 0.5;
    }



});
