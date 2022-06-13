<template>
    <section class="section_film">
        <MediaSuggested v-show="(DataShared.showSearch == false)" :media="DataShared.popularFilms[1]"/>
        <div class="card_container">
            <BaseCard v-show="(DataShared.showSearch == true)" class="film_card" v-for="(media, index) in DataShared.filmFiltered" :key="index" :media="DataShared.filmFiltered[index]"/>
        </div>
    </section>
</template>

<script>
import BaseCard from '../commons/BaseCard.vue';
import DataShared from '../../share/DataShares';
import MediaSuggested from '../commons/MediaSuggested.vue';

export default{
    name: 'SectionFilms',
    components: { 
        BaseCard,
        MediaSuggested,
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
.card_container {
    @include sectionStyle;
}
.film_card {
    @include cardStyle
}
</style>