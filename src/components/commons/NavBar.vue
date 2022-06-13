<template>
  <div class="navbar">
    <ul>
        <li><a href="#/" @click="(DataShares.showSection = 'home'); search = 'home'; showMedia()" :class="(isActive == 'home') ? 'active' : ''">Home</a></li>
        <li><a href="#/" @click="(DataShares.showSection = 'film'); search = 'film'; showMedia()" :class="(isActive == 'film') ? 'active' : ''">Film</a> </li>
        <li><a href="#/" @click="(DataShares.showSection = 'serie'); search = 'serie'; showMedia()" :class="(isActive == 'serie') ? 'active' : ''">Serie TV</a></li>
    </ul>
  </div>
</template>

<script>
import DataShares from '../../share/DataShares'
import axios from 'axios';
export default {
    name: 'NavBar',
    data() {
        return {
            DataShares,
            search: 'home',
        }
    },
    methods: {
        showMedia() {
            if (this.DataShares.showSection == 'home' || this.DataShares.showSection == 'film') {
                axios.get('https://api.themoviedb.org/3/movie/popular', {
                    params: {
                        api_key: '82d45af15261ab9675bd613f80ce6712',
                        language: 'it-IT',
                        page: '1',
                    }
                    }).then((response) => {
                        this.DataShares.mainPopular = response.data.results
                    }).catch((error) => {
                        console.log(error)
                    })
                } else {
                    axios.get('https://api.themoviedb.org/3/serie/popular', {
                    params: {
                        api_key: '82d45af15261ab9675bd613f80ce6712',
                        language: 'it-IT',
                        page: '1',
                    }
                    }).then((response) => {
                        this.DataShares.mainPopular = response.data.results
                    }).catch((error) => {
                        console.log(error)
                    })
                }
            
        }
        
    },
    computed: {
        isActive() {
            return this.DataShares.showSection
        },
    }
}
</script>

<style lang="scss">
.navbar {
    ul {
        display: flex;
        color: white;
        list-style: none;
        gap: 2rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
    .active {
        color: #cf0000;
    }
}
</style>