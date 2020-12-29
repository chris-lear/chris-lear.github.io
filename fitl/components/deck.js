"use strict"

import deckData  from '../data/deck.js';
import Card  from './card.js';


var deck = {
    data: function() {
        return {
            deckSearch:'',
            turn:1,
            discards:[],
            game:0,
            deck:deckData.cards()
        }

    },

    components: {
        Card
    },

    methods: {
    },

    computed: {
        filteredDeck: function() {
            return this.deck.filter(x=>{
                let re = new RegExp(this.deckSearch,'i');
                return x.id==this.deckSearch||x.unshaded.match(re)||x.shaded.match(re)||x.title.match(re);
            });
        }
    },

    template: `

        <div id='deck'>
            <div>
                <input v-model="deckSearch" id='search' placeholder='search' type="text"></input>
            </div>
            <div id='searched-deck'>
                <Card v-for="card in filteredDeck"
                      v-bind:card = "card"
                      v-bind:key = "card.id"
                      >
                </Card>
                <div class="card-pad"></div>
            </div>
        </div>

    `

}

export default deck;
