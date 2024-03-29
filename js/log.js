var game;
function update() {
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
        fetchGame('games/'+$(this).attr('gameid') + '.txt');
    });
    $('#right').on('mouseover', 'tbody tr',function() {
        $(this).addClass('hover');
    });
    $('#right').on('mouseout', 'tbody tr',function() {
        $(this).removeClass('hover');
    });
    $('#stats').on('click','tr', function() {
        $('#stats tr').removeClass('selected');
        $(this).addClass('selected');
        var power = $(this).attr('id');
        $('#stats').data('power',power);
        if (power == 'total') {
            $('tr.battle').show();
        } else {
            $('tr.battle').hide();
            $('tr.battle.'+power).show();
        }
    });
    $('#stats-selector').on('click', 'span', function() {
        if ($(this).data('turn')) {
            $('#stats-selector span').removeClass('selected');
            $(this).addClass('selected');
            game.showStats($(this).data('turn'));
            var power = $('#stats').data('power') || "total";
            $(`#${power}`)[0].click();
        }
    });
    function fetchGame(file) {
        $.get(file, function(data) {
            $('#gamelog').text(data);
            update();
        });
    }
    $('#gameselector button')[14].click();
    $('#log-toggle').on('click',x=>{
        if ($(x.target).hasClass('show')) {
            $(x.target).attr('class','hide');
            $('#left').show();
        } else {
            $(x.target).attr('class','show');
            $('#left').hide();
        }
    });
    $('#left').hide();
});
