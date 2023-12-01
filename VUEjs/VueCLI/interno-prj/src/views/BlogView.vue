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
                    <img :src="articlesData[0].imgSrc"
                        :alt="articlesData[0].roomDesign" class="img img_articles-news-item_big">
                </div>
                <div class="articles-news-block__item-info_big">
                    <h4 class="title title_25"><router-link to="/blog-details.html">{{
                        articlesData[articlesData.length - 1].articleTitle }}</router-link></h4>
                    <p class="text text_22">{{ articlesData[0].p1 }}</p>
                    <p class="text text_22">{{ articlesData[0].p2 }}</p>
                    <div class="date-and-btn-block">
                        <p class="text text_16">{{ articlesData[0].date }}</p>
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
                <div class="articles-news-block__item" v-for="i in paginatedData">
                    <articles-news-component :imgSrc="i.imgSrc" :imgAlt="i.imgAlt" :roomDesign="i.roomDesign"
                        :articleTitle="i.articleTitle" :date="i.date" />
                </div>
            </div>
        </div>
        <div class="pagination">
            <button class="pagination__item prev" :disabled="pageNumber === 0" @click="prevPage">
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div class="pagination__item" v-for="i in  pageCount" :class="{ 'active': (pageNumber + 1) == i }">
                <p class="text text_16">{{ i }}</p>
            </div>
            <button class="pagination__item" :disabled="pageNumber >= pageCount - 1" @click="nextPage">
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
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
            pageNumber: 0,
            size: 6,
            articlesData: [
                {
                    id: 1,
                    imgSrc: require('@/assets/img/articles_db/Photo-2.jpg'),
                    roomDesign: 'Kitchen Design',
                    articleTitle: 'Lets Get Solution Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    id: 2,
                    imgSrc: require('@/assets/img/articles_db/Photo-3.jpg'),
                    roomDesign: 'Living Design',
                    articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 October,2022'
                },
                {
                    id: 3,
                    imgSrc: require('@/assets/img/articles_db/Photo-4.jpg'),
                    roomDesign: 'Interior Design',
                    articleTitle: 'Best For Any Office & Business Interior Solution',
                    date: '20 October,2022'
                },
                {
                    id: 4,
                    imgSrc: require('@/assets/img/articles_db/Photo-5.jpg'),
                    roomDesign: 'Kitchen Design',
                    articleTitle: 'Lets Get Solution Building Construction Work',
                    date: '14 October,2022'
                },
                {
                    id: 5,
                    imgSrc: require('@/assets/img/articles_db/Photo-6.jpg'),
                    roomDesign: 'Living Design',
                    articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '30 September,2022'
                },
                {
                    id: 6,
                    imgSrc: require('@/assets/img/articles_db/Photo-7.jpg'),
                    roomDesign: 'Interior Design',
                    articleTitle: 'Best For Any Office & Business Interior Solution',
                    date: '27 September,2022'
                },
                {
                    id: 7,
                    imgSrc: require('@/assets/img/articles_db/Photo-2.jpg'),
                    roomDesign: 'Kitchen Design',
                    articleTitle: 'Lets Get Solution Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    id: 8,
                    imgSrc: require('@/assets/img/articles_db/Photo-5.jpg'),
                    roomDesign: 'Living Design',
                    articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 October,2022'
                },
                {
                    id: 9,
                    imgSrc: require('@/assets/img/articles_db/Photo-5.jpg'),
                    roomDesign: 'Kitchen Design',
                    articleTitle: 'Lets Get Solution Building Construction Work',
                    date: '14 October,2022'
                },
                {
                    id: 10,
                    imgSrc: require('@/assets/img/our_projects_photos/Photo-2.jpg'),
                    roomDesign: 'Living Design',
                    articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '30 September,2022'
                },
                {
                    id: 11,
                    imgSrc: require('@/assets/img/our_projects_photos/Photo-3.jpg'),
                    roomDesign: 'Interior Design',
                    articleTitle: 'Best For Any Office & Business Interior Solution',
                    date: '27 September,2022'
                },
                {
                    id: 12,
                    imgSrc: require('@/assets/img/our_projects_photos/Photo-4.jpg'),
                    roomDesign: 'sssss',
                    articleTitle: 'Lets Get Solution Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    id: 13,
                    imgSrc: require('@/assets/img/our_projects_photos/Photo-5.jpg'),
                    roomDesign: 'Living Design',
                    articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 October,2022'
                },
                {
                    id: 14,
                    imgSrc: require('@/assets/img/projects_db/Photo-2.jpg'),
                    roomDesign: 'Interior Design',
                    articleTitle: 'Best For Any Office & Business Interior Solution',
                    date: '20 October,2022'
                },
                {
                    id: 15,
                    imgSrc: require('@/assets/img/projects_db/Photo-3.jpg'),
                    roomDesign: 'Kitchen Design',
                    articleTitle: 'Lets Get Solution Building Construction Work',
                    date: '14 October,2022'
                },
                {
                    id: 16,
                    imgSrc: require('@/assets/img/projects_db/Photo-2.jpg'),
                    roomDesign: 'Living Design',
                    articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '30 September,2022'
                },
                {
                    id: 17,
                    imgSrc: require('@/assets/img/articles_db/Photo-5.jpg'),
                    roomDesign: 'Interior Design',
                    articleTitle: 'Best For Any Office & Business Interior Solution',
                    date: '27 September,2022'
                },
                {
                    id: 18,
                    imgSrc: require('@/assets/img/projects_db/Photo-6.jpg'),
                    roomDesign: 'Kitchen Design',
                    articleTitle: 'Lets Get Solution Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    id: 19,
                    imgSrc: require('@/assets/img/projects_db/Photo-7.jpg'),
                    roomDesign: 'Living Design',
                    articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 October,2022'
                },
                {
                    id: 20,
                    imgSrc: require('@/assets/img/projects_db/Photo-8.jpg'),
                    roomDesign: 'Interior Design',
                    articleTitle: 'Best For Any Office & Business Interior Solution',
                    date: '20 October,2022'
                },
                {
                    id: 21,
                    imgSrc: require('@/assets/img/projects_db/Photo-7.jpg'),
                    roomDesign: 'Kitchen Design',
                    articleTitle: 'Lets Get Solution Building Construction Work',
                    date: '14 October,2022'
                },
                {
                    id: 22,
                    imgSrc: require('@/assets/img/articles_db/Photo.jpg'),
                    roomDesign: 'Living Room',
                    articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '10 January,2023',
                    p1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.',
                    p2: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
                },
            ]
        }
    },
    methods: {
        nextPage() {
            this.pageNumber++;
        },
        prevPage() {
            this.pageNumber--;
        },
        sortData() {
            this.articlesData.sort((a, b) => a.id < b.id ? 1 : -1);
        }
    },
    computed: {
        pageCount() {
            let l = this.articlesData.length,
                s = this.size;
            return Math.ceil(l / s);
        },
        paginatedData() {
            const start = this.pageNumber * this.size,
                end = start + this.size;
            return this.articlesData
                .slice(start, end);
        }
    },
    created() {
        this.sortData()
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/_vars-mixins.scss';
@import '@/assets/styles/style.scss';
@import '@/assets/styles/_articles-news-block.scss';
@import '@/assets/styles/_blog.scss';

.pagination {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 20px;

    &__item {
        width: 52px;
        height: 52px;
        border: 1px solid $primaryColor1;
        border-radius: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.active {
    background-color: burlywood;
}

.prev {
    transform: scale(-1, 1);
}
</style>