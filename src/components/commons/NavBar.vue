<template>
  <div class="navbar">
    <ul>
        <li><a href="#/" @click="(DataShares.showSection = 'home'); (DataShares.showSearch = false)" :class="(isActive == 'home') ? 'active' : ''">Home</a></li>
        <li><a href="#/" @click="(DataShares.showSection = 'film'); (DataShares.showSearch = false)" :class="(isActive == 'film') ? 'active' : ''">Film</a> </li>
        <li><a href="#/" @click="(DataShares.showSection = 'serie'); (DataShares.showSearch = false)" :class="(isActive == 'serie') ? 'active' : ''">Serie TV</a></li>
    </ul>
  </div>
</template>

<script>
import DataShares from '../../share/DataShares'
export default {
    name: 'NavBar',
    data() {
        return {
            DataShares,
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