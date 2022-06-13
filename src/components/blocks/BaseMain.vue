<template>
    <main class="main">
        <div class="main_container">
                    <!-- <h2>cosa vuoi vedere?</h2> -->
        <SectionFilms v-show="(DataShares.showSerie == false)"/>
        <SectionSeries v-show="(DataShares.showFilms == false)"/>
        </div>
    </main>
</template>

<script>
import SectionFilms from '../sections/SectionFilms.vue'
import SectionSeries from '../sections/SectionSeries.vue'
import DataShares from '../../share/DataShares'


export default {
    name: 'BaseMain',
    components: { 
        SectionFilms,
        SectionSeries
    },
    data() {
        return {
            DataShares
        }
    }

}
</script>

<style lang="scss" scoped>
.main {
    background-color: rgb(20, 20, 20);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 0;

    &_container {
        width: 100%;
    }

    h2 {
        color: #cf0000;
        text-transform: uppercase;
        font-size: 3rem
    }
}
</style>