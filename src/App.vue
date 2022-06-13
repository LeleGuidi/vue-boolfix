<template>
  <div id="app">
    <BaseHeader/>
    <BaseMain/>
  </div>
</template>

<script>
import BaseHeader from '../src/components/blocks/BaseHeader.vue'
import BaseMain from '../src/components/blocks/BaseMain.vue'
import axios from 'axios';
import DataShares from '../src/share/DataShares'

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseMain,
  },
  data() {
    return {
      DataShares
    }
  },
  created() {
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: '82d45af15261ab9675bd613f80ce6712',
        language: 'it-IT',
        page: '1',
        }
      }).then((response) => {
        this.DataShares.popularFilms = response.data.results
      }).catch((error) => {
        console.log(error)
      })

      axios.get('https://api.themoviedb.org/3/tv/popular', {
        params: {
          api_key: '82d45af15261ab9675bd613f80ce6712',
          language: 'it-IT',
          page: '1',
        }
      }).then((response) => {
        this.DataShares.popularSeries = response.data.results
      }).catch((error) => {
        console.log(error)
      })
  }
  
}
</script>

<style lang="scss">
@import '../src/assets/global.scss'
</style>
