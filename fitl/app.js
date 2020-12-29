"use strict"
import Vue from 'https://cdn.jsdelivr.net/npm/vue/dist/vue.esm.browser.js';
import Deck  from './components/deck.js';
import Hand  from './components/hand.js';



new Vue({
    'el':'#app',
    template: `
    <div id='app'>
    <h1>Search by ID</h1>
    <Hand></Hand>
    <h1>Whole Deck</h1>
    <Deck></Deck>
    </div>
    `,
    components: {
        Deck,
        Hand
    }
});

