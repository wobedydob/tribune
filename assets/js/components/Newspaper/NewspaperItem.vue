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

            <div class="column">
                <news-article
                    v-if="newspaper"
                    v-for="article in this.articles" :key="article.id"
                    :article="article
                "></news-article>
            </div>

        </div>

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

        this.getImage('advert');
    },

    mounted() {

        this.articles = this.$props.newspaper

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

        getImage(filename, location = this.$SITE_URL + 'assets/img/') {
            return location + filename;
        },

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
