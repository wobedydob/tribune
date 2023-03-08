<template>

    <div class="article">

        <div class="headline">
            <h2>
                {{ article.headline }}
            </h2>

            <p class="credit">
                <span class="credit">
                    by {{ article.author }}
                </span>
            </p>

        </div>

        <div class="content" v-for="content in body">

            <div v-if="content.type === 'text'">
                {{ content.content }}
            </div>

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
            author: ''
        }
    },

    created() {
        if (this.article) {
            this.headline = this.article.headline;
            this.body = this.article.body;
            this.author = this.article.author
        }
    },

}
</script>
