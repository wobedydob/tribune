import Vue from 'vue'
import HomePage from './components/HomePage.vue'

const SITE_URL = window.location.pathname.replace('index.html', '');

Vue.prototype.$SITE_URL = SITE_URL;
Vue.prototype.$API_URL = SITE_URL + 'data/dump.json';

new Vue({
    el: '#tribune',

    components: {
        'home-page': HomePage
    }

})
