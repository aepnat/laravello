import './bootstrap';
import Vue from 'vue';
import apolloProvider from './apollo.config';
import router from "./router.config";

window.Vue = Vue;

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
