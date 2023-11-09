<template>
    <footer class="footer center">
        <div class="social-media">
            <router-link to="/" class="logo">
                <img src="@/assets/img/logos/Logo.svg" alt="logo img" class="img img_logo">
                <h2 class="title title_logo">Interno</h2>
            </router-link>
            <p class="text text_22">It is a long established fact that a reader<br> will be distracted lookings.</p>
            <div class="social-media__icons">
                <a href="#"><img src="@/assets/img/logos/twitter-logo.svg" alt="twitter" class="icon"></a>
                <a href="#"><img src="@/assets/img/logos/twitter-logo.svg" alt="telegram" class="icon"></a>
                <a href="#"><img src="@/assets/img/logos/linked-in-logo.svg" alt="vk" class="icon"></a>
                <a href="#"><img src="@/assets/img/logos/linked-in-logo.svg" alt="LinkedIn" class="icon"></a>
            </div>
        </div>
        <div class="nav nav_footer">
            <h4 class="title title_25">Pages</h4>
            <router-link to="/" class="text_footer">Home</router-link>
            <router-link to="/project.html" class="text_footer">Projects</router-link>
            <router-link to="/blog.html" class="text_footer">Blog</router-link>
        </div>
        <div class="contacts">
            <h4 class="title title_25">Contact's</h4>
            <p class="text text_footer">55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p class="text text_footer">contact@interno.com</p>
            <p class="text text_footer">(123) 456 - 7890</p>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_vars-mixins.scss';
@import '@/assets/styles/style.scss';
</style>