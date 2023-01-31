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

            <!--
            TODO: The newspaper layout should have:
            4 columns on a laptop as: outer-left left right outer-right
            3 rows when scaled down as: outer-left, left & right, outer-right
            4 rows when scaled down even more as: left, right, outer-left, outer-right
             -->

            <div class="column column-outer-left">

                <div class="article">

                    <h2 class="headline">
                        Bear strikes again
                    </h2>

                    <p class="credit">
                        <span class="credit">
                            by CHARLES OAKLEY
                        </span>
                    </p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum lacus, sed eleifend metus.
                    Etiam tristique justo libero, a venenatis purus posuere eget. Mauris lobortis enim a posuere
                    fringilla. In tincidunt tellus est, vel maximus purus imperdiet sit amet. Cras non tellus ipsum.
                    Duis sagittis tempor purus quis facilisis. Aenean semper magna non erat facilisis viverra.
                    Suspendisse potenti. Curabitur in dolor eu justo rutrum facilisis maximus vitae enim. Proin
                    facilisis, tortor at maximus pulvinar, turpis orci dapibus mauris, et tincidunt justo leo et neque.

                </div>

                <div class="article">

                    <h2 class="headline">
                        Mr. Castillo's favorite food
                    </h2>

                    <p class="credit">
                        <span class="credit">
                            by CHARLES OAKLEY
                        </span>
                    </p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum lacus, sed eleifend metus.
                    Etiam tristique justo libero, a venenatis purus posuere eget. Mauris lobortis enim a posuere
                    fringilla. In tincidunt tellus est, vel maximus purus imperdiet sit amet. Cras non tellus ipsum.
                    Duis sagittis tempor purus quis facilisis. Aenean semper magna non erat facilisis viverra.
                    Suspendisse potenti. Curabitur in dolor eu justo rutrum facilisis maximus vitae enim. Proin
                    facilisis, tortor at maximus pulvinar, turpis orci dapibus mauris, et tincidunt justo leo et neque.

                </div>

            </div>


            <div class="column column-left">

                <div class="article">

                    <img :src="this.getImage('advert.jpg')" alt="advert" style="width:100%; height:auto;">

                    <h2 class="headline">
                        Old man robs a store for expensive wife
                    </h2>

                    <p class="credit">
                        <span class="credit">
                            by CHARLES OAKLEY
                        </span>
                    </p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum lacus, sed eleifend metus.
                    Etiam tristique justo libero, a venenatis purus posuere eget. Mauris lobortis enim a posuere
                    fringilla. In tincidunt tellus est, vel maximus purus imperdiet sit amet. Cras non tellus ipsum.
                    Duis sagittis tempor purus quis facilisis. Aenean semper magna non erat facilisis viverra.
                    Suspendisse potenti. Curabitur in dolor eu justo rutrum facilisis maximus vitae enim. Proin
                    facilisis, tortor at maximus pulvinar, turpis orci dapibus mauris, et tincidunt justo leo et neque.

                </div>

                <div class="article">

                    <h2 class="headline">
                        Charles Oakley's new book available
                    </h2>

                    <p class="credit">
                        <span class="credit">
                            by CHARLES OAKLEY
                        </span>
                    </p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum lacus, sed eleifend metus.
                    Etiam tristique justo libero, a venenatis purus posuere eget. Mauris lobortis enim a posuere
                    fringilla. In tincidunt tellus est, vel maximus purus imperdiet sit amet. Cras non tellus ipsum.
                    Duis sagittis tempor purus quis facilisis. Aenean semper magna non erat facilisis viverra.
                    Suspendisse potenti. Curabitur in dolor eu justo rutrum facilisis maximus vitae enim. Proin
                    facilisis, tortor at maximus pulvinar, turpis orci dapibus mauris, et tincidunt justo leo et neque.

                </div>

            </div>


            <div class="column column-right">

                <div class="article">

                    <h2 class="headline">
                        Little Big Fellow
                    </h2>

                    <p class="credit">
                        <span class="credit">
                            by CHARLES OAKLEY
                        </span>
                    </p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum lacus, sed eleifend metus.
                    Etiam tristique justo libero, a venenatis purus posuere eget. Mauris lobortis enim a posuere
                    fringilla. In tincidunt tellus est, vel maximus purus imperdiet sit amet. Cras non tellus ipsum.
                    Duis sagittis tempor purus quis facilisis. Aenean semper magna non erat facilisis viverra.
                    Suspendisse potenti. Curabitur in dolor eu justo rutrum facilisis maximus vitae enim. Proin
                    facilisis, tortor at maximus pulvinar, turpis orci dapibus mauris, et tincidunt justo leo et neque.

                </div>

                <div class="article">

                    <h2 class="headline">
                        Is it monday?
                    </h2>

                    <p class="credit">
                        <span class="credit">
                            by CHARLES OAKLEY
                        </span>
                    </p>

                    No...

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum lacus, sed eleifend metus.
                    Etiam tristique justo libero, a venenatis purus posuere eget. Mauris lobortis enim a posuere
                    fringilla. In tincidunt tellus est, vel maximus purus imperdiet sit amet. Cras non tellus ipsum.
                    Duis sagittis tempor purus quis facilisis. Aenean semper magna non erat facilisis viverra.
                    Suspendisse potenti. Curabitur in dolor eu justo rutrum facilisis maximus vitae enim. Proin
                    facilisis, tortor at maximus pulvinar, turpis orci dapibus mauris, et tincidunt justo leo et neque.

                </div>

            </div>

            <div class="column column-outer-right">

                <div class="article">

                    <h2 class="headline">
                        New arrival in Saint Denis
                    </h2>

                    <p class="credit">
                        <span class="credit">
                            by CHARLES OAKLEY
                        </span>
                    </p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum lacus, sed eleifend metus.
                    Etiam tristique justo libero, a venenatis purus posuere eget. Mauris lobortis enim a posuere
                    fringilla. In tincidunt tellus est, vel maximus purus imperdiet sit amet. Cras non tellus ipsum.
                    Duis sagittis tempor purus quis facilisis. Aenean semper magna non erat facilisis viverra.
                    Suspendisse potenti. Curabitur in dolor eu justo rutrum facilisis maximus vitae enim. Proin
                    facilisis, tortor at maximus pulvinar, turpis orci dapibus mauris, et tincidunt justo leo et neque.

                </div>

                <div class="article">

                    <h2 class="headline">
                        Out of ideas? So am I
                    </h2>

                    <p class="credit">
                        <span class="credit">
                            by CHARLES OAKLEY
                        </span>
                    </p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum lacus, sed eleifend metus.
                    Etiam tristique justo libero, a venenatis purus posuere eget. Mauris lobortis enim a posuere
                    fringilla. In tincidunt tellus est, vel maximus purus imperdiet sit amet. Cras non tellus ipsum.
                    Duis sagittis tempor purus quis facilisis. Aenean semper magna non erat facilisis viverra.
                    Suspendisse potenti. Curabitur in dolor eu justo rutrum facilisis maximus vitae enim. Proin
                    facilisis, tortor at maximus pulvinar, turpis orci dapibus mauris, et tincidunt justo leo et neque.

                </div>

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

        getImage(filename, location = this.$SITE_URL + 'assets/img/'){
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
