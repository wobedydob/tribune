import Vue from 'vue'
import HomePage from './components/HomePage.vue'

Vue.prototype.$API_URL = window.location.pathname.replace('index.html', '') + 'data/dump.json';

new Vue({
    el: '#tribune',

    components: {
        'home-page': HomePage
    }

})
