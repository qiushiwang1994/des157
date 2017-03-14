document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    function loadApp() {
        console.log("function working");

        var flipbook = $('.flipbook');

        // Check if the CSS was already loaded

        if (flipbook.width() == 0 || flipbook.height() == 0) {
            setTimeout(loadApp, 10);
            return;
        }

        $('.flipbook .double').scissor();

        // Create the flipbook

        $('.flipbook').turn({
            // Elevation

            elevation: 50,

            // Enable gradients

            gradients: true,

            // Auto center this flipbook

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

});
