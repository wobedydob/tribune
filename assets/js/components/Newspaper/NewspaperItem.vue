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

        <div class="row">

            <div class="body">

                <news-article
                    v-if="newspaper && article.type === 'article'"
                    v-for="article in this.articles" :key="article.id"
                    :article="article
                ">
                </news-article>

                <news-advert
                    v-if="newspaper && article.type === 'advert'"
                    v-for="article in this.articles" :key="article.id"
                    :advert="article
                ">
                </news-advert>

            </div>

        </div>

    </div>

</template>

<script>

import NewspaperHeadline from "./NewspaperHeadline.vue";
import NewsArticle from "./NewsArticle.vue";
import NewsAdvert from "./NewsAdvert.vue";

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
        NewsArticle,
        NewsAdvert
    }
}
</script>
