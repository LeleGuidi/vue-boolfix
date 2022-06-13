<template>
  <div class="suggested_media" :style="{ backgroundImage: 'url(https://image.tmdb.org/t/p/original' + media.backdrop_path +')' }">
        <div class="details">
            <h1>{{media.title ? media.title : media.name}}</h1>
        </div>
  </div>
</template>

<script>
export default {
    name: 'SuggestedMedia',
    props: {
        media: Object,
    }
}
</script>

<style lang="scss">
.suggested_media {
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    padding: 4rem;
    position: relative;
    box-shadow: inset 0px -40px 36px 10px #000000;
    .details {
        border-radius: .625rem;
        background-color: rgba(20, 20, 20, 0.3);
        color: white;
        width: 30%;
        padding: 0.5rem;
        position: absolute;
        bottom: 10rem;  
    }

}
</style>