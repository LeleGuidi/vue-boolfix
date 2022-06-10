<template>
    <main class="main">
        <div class="main_container">
            <SectionFilms/>
            <SectionSeries/>
        </div>
    </main>
</template>

<script>
import SectionFilms from '../sections/SectionFilms.vue'
import SectionSeries from '../sections/SectionSeries.vue'


export default {
    components: { 
        SectionFilms,
        SectionSeries 
    },
    name: 'BaseMain',
}
</script>

<style lang="scss" scoped>
.main {
    background-color: green;
    
    

}
</style>