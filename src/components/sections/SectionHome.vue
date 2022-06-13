<template>
  <section class="home">
    <MediaSuggested :media="DataShares.popularFilms[0]" v-show="(DataShares.showSearch == false)"/>
    <h1 v-show="(DataShares.showSearch == true)">Film cercati da te:</h1>
    <div class="card_container" v-show="(DataShares.showSearch == true)">
        <BaseCard class="cards" v-for="(media, index) in DataShares.filmFiltered" :key="index" :media="DataShares.filmFiltered[index]"/>
    </div>
    <h1 v-show="(DataShares.showSearch == true)">Serie TV cercati da te:</h1>
    <div class="card_container" v-show="(DataShares.showSearch == true)">
        <BaseCard class="cards" v-for="(media, index) in DataShares.serieFiltered" :key="index" :media="DataShares.serieFiltered[index]"/>
    </div>
  </section>
</template>

<script>
import MediaSuggested from '../commons/MediaSuggested.vue'
import DataShares from '../../share/DataShares'
import BaseCard from '../commons/BaseCard.vue'

export default {
    name: 'SectionHome',
    components: { 
        MediaSuggested,
        BaseCard
    },
    data() {
        return {
            DataShares
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/_mixins.scss';
.home {
    display: flex;
    flex-direction: column;
}
h1 {
    color: white;
    text-transform: uppercase;
    padding: 6rem 0 0 1rem;
}
.card_container {
    @include sectionStyle;
    .cards {
        @include cardStyle;
    }
}


</style>