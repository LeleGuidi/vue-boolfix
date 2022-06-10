<template>
    <main class="main">
        <div class="main_container">
            <!-- <h2>cosa vuoi vedere?</h2> -->
            <SectionFilms/>
            <SectionSeries/>
        </div>
    </main>
</template>

<script>
import SectionFilms from '../sections/SectionFilms.vue'
import SectionSeries from '../sections/SectionSeries.vue'


export default {
    components: { 
        SectionFilms,
        SectionSeries 
    },
    name: 'BaseMain',
}
</script>

<style lang="scss" scoped>
.main {
    background-color: #434343;
    min-height: calc(100vh - 3.5938rem);
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        color: #cf0000;
        text-transform: uppercase;
        font-size: 3rem
    }
}
</style>