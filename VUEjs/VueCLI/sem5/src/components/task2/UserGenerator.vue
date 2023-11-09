<template>
    <label>
        <input type="text" placeholder="name" v-model="nameGen">
        <br>
        <input type="text" placeholder="surname" v-model="surnameGen">
        <br>
        <input type="text" placeholder="age" v-model="ageGen">
        <br>
        <button @click="add">add user</button>
    </label>
    <br>
    <user :nameProps="name" :surnameProps="surname" :ageProps="age"/>
</template>
<script>
import user from './user.vue';
export default {
    name: 'UserGenerator',
    components: {
        user
    },
    data() {
        return {
            name: '',
            surname: '',
            age: '',
            nameGen: '',
            surnameGen: '',
            ageGen: ''
        }
    },
    methods: {
        add() {
            this.name = this.nameGen,
            this.surname = this.surnameGen,
            this.age = this.ageGen,
            this.ageGen = '',
            this.surnameGen = '',
            this.nameGen = ''
        }
    },
}
</script>
<style lang="scss"></style>