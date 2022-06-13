<template>
    <main class="main">
        <div class="main_container">
        <SectionHome/>
        <SectionFilms v-show="(DataShares.showSerie == false)"/>
        <SectionSeries v-show="(DataShares.showFilms == false)"/>
        </div>
    </main>
</template>

<script>
import SectionFilms from '../sections/SectionFilms.vue'
import SectionSeries from '../sections/SectionSeries.vue'
import DataShares from '../../share/DataShares'
import SectionHome from '../sections/SectionHome.vue'


export default {
    name: 'BaseMain',
    components: { 
        SectionFilms,
        SectionSeries,
        SectionHome
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
    padding: 3rem 0;

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