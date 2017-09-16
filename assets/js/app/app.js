import Vue from 'vue';
import welcome from './components/welcome.vue';

window.Vue = Vue;

Vue.component('welcome', welcome);

const app = new Vue({
    el: '#app'
});


