<template>
    <main class="main-404">
        <div class="allert">
            <h1 class="title title_404">404</h1>
            <h4 class="tittle title_35">We are sorry, but the page
                you requested was not found</h4>
            <router-link to="/" class="rect-btn">
                Back To Home
                <img src="@/assets/img/icons/arrow.svg" alt="arrow">
            </router-link>
        </div>
        <img src="@/assets/img/not_found/404.jpg" alt="404" class="img img_404">
    </main>
</template>
<script>
export default {
    name: '404'
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/_vars-mixins.scss';
@import '@/assets/styles/style.scss';

.main-404 {
    margin-top: 50px;
    padding-left: calc(50% - 600px);
    display: flex;
    align-items: center;
    gap: 80px;
}

.allert {
    width: 570px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.img_404 {
    border-bottom-left-radius: 350px;
}
</style>