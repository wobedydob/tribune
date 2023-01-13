<template>

    <div class="newspaper">

        <newspaper-headline></newspaper-headline>

        <div class="content">

            <div class="columns">

                <news-column></news-column>
                <news-column></news-column>
                <news-column></news-column>
                <news-column></news-column>
                <news-column></news-column>

            </div>

            <div class="columns">

                <news-column></news-column>
                <news-column></news-column>
                <news-column></news-column>
                <news-column></news-column>
                <news-column></news-column>

            </div>

        </div>
    </div>

</template>

<script>

import NewspaperHeadline from "./NewspaperHeadline.vue";
import NewsColumn from "./NewsColumn.vue";
export default {
    name: "NewspaperItem",
    components: {
        NewspaperHeadline,
        NewsColumn
    }
}
</script>
