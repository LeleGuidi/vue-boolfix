<template>
    <div class="card">
        <ul>
            <li>{{media.title}}</li>
            <li>{{media.original_title}}</li>
            <li><span :class="'flag-icon flag-icon-'+media.original_language"></span></li>
            <li>{{media.vote_average}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MediaCard',
    props: {
        media: Object,
    }
}
</script>

<style lang="scss" scoped>
.card {
    background-color: lightblue;
    
}
</style>