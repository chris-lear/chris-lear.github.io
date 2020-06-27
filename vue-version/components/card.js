"use strict"

var card = {
    props: ['card'],
    data: function() {
        return {
            show:true
        }
    },
    methods: {
        remove: function() {
            this.show=false;
        }
    },

    template: `
    <div class="card" v-if="show">
        <button v-on:click="remove()">x</button>
        <div class="popup"><img v-bind:src=url>
            <div class="info">
                <span v-if="card.discarded">Discarded</span>
                <span v-if="card.future">Future</span>
            </div>
        </div>
        <img v-bind:src=url v-bind:class=cardClass>
    </div>
    `,
    computed: {
        url:function() {
            return '/his/img/cards/HIS-' + ("00" + this.card.id).slice(-3) +'.png';
        },
        cardClass: function() {
            var cl=[];
            if (this.card.future) {
                cl.push('future');
            }
            if (this.card.discarded) {
                cl.push('discarded');
            }
            return cl.join(' ');
        }
    }
};

export default card;
