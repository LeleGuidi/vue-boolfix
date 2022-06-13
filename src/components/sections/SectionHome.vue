<template>
  <div class="home">
    <SuggestedMedia :media="DataShares.popularFilms[0]"/>
  </div>
</template>

<script>
import SuggestedMedia from '../commons/SuggestedMedia.vue'
import DataShares from '../../share/DataShares'

export default {
    name: 'SectionHome',
    components: { 
        SuggestedMedia 
    },
    data() {
        return {
            DataShares
        }
    }

}
</script>

<style>

</style>