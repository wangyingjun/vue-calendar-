import Vue from 'vue';
import App from './app.vue';
import './reset.scss';
import UIComponent from '../src/index'
Vue.use(UIComponent)
const app = new Vue({
    el: '#app',
    render: h => h(App)
});