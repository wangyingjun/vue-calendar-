import Vue from 'vue';
import App from './app.vue';
import './reset.scss';
const app = new Vue({
    el: '#app',
    render: h => h(App)
});