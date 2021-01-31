const diceChart = function(dice) {

    var Dice = ['⚀','⚁','⚂','⚃','⚄','⚅'];
    var Class = ['ones','twos','threes','fours','fives','sixes'];
    var col,cols='';
    if (!dice) {
        return '';
    }
    var max=dice.reduce((acc,curr) => {return acc>curr?acc:curr;});
    dice.forEach((x,i)=>{
        if (!i) {
            return;
        }
        if (x) {
            col = `<svg class='die' viewBox="0 0 7.1 7.1"><text x="-1" y="7.8" font-size="12px">${Dice[i-1]}</text></svg>`.repeat(x);
            var padding = `<svg viewBox="0 0 7.1 7.1"><text x="-1" y="7.8" font-size="12px"> </svg>`.repeat(max-x);
            cols += `<div class='dice-stack ${Class[i-1]}' title='${x} ${i}${x!=1?"s":""}'>${padding}${col}</div>`;
        } else {
            cols += `<div class='dice-stack padding' title='0 ${i}${x!=1?"s":""}'></div>`;
        }
    });
    return `<div class='dice-chart'>${cols}</div>`;
}
