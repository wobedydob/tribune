<template>

    <div class="container">

        <div class="head">

            <div class="headline">
                <h1>{{ title }}</h1>

                <div class="sub-headline">
                    {{ subtitle }}
                </div>

            </div>

        </div>

        <div class="body">
            <div class="column column-center"></div>
            <div class="column column-left"></div>
            <div class="column column-right"></div>
        </div>


        <div class="footer"></div>

    </div>

</template>

<script>

import NewspaperHeadline from "./NewspaperHeadline.vue";
import NewsArticle from "./NewsArticle.vue";

export default {
    name: "NewspaperItem",

    props: ['newspaper'],

    data() {
        return {
            title: 'Saint Denis Chronicle',
            subtitle: '',

            articles: {}
        }
    },

    created() {
        this.subtitle = 'BAYOU NWA, LE - ' + this.formattedDate + ', 1902 - NEW ALEXANDRIA';
    },

    watch: {
        newspaper: {
            handler: function (newValue, oldValue) {
                if (newValue) {
                    this.articles = newValue.articles;
                }
            },
            deep: true
        }
    },

    methods: {

        getNewest(data) {
            return data.slice(-1)[0];
        },

        getById(data, id) {
            return data[id];
        }

    },

    computed: {
        formattedDate() {
            return new Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
            }).format(this.date)
        }
    },

    components: {
        NewspaperHeadline,
        NewsArticle
    }
}
</script>
