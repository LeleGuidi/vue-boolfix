<template>
    <section class="section_serie">
        <MediaSuggested v-show="(DataShared.showSearch == false)" :media="DataShared.popularSeries[1]"/>
        <div class="card_container">
            <BaseCard v-show="(DataShared.showSearch == true)" class="serie_card" v-for="(media, index) in DataShared.serieFiltered" :key="index" :media="DataShared.serieFiltered[index]"/>
        </div>
    </section>
</template>

<script>
import BaseCard from '../commons/BaseCard.vue'
import DataShared from '../../share/DataShares'
import MediaSuggested from '../commons/MediaSuggested.vue'
export default{
    name: 'SectionFilms',
    components: { 
        BaseCard,
        MediaSuggested,
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
.card_container {
    @include sectionStyle;
}

.serie_card {
    @include cardStyle
}
</style>