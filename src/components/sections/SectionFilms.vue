<template>
    <section class="section_film">
        <BaseCard class="film_card" v-for="(media, index) in DataShared.filmFiltered" :key="index" :media="DataShared.filmFiltered[index]"/>
    </section>
</template>

<script>
import BaseCard from '../commons/BaseCard.vue'
import DataShared from '../../share/DataShares'
export default{
    name: 'SectionFilms',
    components: { 
        BaseCard,
    },
    data() {
        return {
            DataShared,
            view: {
                topOfPage: true
            }
        }
    },
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