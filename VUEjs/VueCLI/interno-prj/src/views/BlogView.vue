<template>
    <main class="main-blog">
        <div class="banner">
            <div class="banner__info">
                <h1 class="title title_50">Articles & News</h1>
                <nav class="breadcrumb">
                    <ul class="breadcrumb__ul">
                        <li class="breadcrumb__li"><router-link class="text text_22" to="/">Home</router-link></li>
                        <li class="breadcrumb__li"><router-link class="text text_22" to="/blog.html">Blog</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="latest-post center">
            <h2 class="title title_50">Latest Post</h2>
            <div class="articles-news-block__item articles-news-block__item_big">
                <div class="articles-news-block__item-demo">
                    <img src="@/assets/img/articles_db/Photo.jpg" alt="Living Room" class="img img_articles-news-item_big">
                </div>
                <div class="articles-news-block__item-info_big">
                    <h4 class="title title_25"><router-link to="/blog-details.html">Low Cost Latest Invented
                            Interior Designing Ideas</router-link></h4>
                    <p class="text text_22">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
                        maximus.posuere in.Contrary to popular belief.</p>
                    <p class="text text_22">Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                    </p>
                    <div class="date-and-btn-block">
                        <p class="text text_16">10 January,2023</p>
                        <router-link to="/blog-details.html">
                            <svg class="rnd-btn" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
                                viewBox="0 0 52 53" fill="none">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="articles-news-block center">
            <h2 class="title title_50">Articles & News</h2>
            <div class="articles-news-block__items">
                <div class="articles-news-block__item" v-for="i in articlesData">
                    <articles-news-component :imgSrc="i.imgSrc" :imgAlt="i.imgAlt" :roomDesign="i.roomDesign"
                        :articleTitle="i.articleTitle" :date="i.date" />
                </div>
            </div>
        </div>
        <pagination-component />
    </main>
</template>
<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import ArticlesNewsComponent from '@/components/ArticlesNewsComponent.vue'

export default {
    components: {
        PaginationComponent,
        ArticlesNewsComponent
    },
    data() {
        return {
            articlesData: [
                {
                    imgSrc: require('@/assets/img/articles_db/Photo-2.jpg'),
                    roomDesign: 'Kitchen Design',
                    articleTitle: 'Lets Get Solution Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    imgSrc: require('@/assets/img/articles_db/Photo-3.jpg'),
                    roomDesign: 'Living Design',
                    articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 October,2022'
                },
                {
                    imgSrc: require('@/assets/img/articles_db/Photo-4.jpg'),
                    roomDesign: 'Interior Design',
                    articleTitle: 'Best For Any Office & Business Interior Solution',
                    date: '20 October,2022'
                },
                {
                    imgSrc: require('@/assets/img/articles_db/Photo-5.jpg'),
                    roomDesign: 'Kitchen Design',
                    articleTitle: 'Lets Get Solution Building Construction Work',
                    date: '14 October,2022'
                },
                {
                    imgSrc: require('@/assets/img/articles_db/Photo-6.jpg'),
                    roomDesign: 'Living Design',
                    articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '30 September,2022'
                },
                {
                    imgSrc: require('@/assets/img/articles_db/Photo-7.jpg'),
                    roomDesign: 'Interior Design',
                    articleTitle: 'Best For Any Office & Business Interior Solution',
                    date: '27 September,2022'
                }
            ]
        }
    },
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/_vars-mixins.scss';
@import '@/assets/styles/style.scss';
@import '@/assets/styles/_articles-news-block.scss';
@import '@/assets/styles/_blog.scss';
</style>