"use strict"

import deckData from '../data/deck.js';
import Card from './card.js';


var hand = {
    data: function() {
        return {
            handText:'',
            deck: deckData.cards(),
        }
    },
    computed: {
        handCards: function() {
            let ids = [...this.handText.matchAll(/(?<=#)\d+/g)].map(x=>{
                return +x[0];
            });
            let filtered = this.deck.filter(x=>{
                return ids.includes(x.id);
            });
            let ret = [];
            ids.forEach((id)=>{ret.push(filtered.find(el=>el.id==id))});
            return ret;
        }
    },
    components: {
        Card
    },
    template: `
        <div id="hand">
            <textarea v-model="handText" id='input' placeholder='Paste card numbers'></textarea>
            <Card v-for="card in handCards"
                  v-bind:card = "card"
                  v-bind:key = "card.id"
                  >
            </Card>
        </div>
    `
}

export default hand;

