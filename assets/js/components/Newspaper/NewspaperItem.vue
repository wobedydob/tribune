<template>

    <div class="newspaper">

        <newspaper-headline></newspaper-headline>

        <div class="content">

            <div class="columns">

                <news-article v-if="newspaper"  v-for="article in this.articles" :key="article.id" :article="article"></news-article>

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
            articles: {}
        }
    },

    watch: {
        newspaper: {
            handler: function(newValue, oldValue) {
                if (newValue) {
                    this.articles = newValue.articles;
                }
            },
            deep: true
        }
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
        NewspaperHeadline,
        NewsArticle
    }
}
</script>
