<template>
    <div class="articles-news-block__item-demo">
        <img :src="imgSrc" :alt="imgAlt" class="img img_articles-news-item">
        <div class="text text_16 articles-news-block__room-name-el">{{ roomDesign }}</div>
    </div>
    <div class="articles-news-block__item-info">
        <router-link to="blog-details.html" class="title title_25">{{ articleTitle }}</router-link>
        <div class="date-and-btn-block">
            <p class="text text_16">{{ date }}</p>
            <router-link to="blog-details.html">
                <svg class="rnd-btn" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53"
                    fill="none">
                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ArticlesNewsComponent',
    props: {
        imgSrc: String,
        imgAlt: String,
        roomDesign: String,
        articleTitle: String,
        date: String,

    }
}
</script>

<style lang="scss">
@import '@/assets/styles/_vars-mixins.scss';
@import '@/assets/styles/style.scss';

.date-and-btn-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
}
</style>
