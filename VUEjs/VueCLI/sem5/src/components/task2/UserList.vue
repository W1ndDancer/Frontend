<template>
    <div v-for="user in UserList" :key="user.id">
        {{ user }}
    </div>
</template>
<script>

export default {
    props: {
        UserList: Array
    },
    name: 'UserList'
}
</script>
<style lang="scss"></style>