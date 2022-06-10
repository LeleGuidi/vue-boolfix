<template>
    <div class="card">
        <ul class="card_list">
            <li><span>Titolo: </span>{{media.name}}</li>
            <li><span>Titolo originale: </span>{{media.original_name}}</li>
            <li>
                <span>Lingua originale: </span>
                <country-flag class="flag_country" :country='flagCountry()' size='small'/>
                {{media.original_language}}
            </li>
            <li><span>Media voti: </span>{{media.vote_average}}</li>
            <li><span>Trama: </span>{{media.overview}}</li>
        </ul>
    </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
export default {
    name: 'MediaCard',
    data(){
        return{
            countryFlag: '',
        }
    },
    components: {
        CountryFlag
    },
    props: {
        media: Object,
    },
    methods: {
        flagCountry() {
            if(this.media.original_language == 'en') {
                this.countryFlag = 'gb-eng'
            } else if (this.media.original_language == 'da'){
                this.countryFlag = 'gb'
            } else if (this.media.original_language == 'ja'){
                this.countryFlag = 'jpn'
            } else if (this.media.original_language == 'ko'){
                this.countryFlag = 'kp'
            } else if (this.media.original_language == 'el'){
                this.countryFlag = 'sv'
            } else if (this.media.original_language == 'hi'){
                this.countryFlag = 'ht'
            } else {
                this.countryFlag = this.media.original_language
            }
            return this.countryFlag
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/_mixins.scss';
.card {
    background-color: lightblue;
    span {
        font-weight: bold;
    }
    &_list {
        @include listStyle;
    }
    .flag_country {
        vertical-align: bottom;
    }
    
}
</style>