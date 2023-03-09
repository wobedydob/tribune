import Vue from 'vue';
import HomePage from './components/HomePage.vue';

import MagicGrid from 'vue-magic-grid'

const SITE_URL = window.location.pathname.replace('index.html', '');

Vue.prototype.$SITE_URL = SITE_URL;

Vue.use(MagicGrid)

new Vue({
    el: '#tribune',

    components: {
        'home-page': HomePage
    }

})
