<template>
    <main class="main">
        <div class="main_container">
            <FilmCard class="main_film" v-for="(media, index) in DataShared.filmFiltered" :key="index" :media="DataShared.filmFiltered[index]"/>
            <SerieCard class="main_serie" v-for="(media, index) in DataShared.serieFiltered" :key="index" :media="DataShared.serieFiltered[index]"/>
        </div>
    </main>
</template>

<script>
import DataShared from '../../share/DataShares'
import FilmCard from '../commons/FilmCard.vue'
import SerieCard from '../commons/SerieCard.vue'


export default {
    components: { 
        FilmCard,
        SerieCard
    },
    name: 'BaseMain',
    data() {
        return {
            DataShared,
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    background-color: green;
    
    &_container {
        display: flex;
        align-items: center;
        max-width: 1200px;
        margin: auto;
        gap: 1rem;
        flex-wrap: wrap;
    }

    &_film, &_serie {
        width: calc(100% / 3 - 1rem);
    }

}
</style>