<template>
    <div class="moovie-box">
        <h2 @click="getInfo">{{ moovieName }}</h2>
        <span @click="getInfo">Genre: {{ moovieGenre }}</span>
        <span @click="getInfo">Lenght: {{ moovieLenght }}</span>
        <p @click="getInfo" v-show="show">{{ moovieAbout }}</p>
        <label for="1">
            <input v-model="newAbout" type="text" placeholder="add info to about block"/>
        </label>
        <button id="1" @click="editInfo">Edit moovie info</button>
    </div>
</template>
<script>
export default {
    name: 'MoovieInfo',

    props: {
        moovieName: String,
        moovieGenre: String,
        moovieLenght: Number,
        moovieAbout: String
    },

    data() {
        return {
            show: false,
            newAbout: ''
        }
    },

    methods: {
        getInfo() {
            this.show = !this.show
        },
        editInfo() {
            const data = {
                name: this.moovieName,
                genre: this.moovieGenre,
                lenght: this.moovieLenght,
                about: this.moovieAbout + this.newAbout,
            }
            this.$emit('EditedInfo', data)
        }
    },
}
</script>
<style lang="scss">
.moovie-box {
    width: 200px;
    border: 1px solid black;
    border-radius: 30px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px
}
</style>