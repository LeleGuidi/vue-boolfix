<template>
    <section class="section_serie">
        <SerieCard class="serie_card" v-for="(media, index) in DataShared.filmFiltered" :key="index" :media="DataShared.filmFiltered[index]"/>
    </section>
</template>

<script>
import SerieCard from '../commons/SerieCard.vue'
import DataShared from '../../share/DataShares'
export default{
    name: 'SectionFilms',
    components: { 
        SerieCard,
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
.section_serie {
        @include sectionStyle
    }

    .serie_card {
        @include sectionStyle
    }
</style>