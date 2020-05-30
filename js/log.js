
function update(e) {
    game = new G();
    game.update($('#gamelog').text());
    $('#stats-selector .turn-selector').remove();
    $('#stats-selector').append($(`<span class='turn-selector' data-turn=-1>Summary</span>`));
    game.Turns.forEach((t,i)=>{
        if (t.ottoman.cards.length) {
            if (i > 0) {
                $('#stats-selector').append($(`<span class='turn-selector turn-${i}' data-turn=${i}>Turn ${i}</span>`));
            }
        }
    });
    $('.turn-selector')[0].click();
}


$(function() {
    var timeout;
    function highlight(text, behavior) {
        if (!text) {
            return;
        }
        if (!behavior) {
            behavior = 'smooth';
        }
        $("#gamelog").unmark({
            done: function() {
                $("#gamelog").mark(text, {
                    "accuracy": "complementary",
                    "caseSensitive": true,
                    "separateWordSearch": false,
                    "diacritics": false
                });
                $('mark')[0].scrollIntoView({
                    behavior: behavior,
                    block: "start"
                });
            }
        });
    }
    $('#battles').on('click', '.battle', function() {
        $('#battles tr').removeClass('clicked');
        $(this).addClass('clicked');
        var text = $(this).find('.battleDesc').attr('title');
        highlight(text);
    });

    $('#battles').on('mouseover', '.battle', function() {
        var text = $(this).find('.battleDesc').attr('title');
        highlight(text);
    });
    $('#battles').on('mouseout', function() {
        highlight($(this).find('.clicked .battleDesc').attr('title'), 'instant');
    });
    $('#gameselector button').on('click', function() {
        $('#gameselector button').removeClass('selected');
        $(this).addClass('selected');
        fetchGame($(this).attr('gameid') + '.txt');
    });
    $('#right').on('mouseover', 'tbody tr',function() {
        $(this).addClass('hover');
    });
    $('#right').on('mouseout', 'tbody tr',function() {
        $(this).removeClass('hover');
    });
    $('#stats').on('click','tr', function() {
        var power = $(this).attr('id');
        if (power == 'total') {
            $('tr.battle').show();
        } else {
            $('tr.battle').hide();
            $('tr.battle.'+power).show();
        }
    });
    $('#stats-selector').on('click', 'span', function() {
        $('#stats-selector span').removeClass('selected');
        $(this).addClass('selected');
        game.showStats($(this).data('turn'));
    });
    function fetchGame(file) {
        $.get(file, function(data) {
            $('#gamelog').text(data);
            update();
        });
    }
    function doPoll(){
        fetchGame('log.txt');
        timeout = setTimeout(doPoll,5000);
    }
    //doPoll();
    $('#gameselector button')[2].click();
});
