<template>
    <header class="header" :class="{ 'onScroll': !view.topOfPage}">
        <div class="header_left">
            <h1>boolfix</h1>
            <NavBar class="navbar"/>
        </div>
        <div class="header_right">
            <SearchBar/>
        </div>
    </header>
</template>

<script>
import NavBar from '../commons/NavBar.vue'
import SearchBar from '../commons/SearchBar.vue'

export default {
    name: 'BaseHeader',
    components: {
        SearchBar,
        NavBar
    },
    data () {
        return {
            view: {
                topOfPage: true
            }
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll(){
            if(window.pageYOffset>0){
                if(this.view.topOfPage) this.view.topOfPage = false
            } else {
                if(!this.view.topOfPage) this.view.topOfPage = true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .625rem 1.25rem;
    background-color: rgba(20, 20, 20, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    &.onScroll {
      background-color: rgb(20, 20, 20);
    }
    &_left {
        display: flex;
        align-items: center;
        gap: 5rem;
        
    }
    h1 {
        color: #cf0000;
        text-transform: uppercase;
    }
}
</style>