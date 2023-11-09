<template>
    <main class="main-project-details">
        <div class="banner_project-details">
        </div>
        <div class="project-details__article center">
            <div class="project-details__article-container" v-for="item in data">
                <h1 class="title title_50">{{ item.title }}</h1>
                <p class="text text22 mb_30" >{{ item.p1 }}</p>
                <p class="text text22 mb_30" >{{ item.p2 }}</p>
            </div>
        </div>
        <div class="swiper-box center">
            <swiper :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
                <swiper-slide v-for="item in data2">
                    <div class="swiper-zoom-container">
                        <img :src="item" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </main>
</template>
<script>
import { mapState, mapActions } from 'vuex';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import '@/style.css';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';
export default {
    name: 'ProjectDetails',
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        ...mapActions(['fetchData1', 'fetchData2'])
    },
    computed: {
        ...mapState(['data', 'data2']),
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
    created() {
        this.fetchData1()
        this.fetchData2()
    },
}
</script>
<style scoped lang="scss">
.main-project-details {
    margin-top: 50px;
    margin-bottom: 100px;
}

.banner_project-details {
    margin-top: 50px;
    min-height: 352px;
    background-image: url("@/assets/img/projects_db/banner-projects-details.jpg");
}

.project-details__article {
    margin-top: 200px;
    display: flex;
    justify-content: center;
}

.project-details__article-container {
    width: 660px;
}

.swiper {
    margin-top: 70px;
    border-radius: 100px;
}

.mb_30 {
    margin-bottom: 30px;
}
</style>