const diceChart = function(dice) {

    var html = '';
    var Dice = ['⚀','⚁','⚂','⚃','⚄','⚅'];
    var Class = ['ones','twos','threes','fours','fives','sixes'];
    var col,cols='';
    var max=dice.reduce((acc,curr) => {return acc>curr?acc:curr;});
    dice.forEach((x,i)=>{
        if (!i) {
            return;
        }
        col = `<svg class='die' viewBox="0 0 7.1 7.1"><text x="-1" y="7.8" font-size="12px">${Dice[i-1]}</text></svg>`.repeat(x);
        padding = `<svg viewBox="0 0 7.1 7.1"><text x="-1" y="7.8" font-size="12px"> </svg>`.repeat(max-x);
        cols += `<div class='dice-stack ${Class[i-1]}'>${padding}${col}</div>`;
    });
    return `<div class='dice-chart'>${cols}<div class='dice-stack-pad'></div></div>`;
}
