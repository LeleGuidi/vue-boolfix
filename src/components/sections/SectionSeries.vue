<template>
    <section class="section_serie">
        <BaseCard class="serie_card" v-for="(media, index) in DataShared.serieFiltered" :key="index" :media="DataShared.serieFiltered[index]"/>
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
        @include cardStyle
    }
</style>