document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    function loadApp() {
        console.log("function working");

        var flipbook = $('.flipbook');

        if (flipbook.width() == 0 || flipbook.height() == 0) {
            setTimeout(loadApp, 10);
            return;
        }

        $('.flipbook .double').scissor();

        $('.flipbook').turn({
            elevation: 50,

            gradients: true,

            autoCenter: true

        });
    }
    yepnope({
        test: Modernizr.csstransforms,
        yep: ['js/turn.min.js'],
        nope: ['js/turn.html4.min.js'],
        both: ['js/scissor.min.js', 'style4.css'],
        complete: loadApp
    });
    //
    var ins = document.getElementById("ins");
    var buttonIns = document.getElementById("buttonIns");
    var close = document.getElementById("close");

    buttonIns.addEventListener("click", function() {
        console.log("click button ins");
        ins.style.display = "block";
    });
    close.addEventListener("click", function() {
        console.log("close");
        ins.style.display = "none";
    });

});
