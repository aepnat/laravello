import './bootstrap';
import Vue from 'vue';
import apolloProvider from './apollo.config';
import router from "./router.config";
import store from "./vuex.config";

window.Vue = Vue;

const app = new Vue({
    el: '#app',
    apolloProvider,
    router,
    store,
    beforeCreate() {
        store.dispatch('setLoggedIn', localStorage.getItem('isLoggedIn') === 'true').then();
        store.dispatch('fetchCurrentUser').then();
    },
});
