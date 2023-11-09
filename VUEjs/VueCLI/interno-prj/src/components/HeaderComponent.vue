<template>
    <header class="header center">
        <router-link to="/" class="logo">
            <img src="@/assets/img/logos/Logo.svg" alt="logo img" class="img img_logo">
            <h2 class="title title_logo">Interno</h2>
        </router-link>
        <div class="nav nav_header">
            <router-link to="/" class="text_link">Home</router-link>
            <router-link to="/project.html" class="text_link">Projects</router-link>
            <router-link to="/blog.html" class="text_link">Blog</router-link>
        </div>
    </header>
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_vars-mixins.scss';
@import '@/assets/styles/style.scss';
</style>