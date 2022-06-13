<template>
    <main class="main">
        <div class="main_container">
        <SectionHome v-show="(showSect == 'home')"/>
        <SectionFilms v-show="(showSect == 'film')"/>
        <SectionSeries v-show="(showSect == 'serie')"/>
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
    },
    computed: {
        showSect() {
            return this.DataShares.showSection
        }
    }

}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;

    &_container {
        width: 100%;
        min-height: 100vh;
        background-color: rgb(20, 20, 20);
    }

    h2 {
        color: #cf0000;
        text-transform: uppercase;
        font-size: 3rem
    }
}
</style>