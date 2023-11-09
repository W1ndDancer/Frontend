<template>
    <span>Имя {{ nameProps }}</span> <br>
    <span>Фамилия {{ surnameProps }}</span> <br>
    <span>Возраст {{ ageProps }}</span> <br>
    <button @click="add">add user to userlist</button>
    <UserList :UserList="users"/>
</template>
<script>
import UserList from './UserList.vue';

export default {
    name: 'user',
    props: {
        nameProps: String,
        surnameProps: String,
        ageProps: String
    },
    components: {
        UserList
    },
    data() {
        return {
            users: [],
        }
    },
    methods: {
        add() {
            this.users.push(`${this.nameProps} ${this.surnameProps} ${this.ageProps}`)
        }
    }
}
</script>
<style lang="scss"></style>