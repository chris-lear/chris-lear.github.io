'use strict'

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
let mikeyJamie = urlParams.get('mikey-jamie');
if (!mikeyJamie) {
    mikeyJamie = 'Mikey-Jamie';
}
let chrisJamie = urlParams.get('chris-jamie');
if (!chrisJamie) {
    chrisJamie = 'Chris-Jamie';
}

var players = [
    {
        'hapsburg':chrisJamie,
        'protestant':'Mikey',
        'pope':'Filippo',
        'ottoman':'Neil',
        'france':'Ben',
        'england':'Nick'
    },
    {
        'hapsburg':'Nick',
        'protestant':'Ben',
        'pope':mikeyJamie,
        'ottoman':'Filippo',
        'france':'Neil',
        'england':'Chris'
    },
    {
        'hapsburg':'Neil',
        'protestant':'Filippo',
        'pope':'Nick',
        'ottoman':'Chris',
        'france':mikeyJamie,
        'england':'Ben'
    },
    {
        'hapsburg':'Jamie',
        'protestant':'Chris',
        'pope':'Ben',
        'ottoman':'Nick',
        'france':'Filippo',
        'england':'Neil'
    },
    {
        'hapsburg':'Filippo',
        'protestant':'Neil',
        'pope':'Chris',
        'ottoman':'Ben',
        'france':'Nick',
        'england':'Jamie'
    },
    {
        'hapsburg':'Ben',
        'protestant':'Nick',
        'pope':'Neil',
        'ottoman':'Jamie',
        'france':'Chris',
        'england':'Filippo'
    },
    {
        'hapsburg':'Jamie',
        'protestant':'Nick',
        'pope':'Jamie',
        'ottoman':'Chris',
        'france':'Filippo',
        'england':'Nick'
    },
    {
        'hapsburg':'Nick',
        'protestant':'Ben',
        'pope':'Filippo',
        'ottoman':'Neil',
        'france':'Jamie',
        'england':'Chris'
    },
    {
        'hapsburg':'Chris',
        'protestant':'Jamie',
        'pope':'Nick',
        'ottoman':'Filippo',
        'france':'Ben',
        'england':'Neil'
    }

];


var Powers = {
    'hapsburg':'Habsburgs',
    'protestant':'Protestants',
    'pope':'Papacy',
    'ottoman':'Ottomans',
    'france':'France',
    'england':'England'
};

var game;

$(()=>{
    $('#csv').append("Game,Turn,Nation,Player,Starting VP,VP Change,Dice Rolled,Hits\n");
    var powers = ["ottoman", "hapsburg", "england", "france", "pope", "protestant"];
    var gamenumber = 0;
    var csv = [];

    var show = function(gamenumber) {
        return $.get(`games/game${gamenumber}.txt`);
    }
    var calls = [];
    players.forEach((power,count) => {
        calls.push(show(count));
    });
    Promise.all(calls).then((data)=>{
        data.forEach((d, gamenumber)=> {
            csv[gamenumber]=[];
            game = new G();
            game.update(d);
            var delta, lastTurn;
            powers.forEach(power=>{
                game.Turns.forEach((turn, i) => {
                    var oneTurn = game.extract(power,i);
                    if (i>0) {
                        if (turn.ottoman.cards.length && turn.ottoman.vps) {
                            if (!csv[gamenumber][i]) {
                                csv[gamenumber][i] = '';
                            }
                            delta = oneTurn.vps-lastTurn.vps;
                            let Power = Powers[power];
                            csv[gamenumber][i] += `${gamenumber},${i},${Power},${players[gamenumber][power]},${lastTurn.vps},${delta},${oneTurn.diceRolled},${oneTurn.hits}\n`;
                        }
                    }
                    lastTurn = oneTurn;
                })
            });
        });

        csv[0][5] = `0,5,Ottomans,Neil,16,4,17,5\n`;
        csv[0][5] += `0,5,Habsburgs,${chrisJamie},20,4,13,2\n`;
        csv[0][5] += `0,5,England,Nick,14,3,10,4\n`;
        csv[0][5] += `0,5,France,Ben,15,5,0,0\n`;
        csv[0][5] += `0,5,Papacy,Filippo,24,0,12,2\n`;
        csv[0][5] += `0,5,Protestants,Mikey,12,2,6,3\n`;
        csv[0][6] = `0,6,Ottomans,Neil,20,7,21,11\n`;
        csv[0][6] += `0,6,Habsburgs,${chrisJamie},24,-1,22,7\n`;
        csv[0][6] += `0,6,England,Nick,17,4,11,4\n`;
        csv[0][6] += `0,6,France,Ben,20,4,0,0\n`;
        csv[0][6] += `0,6,Papacy,Filippo,24,3,35,13\n`;
        csv[0][6] += `0,6,Protestants,Mikey,14,-1,23,12\n`;
        csv.forEach(l=>{
            $('#csv').append(l);
        });
    });

});
