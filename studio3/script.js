// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    var A = document.getElementById("A");
    var A1 = document.getElementById("A1");
    var B = document.getElementById("B");
    var B1 = document.getElementById("B1");
    var C = document.getElementById("C");
    var C1 = document.getElementById("C1");
    var D = document.getElementById("D");
    var D1 = document.getElementById("D1");
    var E = document.getElementById("E");
    var E1 = document.getElementById("E1");
    var F = document.getElementById("F");
    var F1 = document.getElementById("F1");

    A.addEventListener('mouseover', function() {
        console.log("first picture mouse over");
        A1.style.opacity = 0.8;
        A1.src = 'https://s-media-cache-ak0.pinimg.com/736x/cd/3c/75/cd3c759b5eaf757decb442495c1f6a78.jpg';
    });

    A.addEventListener('mouseout', function() {
        console.log("first picture mouse out");
        A1.style.opacity = 0;
        A1.src = 'https://s-media-cache-ak0.pinimg.com/736x/cd/3c/75/cd3c759b5eaf757decb442495c1f6a78.jpg';

    });


    B.addEventListener('mouseover', function() {
        console.log("second picture mouse over");
        B1.style.opacity = 0.8;
        B1.src = 'https://s-media-cache-ak0.pinimg.com/736x/4a/ab/e6/4aabe63e9744ff12afef8e6b2c483405.jpg';
    });

    B.addEventListener('mouseout', function() {
        B1.style.opacity = 0;
        B1.src = 'https://s-media-cache-ak0.pinimg.com/736x/4a/ab/e6/4aabe63e9744ff12afef8e6b2c483405.jpg';

    });


    C.addEventListener('mouseover', function() {
        C1.style.opacity = 0.8;
        C1.src = 'https://s-media-cache-ak0.pinimg.com/736x/34/f9/28/34f92885bddb156d9ed7807a464d14eb.jpg';
    });

    C.addEventListener('mouseout', function() {
        C1.style.opacity = 0;
        C1.src = 'https://s-media-cache-ak0.pinimg.com/736x/34/f9/28/34f92885bddb156d9ed7807a464d14eb.jpg';

    });

    D.addEventListener('mouseover', function() {
        D1.style.opacity = 0.8;
        D1.src = 'https://s-media-cache-ak0.pinimg.com/736x/2e/17/cf/2e17cf469ea690a4f8cd715ae8fb3363.jpg';
    });

    D.addEventListener('mouseout', function() {
        D1.style.opacity = 0;
        D1.src = 'https://s-media-cache-ak0.pinimg.com/736x/2e/17/cf/2e17cf469ea690a4f8cd715ae8fb3363.jpg';

    });


    E.addEventListener('mouseover', function() {
        E1.style.opacity = 0.8;
        E1.src = 'https://s-media-cache-ak0.pinimg.com/736x/91/a2/f5/91a2f55859e1087fb9bd3294295eedfa.jpg';
    });

    E.addEventListener('mouseout', function() {
        E1.style.opacity = 0;
        E1.src = 'https://s-media-cache-ak0.pinimg.com/736x/91/a2/f5/91a2f55859e1087fb9bd3294295eedfa.jpg';

    });



    F.addEventListener('mouseover', function() {
        F1.style.opacity = 0.8;
        F1.src = 'https://s-media-cache-ak0.pinimg.com/736x/fb/c5/39/fbc5392bb1b3f08963eafc44e73d5d94.jpg';
    });

    F.addEventListener('mouseout', function() {
        F1.style.opacity = 0;
        F1.src = 'https://s-media-cache-ak0.pinimg.com/736x/fb/c5/39/fbc5392bb1b3f08963eafc44e73d5d94.jpg';

    });


});
