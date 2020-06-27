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
        getGame: function(id) {
            this.discards=[];
            if (id==-1) {
                this.turn=9;
                this.deck = deckData.cards();
            } else {
                axios.get('../games/game'+id+".txt").then(res => {
                    [...res.data.matchAll(/\s*#(\d*).*?: (.*?) \*[\s\S]{10,4000}\2 card is permanently/g)].forEach(x=>{
                        this.discards.push(+x[1]);
                    });
                    this.turn = +res.data.match(/[\s\S]*Start of Turn (\d)/)[1];
                    for (var i=0;i<this.deck.length;i++) {
                        this.$set(this.deck[i],'future',this.deck[i].turn>this.turn);
                        this.$set(this.deck[i],'discarded',this.discards.includes(this.deck[i].id));
                    }
                });
            }
        }
    },

    computed: {
        filteredDeck: function() {
            return this.deck.filter(x=>{
                let re = new RegExp(this.deckSearch,'i');
                return x.id==this.deckSearch||x.text.match(re)||x.title.match(re);
            });
        }
    },

    template: `

        <div id='deck'>
            <div>
                <input v-model="deckSearch" id='search' placeholder='search' type="text"></input>
                <button @click="getGame(3)" >Game 3 deck</button>
                <button @click="getGame(2)" >Game 2 deck</button>
                <button @click="getGame(1)" >Game 1 deck</button>
                <button @click="getGame(0)" >Game 0 deck</button>
                <button @click="getGame(-1)" >Full deck</button>
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
