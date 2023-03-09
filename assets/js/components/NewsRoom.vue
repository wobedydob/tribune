<template>

    <div class="newspaper">

        <newspaper-item :newspaper="this.newestPaper"></newspaper-item>

    </div>

</template>

<script>

import api from "../services/newspapers";
import NewspaperItem from "./Newspaper/NewspaperItem.vue";

export default {
    name: "NewsRoom",

    data() {
        return {
            newspapers: {},
            newspaper: {},
            newestPaper: {},
        }
    },

    mounted() {
        this.getNewest();
        this.getNewspapers();
    },

    methods: {

        getNewspapers() {
            api.read().then(response => {
                this.newspapers = response.data;
            });
        },

        getNewspaper(id = null) {
            api.read(id).then(response => {
                this.newspaper = response.data;
            });
        },

        getNewest() {
            api.readLatest().then(response => {
                this.newestPaper = response.data;
            });
        },

    },

    components: {
        NewspaperItem
    }

}
</script>
