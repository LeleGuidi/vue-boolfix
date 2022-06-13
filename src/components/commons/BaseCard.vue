<template>
    <div @mouseover="over = true" @mouseleave="over = false" class="card">
        <img class="card_image" v-show="(media.backdrop_path != null)" :src="'https://image.tmdb.org/t/p/w342'+media.backdrop_path" :alt="media.original_name">
        <div v-show="(over == true || media.backdrop_path == null)" class="card_details">
            <ul class="card_list">
                <li><span>Titolo: </span>{{media.title ? media.title : media.name}}</li>
                <li><span>Titolo originale: </span>{{media.original_title ? media.original_title : media.original_name}}</li>
                <li>
                    <span>Lingua originale: </span>
                    <country-flag class="flag_country" :country='flagIcon' size='small'/>
                </li>
                <li><i v-for="index in 5" :key="index" :class="'fa-solid fa-star ' + ((index <= starsVote) ? 'star_yellow' : 'star_grey')"></i></li>
                <li><span v-show="(media.overview != '')">Trama: </span>{{media.overview}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import CountryFlag from 'vue-country-flag';
import FunctionShares from '../../share/FunctionShares';

export default {
    name: 'MediaCard',
    data() {
        return{
            over: false,
        }
    },
    components: {
        CountryFlag,
    },
    props: {
        media: Object,
    },
    computed: {
        flagIcon() {
            return FunctionShares.flagCountry(this.media.original_language);
        },

        starsVote() {
            return FunctionShares.starCounter(this.media.vote_average)
        },

    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/_mixins.scss';
.card {
    &_image {
        @include cardImage
    }
    &_details {
        @include cardDetails
    }
    span {
        font-weight: bold;
        color: white
    }
    &_list {
        @include listStyle;
    }
    .flag_country {
        vertical-align: bottom;
    }
    .star_yellow {
        color: yellow;
    }
    .star_grey {
        color: grey;
    }
    
}
</style>