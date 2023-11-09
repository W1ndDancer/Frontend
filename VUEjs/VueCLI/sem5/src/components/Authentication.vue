<template>
    <form action="#" v-if="isAuhenticated">
        <input type="text" placeholder="login">
        <input type="email" placeholder="email">
    </form>
    <h3 v-else>Вы авторизованы!</h3>
</template>
<script>
export default {
    props: {
        isAuhenticated: Boolean
    },

    name: 'Authentication'
}
</script>
<style lang="scss">
    
</style>