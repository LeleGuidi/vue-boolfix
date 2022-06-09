<template>
    <main class="main">
        <div class="main_container">
            <FilmCard class="main_class" v-for="(media, index) in DataShared.mediaFiltered" :key="index" :media="DataShared.mediaFiltered[index]"/>
        </div>
    </main>
</template>

<script>
import DataShared from '../../share/DataShares'
import FilmCard from '../commons/FilmCard.vue'

export default {
    components: { 
        FilmCard 
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
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: auto;
        gap: 1rem;
        flex-wrap: wrap;
    }

    &_card {
        width: calc(100% / 3 - 1rem);
    }

}
</style>