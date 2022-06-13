<template>
  <div class="navbar">
    <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/">Film</a> </li>
        <li><a href="#/">SerieTV</a></li>
    </ul>
  </div>
</template>

<script>
export default {

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