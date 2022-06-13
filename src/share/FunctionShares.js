export default {
    flagCountry(language) {
        if(language == 'en') {
            return 'gb-eng'
        } else if (language == 'da'){
            return 'gb'
        } else if (language == 'ja'){
            return 'jpn'
        } else if (language == 'ko'){
            return 'kp'
        } else if (language == 'el'){
            return 'sv'
        } else if (language == 'hi'){
            return 'ht'
        } else if (language == 'kk'){
            return 'kz'
        }else {
            return language
        }
        
    },

    starCounter(vote) {
        return Math.ceil(vote / 2)
    }
};