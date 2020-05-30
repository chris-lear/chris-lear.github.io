'use strict'


var players = [
    {
        'hapsburg':'jamie',
        'protestant':'mikey',
        'pope':'filippo',
        'ottoman':'neil',
        'france':'ben',
        'england':'nick'
    },
    {
        'hapsburg':'nick',
        'protestant':'ben',
        'pope':'jamie',
        'ottoman':'filippo',
        'france':'neil',
        'england':'chris'
    },
    {
        'hapsburg':'neil',
        'protestant':'filippo',
        'pope':'nick',
        'ottoman':'chris',
        'france':'jamie',
        'england':'ben'
    }
];

$(()=>{
    $('#csv').append("Game,Turn,Nation,Player,Starting VP,VP Change,Dice Rolled,Hits\n");
    var powers = ["ottoman", "hapsburg", "england", "france", "pope", "protestant"];
    var gamenumber = 0;

    var show = function(gamenumber) {
        $.get(`game${gamenumber}.txt`, function(data) {
            game = new G();
            game.update(data);
            var delta, lastTurn;
            powers.forEach(power=>{
                game.Turns.forEach((turn, i) => {
                    var oneTurn = game.extract(power,i);
                    if (i>0) {
                        if (turn.ottoman.cards.length) {
                            delta = oneTurn.vps-lastTurn.vps;
                            $('#csv').append(`${gamenumber},${i},${power},${players[gamenumber][power]},${lastTurn.vps},${delta},${oneTurn.totalDice},${oneTurn.hits}\n`);
                        }
                    }
                    lastTurn = oneTurn;
                })
            });
        });
    }
    players.forEach((power,count) => {
        show(count);
    });

});
