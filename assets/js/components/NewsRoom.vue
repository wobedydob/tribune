<template>

    <div class="newspaper">

        <newspaper-item :newspaper="getNewspaper(0)"></newspaper-item>

    </div>

</template>

<script>

import axios from "axios";
import NewspaperItem from "./Newspaper/NewspaperItem.vue";

export default {
    name: "NewsRoom",

    data() {
        return {
            newspapers: {},
            newestPaper: {},
        }
    },

    created() {
        axios.get(this.$API_URL)
            .then(response => {

                let newspapers = response.data.newspapers;

                this.newspapers = newspapers
                this.newestPaper = this.getNewest(newspapers)
            })
            .catch(error => {
                console.log(error)
            })
        ;
    },

    methods: {

        getNewspaper(id = 0) {

            return this.getById(this.newspapers, id)

        },

        getNewest(data) {
            return data.slice(-1)[0];
        },

        getById(data, id) {
            return data[id];
        }

    },

    components: {
        NewspaperItem
    }

}
</script>
