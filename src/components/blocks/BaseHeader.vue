<template>
    <header class="header">
        <div class="header_title">
            <h1>boolfix</h1>
        </div>
        <div class="header_searchbar">
            <SearchBar/>
        </div>
    </header>
</template>

<script>
import SearchBar from '../commons/SearchBar.vue'

export default {
    name: 'BaseHeader',
    components: {
        SearchBar
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .625rem 1.25rem;
}
</style>