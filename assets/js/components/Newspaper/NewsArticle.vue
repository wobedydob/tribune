<template>

    <div class="column">
        <div class="head">
            <span class="headline hl1">{{ this.headline }}</span>
            <p><span class="headline hl4">by {{ this.author }}</span></p>
        </div>

        <template v-for="content in body">

            <div v-if="content.type === 'text'">
                {{ content.content }}
            </div>

            <figure v-else-if="content.type === 'image'">
                <img class="media" :src="content.url" :alt="content.caption">
            </figure>

        </template>

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
