<template>
    <MoovieInfo v-for="(item, idx) in MoovieData" :key="item.id" :moovie-name="item.name" :moovie-genre="item.genre"
        :moovie-lenght="item.lenght" :moovie-about="item.about" @EditedInfo="EditedInfo"/>
</template>
<script>
import MoovieInfo from './MoovieInfo.vue'
export default {
    components: {
        MoovieInfo
    },
    data() {
        return {
            MoovieData: [
                {
                    name: 'WWWWWW',
                    genre: 'A',
                    lenght: 100,
                    about: 'sdfdfsdfsdfs',
                },
                {
                    name: 'SSSSS',
                    genre: 'B',
                    lenght: 60,
                    about: 'sfsfffffffff',
                },
                {
                    name: 'DDDD DDDD',
                    genre: 'C',
                    lenght: 120,
                    about: 'kjnkjbjhbhjbjhbhjb',
                },
                {
                    name: 'ASDFGHJK',
                    genre: 'A',
                    lenght: 80,
                    about: 'kjnjbhjbjhbjjnjk',
                }
            ]
        }
    },
    computed: {

    },
    methods: {
        EditedInfo(data) {
            this.MoovieData.push(data)
        },
    },
}
</script>
<style lang="">
    
</style>