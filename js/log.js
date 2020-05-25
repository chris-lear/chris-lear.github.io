'use strict';
var game;
var Game = {};
var Setup = {};

var Powers = {
    'ottoman':"The Ottomans",
    'hapsburg':"The Hapsburgs",
    'england':"England",
    'france':"France",
    'pope':"The Papacy",
    'protestant':"The Protestants",
    'independent': 'The Independents',
    'total': 'Total'
};

var PowersTurn = function() {
    this.dice = [0,0,0,0,0,0,0];
    this.cards = [];
}
var Turn = function() {
    Object.keys(Powers).forEach(power=> {
        this[power] = new PowersTurn();
    });


}
var TurnDice = function() {
    this.ottoman = [0,0,0,0,0,0,0];
    this.hapsburg = [0,0,0,0,0,0,0];
    this.england = [0,0,0,0,0,0,0];
    this.france = [0,0,0,0,0,0,0];
    this.pope = [0,0,0,0,0,0,0];
    this.protestant = [0,0,0,0,0,0,0];
    this.independent = [0,0,0,0,0,0,0];
};


Setup.currentBattle = null;
Setup.currentTurn = 0;
Setup.currentImpulse = 0;
Setup.currentPlayer = 0;
Setup.Battles = [];
Setup.Explorers = [];
Setup.Conquistadors = [];
Setup.Reformations = [];
Setup.CounterReformations = [];
Setup.PowerTurn = {'cards':[],'score':[]};
Setup.Turns = [];
Setup.ReformationDice = [];
Setup.DebateDice = [];
Setup.BattleDice = [];
var Battle = function(b) {
    Object.assign(this,JSON.parse(JSON.stringify(b)));
    if (this.type=='Diet') {
        this.initiator = 'pope';
    }
    this.dice = [];
    this.addDice = (who, what) => {
        if (!this.dice[who]) {
            this.dice[who] = [0,0,0,0,0,0,0];
        }
        this.dice[who][what]++;
    }
    this.initiatorName = function() {
        return Powers[this.initiator];
    }
    this.winnerName = function() {
        if (this.type == 'Exploration' || this.type == 'Conquest') {
            return '';
        }
        return Powers[this.winner];
    }
    this.loserName = function() {
        if (this.type == 'Exploration' || this.type == 'Conquest') {
            return '';
        }
        return Powers[this.loser];
    }
    this.description = function() {
        switch (this.type) {
            case 'Field Battle':
                return `Battle of ${this.location}`;
                break;
            case 'Naval':
                return `(${this.type}) Battle of ${this.location}`;
                break;
            case 'Assault':
                return `Siege of ${this.location}`;
                break;
            case 'Foreign War':
                return `Foreign war in ${this.location}`;
            case 'Debate':
                return `Debate in ${this.location}`;
            case 'Diet':
                return `Diet of Worms`
            case 'Exploration':
                return `${this.winner} Discovers ${this.location}`;
            case 'Conquest':
                return `${this.winner} Conquers ${this.location}`;
            default:
                console.log('unknown battle type '+this.type);
        }
        return `${this.type} in ${this.location}`
    }
    this.class = function() {
        return this.type.toLowerCase().replace(/ /g,'-');
    }
    this.getDate = function(game) {
        if (this.type=='Diet') {
            return 'Jan-May 1521';
        }
        return game.date(this.turn,this.impulse);
    }
    this.getDice = function(which) {
        var out = '';
        var dChars = ['','⚀','⚁','⚂','⚃','<span class="hit">⚄</span>','<span class="hit">⚅</span>'];
        var thing = this.dice[this.loser];
        if (which == 'winner') {
            thing = this.dice[this.winner];
        }
        if (!thing) {
            return '';
        }
        thing.forEach((d,i)=>{out+=('&#8203;'+dChars[i]).repeat(d)});
        return out;
    }
    this.getWinnerDice = function() {
        return this.getDice('winner');
    }
    this.getLoserDice = function() {
        return this.getDice('loser');
    }
}
Game.reformation = function(location, result, type) {
    var thing;
    if (type=="counter ") {
        thing = this.CounterReformations;
    } else {
        thing = this.Reformations;
    }
    if (!thing[location]) {
        thing[location] = {success:0,fail:0};
    }
    thing[location]
    if (result=='succeeds!') {
        thing[location].success++;
    } else {
        thing[location].fail++;
    }
}
Game.reformationDice = function(who, what) {
    var dice = what.split(/\s*,\s*/);
    dice.forEach(n=>{
        this.ReformationDice[this.currentTurn][who][n]++;
    });
}
Game.debateDice = function(who, what) {
    var dice = what.split(/\s*,\s*/);
    dice.forEach(n=>{
        this.DebateDice[this.currentTurn][who][n]++;
    });
}
Game.hitDice = function(who, what, hits) {
    if (!what) {
        return;
    }
    var g = this;
    var dice = what.split(/\s*,\s*/);
    $(dice).each(function() {
        g.BattleDice[g.currentTurn][who][this]++;
        if (g.currentBattle) {
            g.currentBattle.addDice(who,this);
        }
    });
}
Game.addImpulse = function(turn, who, impulseNumber, type, num, ops) {
    this.Turns[turn][who]['cards'].push({'ops':+ops, 'type':type, 'cardNumber':+num});
    this.currentTurn = +turn;
    this.currentImpulse = +impulseNumber;
    this.currentPlayer = who;
}
Game.addBattle = function(text, type, where, winner, other) {
    var loser;
    var initiator = this.currentPlayer;
    switch (winner) {
        case 'is successful':
            winner = this.currentPlayer;
            loser = other;
            break;
        case 'fails':
            loser = this.currentPlayer;
            winner = other;
            break;
        default:
            loser = other;
    }
    if (type=='Debate' || type=='Diet') {
        loser = ['protestant','pope'].filter(item=>item != winner)[0];
    }
    if (type=='Exploration') {
        initiator = this.Explorers[winner];
    }
    if (type=='Conquest') {
        initiator = this.Conquistadors[winner];
    }
    this.currentBattle = new Battle({
        'turn': this.currentTurn,
        'impulse': this.currentImpulse,
        'initiator': initiator,
        'type': type,
        'location': where,
        'winner': winner,
        'loser':loser,
        'text':text
    });
    this.Battles.push(this.currentBattle);
}
Game.power= function(text) {
    if (!text) {
        return;
    }
    text = text.replace(/\s*Tercios\s*/,'');
    var powers = {
        'The Ottomans':'ottoman',
        'Ottoman':'ottoman',
        'The Hapsburgs':'hapsburg',
        'Hapsburg':'hapsburg',
        'Hapsburgs':'hapsburg',
        'England':'england',
        'France':'france',
        'English':'england',
        'French':'france',
        'The Catholics':'pope',
        'The Papacy':'pope',
        'Protestant':'protestant',
        'Protestant Diet of Worms':'protestant',
        'Catholic Diet of Worms':'pope',
        'The Protestants':'protestant',
        'Papal':'pope',
        'Anti-Piracy':'hapsburg',
        'Ottoman Piracy':'ottoman',
        'Persia':'independent',
        'Persian':'independent',
        'Hungarian/Bohemian':'independent',
        'Hungary/Bohemia':'independent',
        'Independent':'independent',
        'Scotland':'independent',
        'Scottish':'independent',
        'The Independents':'independent',
        'independent':'independent',
    };
    if (powers[text]) {
        return powers[text];
    } else {
        console.log(text + ' interpreted as independent');
        return "independent";
    }
}
Game.extract = function(power, turnNumber) {
    var ret = {
        count:function(dice) {
            if (!dice) {
                return 0;
            }
            return dice.reduce((a,c)=>a+=c);
        }
    };
    // battleDice, debateDice, reformationDice per turn
    ret.battleDice = this.BattleDice[turnNumber][power];
    ret.debateDice = this.DebateDice[turnNumber][power];
    ret.reformationDice = this.ReformationDice[turnNumber][power];
    var cards = this.Turns[turnNumber][power]['cards'];


    ret.totalDice = ret.count(ret.debateDice)+ret.count(ret.reformationDice)+ret.count(ret.battleDice);
    ret.allDice = addvector(addvector(ret.battleDice,ret.debateDice),ret.reformationDice);
    ret.allDiceText = ret.allDice.reduce((a,c,i)=>{if (!i) return ''; return a+' ' + c + ' '+ i + 's';},'');
    ret.hits = ret.allDice.reduce((a,c,i)=>{if (i>4) {return a+=c;} else return a;},0);
    ret.hitsPerc = ret.hits/ret.totalDice||0;
    ret.diceTotal = ret.allDice.reduce((a,c,i)=>{if(!i)return 0; return a+(c*i);},0);
    ret.averageDice = ret.diceTotal/ret.totalDice||0;
    ret.cards = [].concat(...cards);
    ret.cardcount = ret.cards.length;
    ret.ops = ret.cards.reduce((acc,curr)=>acc+curr.ops, 0);
    ret.battlesInitiated = this.battlesOnTurn(turnNumber).reduce((acc,curr)=>{return (curr.initiator==power && curr.type!='Exploration' && curr.type!='Conquest')?acc+1:acc;},0)
    ret.battlesWon = this.battlesOnTurn(turnNumber).reduce((acc,curr)=>{return (curr.winner==power)?acc+1:acc;},0)
    ret.battlesLost = this.battlesOnTurn(turnNumber).reduce((acc,curr)=>{return (curr.loser==power)?acc+1:acc;},0)
    if (ret.ops) {
        ret.averageOps = ret.ops/ret.cards.length;
    } else {
        ret.averageOps = 0;
    }
    return ret;
}
Game.date = function(turn,impulse) {
    var baseYear = 1516 + turn*4;
    var month = Math.floor(impulse*4*12/this.maxImpulse(turn));
    var year = Math.floor(month/12);
    month = month%12;
    const date = new Date(2009, month, 10);  // 2009-11-10
    month = date.toLocaleString('default', { month: 'long' });
    return month + " " + (baseYear+year);
}
Game.maxImpulse = function(turn) {
    var max = 0;
    for (var power in this.Turns[turn]) {max = this.Turns[turn][power]['cards'].length>max?this.Turns[turn][power]['cards'].length:max;};
    return max;
}

Game.parsePhase = function(phase) {
    var name = phase.match(/\*\* (.*?) \.*?Phase *\*/)[1];
    switch(name) {
        case "Luther's 95 Thesis":
            this.parseTheses(phase);
            break;
        case "Action":
            this.parseAction(phase);
            break;
        case "Card Draw":
            break;
        case "Diet of Worms":
            this.parseDiet(phase);
            break;
        case "Diplomacy":
            break;
        case "New World":
            this.parseNewWorld(phase);
            break;
        case "Spring Deployment":
            break;
        case "Winter":
            this.parseWinter(phase);
            break;
        default:
            console.log(name + ' not implemented');
    }
}


Game.parseDebateDice = function(text) {
    dice1 = text.match(/Protestant .*dic?e roll: (.*?) --/);
    this.debateDice('protestant',dice1[1]);
    dice2 = text.match(/Catholic .*dic?e roll: (.*?) --/);
    this.debateDice('pope',dice2[1]);

}
Game.parseDiet = function(text) {
    var winner = text.match(/(.*) wins? the Diet of Worms/);
    if (winner) {
        winner = this.power(winner[1]);
    } else {
        winner = 'pope';// not true
    }
    this.addBattle(text,'Diet',"Worms",winner);
    this.parseHits(text);
}
Game.parseReformations = function(text) {
    var refs = [...text.matchAll(/(?:Counter )?Reformation attempt in [\s\S]*?The (?:counter )?reformation roll in .*/g)];
    refs.forEach(ref=>{

        this.reformation(ref[1],ref[3],ref[2]);
        this.parseReformationDice(text);
    });

}

Game.parseReformationDice = function(text) {
    var dice1 = text.match(/Protestant dic?e roll: (.*?) --.*high roll/);
    if (dice1) {
        this.reformationDice('protestant',dice1[1]);
    }
    var dice2 = text.match(/Catholic dic?e roll: (.*?) --.*high roll/);
    if (dice2) {
        this.reformationDice('pope',dice2[1]);
    }

}


Game.parseTheses = function(text) {
    this.parseReformations(text);
}

Game.parseImpulse = function(text) {
    var powers = {'Ottoman':'ottoman','Hapsburg':'hapsburg','English':'england','French':'france','Papal':'pope','Protestant':'protestant'};
    var whowhich = text.match(/Turn (\d), (\w*) (\d*).*impulse/);
    var turn = whowhich[1];
    var who = powers[whowhich[2]];
    var impulseNumber = whowhich[3];
    var card = text.match(/.*plays? the following card (.*?):[\s\S]*?#(\d*) -\s*Ops (\d)/);
    if (!card) {
        return;
    }
    var type = card[1];
    var num = card[2];
    var ops = card[3];
    var types = {"for Command Points":'CPs',"as an Event":'Event',"as a Mandatory Event":'Mandatory'}
    this.addImpulse(turn, who, impulseNumber, types[type], num, ops);
    this.currentBattle = null;
    this.parseReformations(text);
    this.parseBattles(text);
}

Game.parseBattles = function(text) {
    var loser;
    var assault = [...text.matchAll(/\*\* Assault of (.*)\*\*[\s\S]*?(.*?) dic?e.*\(defending\)[\s\S]*?assault in \1 (.*)!/g)];
    assault.forEach(a=> {
        this.currentBattle = null;
        this.addBattle(a[0],'Assault',a[1],a[3],this.power(a[2]));
        this.parseHits(a[0]);
    });

    var battle = [...text.matchAll(/\*\* Battle of (.*) \*\*[\s\S]*?(.*?) dic?e: [\s\S]*?(.*?) dic?e: [\s\S]*?\s\s*(.*?) wins? the battle of *\1/g)];
    battle.forEach(b=> {
        this.currentBattle = null;
        loser = [this.power(b[2]),this.power(b[3])].filter(item=>item!=this.power(b[4]))[0];
        this.addBattle(b[0],'Field Battle',b[1],this.power(b[4]),loser);
        this.parseHits(b[0]);
    });

    var foreignWar = [...text.matchAll(/to fight a foreign war[\s\S]*?\*\* Battle of (.*) \*\*[\s\S]*?(.*?) dic?e: [\s\S]*?(.*?) dic?e: [\s\S]*?War with \1( is resolved!)?/g)];
    foreignWar.forEach(f=> {
        var winner, loser;
        this.currentBattle = null;
        if (f[4]) {
            winner = f[2];
            loser = f[3];
        } else {
            winner = f[3];
            loser = f[2];
        }
        this.addBattle(f[0],'Foreign War',f[1],this.power(winner),this.power(loser));
        this.parseHits(f[0]);
    });

    var navals = [...text.matchAll(/\*\* Naval Combat in (.*?), (.*) vs\. (.*?) \*\*[\s\S]*?(.*?) win the naval battle in \1/g)];
    navals.forEach(naval=> {
        loser = [naval[2],naval[3]].filter(item=>item!=naval[4])[0];
        this.addBattle(naval[0],'Naval', naval[1],this.power(naval[4]),this.power(loser));
        this.parseHits(naval[0]);
    });

    var debates = [...text.matchAll(/(.*) calls? a debate in the (.*) language zone[\s\S]*?(.*) wins? the debate.*/g)];
    debates.forEach(debate=>{
        this.currentBattle = null;
        this.addBattle(debate[0],'Debate',debate[2],this.power(debate[3]));
        this.parseHits(debate[0]);
    });


}


Game.parseHits = function(text) {
    var rolls = [...text.matchAll(/\*\* (.*?) (?:siege artillery )?dic?e (?:roll|\(3-6 to hit\)): (.*?) -- (\d*) (?:extra )?hits?.*?(\*\*)?(, making \d* total)?/g)];
    rolls.forEach(hit=>{

        if (hit[4]) {
            this.hitDice(this.power(hit[1]),hit[2],hit[3]);
        } else {
            switch(hit[1]) {
                case 'Anti-Piracy':
                case 'Ottoman Piracy':
                    break;
                default:
                    this.hitDice(this.power(hit[1]),hit[2],hit[3]);
                    break;
            }
        }
    });
}

Game.parseAction = function(text) {
    var impulses = [...text.matchAll(/Turn \d, .*impulse\r?\n[\s\S]*?(?=(Turn \d, .*impulse)|$)/g)];
    impulses.forEach((impulse)=> {
        this.parseImpulse(impulse[0]);
    });
}

Game.parseNewWorld = function(text) {
    this.parseExplorers(text);
    this.parseConquests(text);
}

Game.parseExplorers = function(text) {
    var explorers = [...text.matchAll(/(.*) explorer (?:(?:selected:)|(?:is)) (.*)/g)];
    explorers.forEach(x=>{this.Explorers[x[2]] = Game.power(x[1])});
    var explorations = [...text.matchAll(/(.*) discovers (.*)!!!/g)];
    explorations.forEach(exploration=>{
        this.addBattle(exploration[0], 'Exploration', exploration[2], exploration[1]);
    });
}

Game.parseConquests = function(text) {
    var conquistadors = [...text.matchAll(/(.*) conquistador selected: (.*)/g)];
    conquistadors.forEach(x=>{
        this.Conquistadors[x[2]] = Game.power(x[1])
    });
    var conquests = [...text.matchAll(/(.*) conquers (.*)!!!/g)];
    conquests.forEach(conquest=>{
        this.addBattle(conquest[0], 'Conquest', conquest[2], conquest[1]);
    });
}
Game.parseWinter = function(text) {
}










Game.update = function(t) {
    this.BattleDice.push(new TurnDice());
    this.DebateDice.push(new TurnDice());
    this.ReformationDice.push(new TurnDice());
    this.Turns.push(new Turn()); // Turn 0 diet of worms
    var turns = t.split(/\*\* Start of Turn \d \*\*/)
    turns.shift();

    turns.forEach(turn=> {
        this.Turns.push(new Turn());
        this.BattleDice.push(new TurnDice());
        this.DebateDice.push(new TurnDice());
        this.ReformationDice.push(new TurnDice());
        turn.match(/\*\*.*?Phase \*\*[\s\S]*?(?=(\*\*.*?Phase \*\*)|$)/g).forEach(phase=> {
            this.parsePhase(phase);
        });
    });
}

Game.showStats = function(turnNumber) {

    var total = {
        battlesInitiated: 0,
        cardcount: 0,
        diceTotal: 0,
        hits: 0,
        ops: 0,
        reformationDice: 0,
        totalDice: 0
    }


    var powers = Object.keys(Powers);
    $('#stats tbody tr').remove();
    powers.forEach(power=>{
        var data;
        if (turnNumber == -1 ) {
            data = {
                battlesInitiated: 0,
                battlesWon: 0,
                battlesLost: 0,
                cardcount: 0,
                diceTotal: 0,
                hits: 0,
                ops: 0,
                reformationDice: 0,
                totalDice: 0
            }
            this.Turns.forEach((t,i)=>{
                var oneTurn = this.extract(power,i);
                data.cardcount += oneTurn.cardcount;
                data.ops += oneTurn.ops;
                data.averageOps = data.ops/data.cardcount;
                data.totalDice += oneTurn.totalDice;
                data.diceTotal += oneTurn.diceTotal;
                data.averageDice = data.diceTotal/data.totalDice;
                data.battlesInitiated += oneTurn.battlesInitiated;
                data.battlesWon += oneTurn.battlesWon;
                data.battlesLost += oneTurn.battlesLost;
                data.hits += oneTurn.hits;
                data.hitsPerc = data.hits/data.totalDice;
            });
        } else {
            data = this.extract(power, turnNumber);
        }
        total.cardcount += data.cardcount;
        total.ops += data.ops;
        total.averageOps = total.ops/total.cardcount;
        total.totalDice += data.totalDice;
        total.diceTotal += data.diceTotal;
        total.averageDice = total.diceTotal/total.totalDice;
        total.battlesInitiated+= data.battlesInitiated;
        total.hits += data.hits;
        total.hitsPerc = total.hits/total.totalDice;

        if (power=='total') {
            data = total;
            data.battlesWon = data.battlesLost = data.battlesInitiated;
        }
        $('#stats tbody').append(
            `<tr id="${power}" class="stats-row">
            <td ><span class="power ${power}">${Powers[power]}</span></td>
            <td class="cards-played">${data.cardcount}</td>
            <td class="total-ops">${data.ops}</td>
            <td class="average-ops">${data.averageOps.toFixed(2)}</td>
            <td class="total-dice" title="${data.allDiceText}">${data.totalDice}</td>
            <td class="average-dice">${data.averageDice.toFixed(2)}</td>
            <td class="hits">${data.hits}</td>
            <td class="hits-percentage">${(data.hitsPerc*100).toFixed(2)}</td>
            <td class="battles-initiated">${data.battlesInitiated}</td>
            <td class="battles-won">${data.battlesWon}</td>
            <td class="battles-lost">${data.battlesLost}</td>
            </tr>`);
/*
        var overview = $(`
            <table class='pure-table ${power} overview'>
            <thead>
            <tr>
            <th>${Powers[power]}</th>
            </tr>
            </thead>
            <tbody class='stats'>
            </tbody>
            </table>`);
        $('#overviews').append(overview);
    */
    });
    $('#battles').empty();
    this.battlesOnTurn(turnNumber).forEach(battle=>{
        $('#battles').append($(`<tr class="battle ${battle.winner} ${battle.loser} ${battle.initiator}">

            <td><span class="date" title="Turn ${battle.turn} Impulse ${battle.impulse}">${battle.getDate(this)}</span></td>
            <td><span class="initiator power ${battle.initiator}">${battle.initiatorName()}</span></td>
            <td><span class="battleDesc ${battle.class()}" title="${battle.text}"> ${battle.description()}</span></td>
            <td><span class="winner power ${battle.winner}">${battle.winnerName()}</span><br/><span class="dice winner-dice">${battle.getWinnerDice()}</span></td>
            <td><span class="loser power ${battle.loser}">${battle.loserName()}</span><br/><span class="dice loser-dice">${battle.getLoserDice()}</span></td>
            </tr>`));
    });
}
Game.battlesOnTurn = function(turnNumber) {
    if (turnNumber === -1) {
        return this.Battles;
    }
    return this.Battles.filter(battle=>{return (battle.turn==turnNumber);});
}

var G = function(){
    Object.assign(this,JSON.parse(JSON.stringify(Setup)));
};
G.prototype = Game;
function addvector(a,b){
    if (!a&&!b) {
        return [];
    }
    if (!b){return a;};
    if(!a) return b;
    return a.map((e,i) => e + b[i]);
}

function update(e) {
    game = new G();
    game.update($('#gamelog').text());
    $('#stats-selector .turn-selector').remove();
    $('#stats-selector').append($(`<span class='turn-selector' data-turn=-1>All</span>`));
    game.Turns.forEach((t,i)=>{
        $('#stats-selector').append($(`<span class='turn-selector turn-{$i}' data-turn=${i}>Turn ${i}</span>`));
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
        //clearTimeout(timeout);
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

