<template>
    <div class="searchbar">
        <form @submit.prevent="searchFunction()">
            <input type="text" placeholder="Cosa vuoi vedere?" v-model="search">
            <button>Cerca</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import DataShared from '../../share/DataShares'

export default {
    name: 'SearchBar',
    data() {
        return {
            search: '',
            DataShared,
        }
    },

    created() {

        
        
    },

    methods: {
        searchFunction() {
            if(this.search) {
                // Call film filtered
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '82d45af15261ab9675bd613f80ce6712',
                        query: this.search,
                        language: 'it-IT',
                    }
                }).then((response) => {
                    this.DataShared.filmFiltered = response.data.results
                }).catch((error) => {
                    console.log(error)
                }),

                // Call serie filtered 
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: '82d45af15261ab9675bd613f80ce6712',
                        query: this.search,
                        language: 'it-IT',
                    }
                }).then((response) => {
                    this.DataShared.serieFiltered = response.data.results
                }).catch((error) => {
                    console.log(error)
                })
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>