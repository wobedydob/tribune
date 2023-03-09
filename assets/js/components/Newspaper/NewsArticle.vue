<template>

    <div class="article" :class="getClass()">

        <div class="headline">

            <h2 v-if="article.headline">
                {{ article.headline }}
            </h2>

            <p class="credit" v-if="article.author">
                <span class="credit">
                    by {{ article.author }}
                </span>
            </p>

        </div>

        <div class="content" v-for="content in body">

            <p v-if="content.type === 'text'">
                {{ content.content }}
            </p>

            <figure v-else-if="content.type === 'image'">
                <img class="media" :src="content.url" :alt="content.caption">
            </figure>

        </div>

    </div>

</template>

<script>
export default {
    name: "NewsArticle",

    props: ['article'],

    data() {
        return {
            headline: '',
            body: [],
            author: '',
            type: ''
        }
    },

    created() {
        if (this.article) {
            this.headline = this.article.headline;
            this.body = this.article.body;
            this.author = this.article.author;
            this.type = this.article.type;
        }
    },

    methods: {

        getClass() {

            if(this.type === 'advert') {
                return this.type
            }

            if(this.type === 'article') {
                return 'column';
            }

        }

    }

}
</script>
