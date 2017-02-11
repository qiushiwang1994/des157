// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var picOne = document.getElementById("picOne");
    var picTwo = document.getElementById("picTwo");
    var picThr = document.getElementById("picThr");
    var picFou = document.getElementById("picFou");
    var tipOne = document.getElementById("tipOne");
    var tipTwo = document.getElementById("tipTwo");
    var tipThr = document.getElementById("tipThr");
    var tipFou = document.getElementById("tipFou");
    var tipTimer;

    picOne.addEventListener("mouseover", function() {
        console.log("mouseover on picture one");
        tipTimer = setTimeout(showOneTip, 1000);
    });

    picOne.addEventListener("mouseout", function() {
        console.log("mouseout on picture one");
        clearTimeout(tipTimer);
        tipOne.style.opacity = 0;
    });

    function showOneTip() {
        console.log("show msg");
        tipOne.style.opacity = 1;
    }

    picTwo.addEventListener("mouseover", function() {
        console.log("mouseover on picture two");
        tipTimer = setTimeout(showTwoTip, 1000);
    });

    picTwo.addEventListener("mouseout", function() {
        console.log("mouseout on picture two");
        clearTimeout(tipTimer);
        tipTwo.style.opacity = 0;
    });

    function showTwoTip() {
        console.log("show msg");
        tipTwo.style.opacity = 1;
    }

    picThr.addEventListener("mouseover", function() {
        console.log("mouseover on picture three");
        tipTimer = setTimeout(showThrTip, 1000);
    });

    picThr.addEventListener("mouseout", function() {
        console.log("mouseout on picture three");
        clearTimeout(tipTimer);
        tipThr.style.opacity = 0;
    });

    function showThrTip() {
        console.log("show msg");
        tipThr.style.opacity = 1;
    }
    picFou.addEventListener("mouseover", function() {
        console.log("mouseover on picture four");
        tipTimer = setTimeout(showFouTip, 1000);
    });

    picFou.addEventListener("mouseout", function() {
        console.log("mouseout on picture four");
        clearTimeout(tipTimer);
        tipFou.style.opacity = 0;
    });

    function showFouTip() {
        console.log("show msg");
        tipFou.style.opacity = 1;
    }
});
