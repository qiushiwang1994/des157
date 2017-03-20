$(document).ready(function() {
    var STORY_AMOUNT = 4;
    var PLAYER_VOLUMN = 1;

    var currentStory = 1;

    $('#player').prop('volume', PLAYER_VOLUMN);

    var showStory = function(storyNum) {
        $('#story-' + storyNum).css('display', 'block');
        $('#story-' + storyNum).css("background-image", 'url("image/story_' + storyNum + '.jpg")')
        $.each($('#story-' + storyNum + ' .fade-in'), function(i, el) {
            var delay = i * 1800;
            $(el).delay(delay).fadeIn(1800);
        });
    };

    var hideStory = function(storyNum) {
        $('#story-' + storyNum).css('display', 'none');
    }

    showStory(currentStory);

    $('.continue-button').click(function() {
        hideStory(currentStory);
        currentStory++;
        showStory(currentStory);
    });


    $('.mute-button').click(function() {
        if ($(this).is('.glyphicon-volume-off')) {
            $('#player').prop('volume', 0);
        }

        if ($(this).is('.glyphicon-volume-up')) {
            $('#player').prop('volume', PLAYER_VOLUMN);
        }

        $(this).toggleClass('glyphicon-volume-off');
        $(this).toggleClass('glyphicon-volume-up');
    });

    var buttonBook = document.getElementById('buttonBook');
    var buttonMap = document.getElementById('buttonMap');
    var hidenMap = document.getElementById('hidenMap');
    var close = document.getElementById('close');

    buttonMap.addEventListener('click', function() {
        hidenMap.style.display = "block";
    });
    close.addEventListener('click', function() {
        hidenMap.style.display = 'none';
    });

});
