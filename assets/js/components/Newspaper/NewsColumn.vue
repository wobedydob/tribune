<template>

    <div class="column">
        <div class="head">
            <span class="headline hl1">{{ this.headline }}</span>
            <p><span class="headline hl4">by {{ this.author }}</span></p>
        </div>

    </div>

</template>

<script>
export default {
    name: "NewsColumn",

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
