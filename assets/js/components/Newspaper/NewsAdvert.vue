<template>

    <div class="article advert">

        <template v-if="advert.type === 'advert'">

            <div class="headline">

                <h2 v-if="advert.headline">
                    {{ advert.headline }}
                </h2>

                <p class="credit" v-if="advert.author">
                <span class="credit">
                    by {{ advert.author }}
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

        </template>

    </div>

</template>

<script>
export default {
    name: "NewsAdvert",

    props: ['advert'],

    data() {
        return {
            headline: '',
            body: [],
            author: ''
        }
    },

    created() {
        if (this.advert) {
            this.headline = this.advert.headline;
            this.body = this.advert.body;
            this.author = this.advert.author
        }
    },

}
</script>
