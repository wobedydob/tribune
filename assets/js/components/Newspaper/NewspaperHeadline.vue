<template>

    <div class="head">

        <div class="header-wrapper">
            <!--        <div class="box"><span style="font-style: italic;">Weatherforcast for the next 24 hours: Plenty of Sunshine</span><br><span>Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</span></div>-->
            <header>Saint Denis Chronicle</header>
        </div>

        <div class="subhead">BAYOU NWA, LE - <span id="date">{{ formattedDate }}, 1902</span> - NEW ALEXANDRIA</div>

    </div>

</template>

<script>
export default {
    name: "NewspaperHeadline",

    data() {
        return {
            date: new Date()
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
    }

}
</script>
