<template>
    <div class="card">
        <ul>
            <li>{{media.name}}</li>
            <li>{{media.original_name}}</li>
            <li>
                {{media.original_language}}
            </li>
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