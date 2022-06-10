<template>
    <section class="section_film">
        <FilmCard class="film_card" v-for="(media, index) in DataShared.filmFiltered" :key="index" :media="DataShared.filmFiltered[index]"/>
    </section>
</template>

<script>
import FilmCard from '../commons/FilmCard.vue'
import DataShared from '../../share/DataShares'
export default{
    name: 'SectionFilms',
    components: { 
        FilmCard,
    },
    data() {
        return {
            DataShared
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../../assets/style/_mixins.scss';
.section_film {
        @include sectionStyle
    }

    .film_card {
        @include cardStyle
    }
</style>