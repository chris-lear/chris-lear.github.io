'use strict'


var players = [
    {
        'hapsburg':'chris-jamie',
        'protestant':'mikey',
        'pope':'filippo',
        'ottoman':'neil',
        'france':'ben',
        'england':'nick'
    },
    {
        'hapsburg':'nick',
        'protestant':'ben',
        'pope':'mikey-jamie',
        'ottoman':'filippo',
        'france':'neil',
        'england':'chris'
    },
    {
        'hapsburg':'neil',
        'protestant':'filippo',
        'pope':'nick',
        'ottoman':'chris',
        'france':'mikey-jamie',
        'england':'ben'
    },
    {
        'hapsburg':'jamie',
        'protestant':'chris',
        'pope':'ben',
        'ottoman':'nick',
        'france':'filippo',
        'england':'neil'
    }
];

$(()=>{
    $('#csv').append("Game,Turn,Nation,Player,Starting VP,VP Change,Dice Rolled,Hits\n");
    var powers = ["ottoman", "hapsburg", "england", "france", "pope", "protestant"];
    var gamenumber = 0;

    var show = function(gamenumber) {
        $.get(`games/game${gamenumber}.txt`, function(data) {
            game = new G();
            game.update(data);
            var delta, lastTurn;
            powers.forEach(power=>{
                game.Turns.forEach((turn, i) => {
                    var oneTurn = game.extract(power,i);
                    if (i>0) {
                        if (turn.ottoman.cards.length && turn.ottoman.vps) {
                            delta = oneTurn.vps-lastTurn.vps;
                            $('#csv').append(`${gamenumber},${i},${power},${players[gamenumber][power]},${lastTurn.vps},${delta},${oneTurn.diceRolled},${oneTurn.hits}\n`);
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
