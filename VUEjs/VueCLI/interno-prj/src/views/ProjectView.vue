<template>
    <main class="main-project">
        <div class="banner">
            <div class="banner__info">
                <h1 class="title title_50">Our Projects</h1>
                <nav class="breadcrumb">
                    <ul class="breadcrumb__ul">
                        <li class="breadcrumb__li"><router-link class="text text_22" to="/">Home</router-link></li>
                        <li class="breadcrumb__li"><router-link class="text text_22" to="/project.html">Project</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="project-filters">
            <div class="project-filters__block">
                <div class="project-filters__item text text 18" v-for="i in buttons">
                    <label :data-id="i" @change="sortArticles">
                        <input :data-id="i" @click="filterArticles" type="radio" name="radio">
                        {{ i }}
                    </label>
                </div>
            </div>
        </div>
        <div class="projects-block center">
            <div class="projects-block_clm center">
                <div class="projects-block__item" v-for="(item, index) in filtredArticles1">
                    <img :src="item.src" alt="project img" class="img img_project">
                    <div class="star" @click="SwitchColor1(index)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                            <g filter="url(#filter0_d_2_14)">
                                <path
                                    d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                                    :fill="item.color" />
                            </g>
                            <defs>
                                <filter id="filter0_d_2_14" x="0.186523" y="0.431396" width="35.627" height="34.3618"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div class="projects-block__info-el">
                        <div class="projects-block__text-el">
                            <router-link to="/project-details" class="title title_25">{{ item.title }}</router-link>
                            <p class="text text 22">{{ item.tags }}</p>
                        </div>
                        <router-link to="/project-details.html">
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
            <div class="projects-block_clm center">
                <div class="projects-block__item" v-for="(item, index) in filtredArticles2">
                    <img :src="item.src" alt="project img" class="img img_project">
                    <div class="star" @click="SwitchColor2(index)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                            <g filter="url(#filter0_d_2_14)">
                                <path
                                    d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                                    :fill="item.color" />
                            </g>
                            <defs>
                                <filter id="filter0_d_2_14" x="0.186523" y="0.431396" width="35.627" height="34.3618"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div class="projects-block__info-el">
                        <div class="projects-block__text-el">
                            <router-link to="/project-details.html" class="title title_25">{{ item.title }}</router-link>
                            <p class="text text 22">{{ item.tags }}</p>
                        </div>
                        <router-link to="/project-details.html">
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
        <pagination-component />
    </main>
</template>
<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
export default {
    name: 'ProjectView',
    components: {
        PaginationComponent
    },
    data() {
        return {
            buttons: ['Bathroom', 'Bedroom', 'Kitchen', 'Living Area', 'Show All'],
            filtredArticles1: [],
            filtredArticles2: [],
            projectsDB1: [
                {
                    id: 'Living Area',
                    src: require('@/assets/img/projects_db/Photo.jpg'),
                    title: 'Living Area',
                    tags: 'Decor / Living',
                    color: '#FFF'
                },
                {
                    id: 'Bedroom',
                    src: require('@/assets/img/projects_db/Photo-3.jpg'),
                    title: 'Classic Minimal Bedroom',
                    tags: 'Bedroom / Artchitecture',
                    color: '#FFF'
                },
                {
                    id: 'Bedroom',
                    src: require('@/assets/img/projects_db/Photo-5.jpg'),
                    title: 'Tables For Bedrooms',
                    tags: 'Decor / Artchitecture',
                    color: '#FFF'
                },
                {
                    id: 'Bedroom',
                    src: require('@/assets/img/projects_db/Photo-7.jpg'),
                    title: 'Princess Bedroom',
                    tags: 'Bedroom / Artchitecture',
                    color: '#FFF'
                },
            ],
            projectsDB2: [
                {
                    id: 'Bedroom',
                    src: require('@/assets/img/projects_db/Photo-2.jpg'),
                    title: 'Minimal Bedroom',
                    tags: 'Decor / Bedroom',
                    color: '#FFF'
                },
                {
                    id: 'Bedroom',
                    src: require('@/assets/img/projects_db/Photo-4.jpg'),
                    title: 'Modern Bedroom',
                    tags: 'Decor / Artchitecture / Bedroom',
                    color: '#FFF'
                },
                {
                    id: 'Living Area',
                    src: require('@/assets/img/projects_db/Photo-6.jpg'),
                    title: 'System Table',
                    tags: 'Decor / Living',
                    color: '#FFF'
                },
                {
                    id: 'Bedroom',
                    src: require('@/assets/img/projects_db/Photo-8.jpg'),
                    title: 'Bedrooms For Everyone',
                    tags: 'Decor / Artchitecture / Bedroom',
                    color: '#FFF'
                }
            ],
        }
    },
    methods: {
        sortArticles(e) {
            if (document.querySelector('.project-filters__item_active') !== null) {
                document.querySelector('.project-filters__item_active').classList.remove('project-filters__item_active');
            }
            const divButton = e.target.closest('.project-filters__item');
            divButton.classList.add('project-filters__item_active');
        },
        filterArticles(e) {
            if (e.target.dataset.id === 'Show All') {
                this.filtredArticles1 = this.projectsDB1
                this.filtredArticles2 = this.projectsDB2
            } else {
                this.filtredArticles1 = this.projectsDB1.filter(article => article.id === e.target.dataset.id);
                this.filtredArticles2 = this.projectsDB2.filter(article => article.id === e.target.dataset.id);
            }
        },
        SwitchColor1(index) {
            if (this.filtredArticles1[index].color === '#FFF') {
                this.filtredArticles1[index].color = '#FFA928'
            } else {
                this.filtredArticles1[index].color = '#FFF'
            }
        },
        SwitchColor2(index) {
            if (this.filtredArticles2[index].color === '#FFF') {
                this.filtredArticles2[index].color = '#FFA928'
            } else {
                this.filtredArticles2[index].color = '#FFF'
            }
        },
    },
    created() {
            this.filtredArticles1 = this.projectsDB1;
            this.filtredArticles2 = this.projectsDB2;
        },
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/_vars-mixins.scss';
@import '@/assets/styles/style.scss';

.main-project {
    margin-bottom: 200px;
}

.banner {
    position: relative;
    min-height: 356px;
    background-image: url('@/assets/img/blog/blog-banner.jpg');
    display: flex;
    justify-content: center;

    &__info {
        position: absolute;
        bottom: 0;
        width: 503px;
        height: 178px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 37px;
        border-top-right-radius: 37px;
        background: #fff;

    }
}

.change-collor {
    color: blue;
}

.project-filters {
    margin-top: 200px;
    display: flex;
    justify-content: center;

    &__block {
        display: flex;
        border: 1px solid $primaryColor1;
        border-radius: 19px;
    }
}

.project-filters__item {
    width: 220px;
    height: 75px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    & input[type="radio"] {
        display: none;
    }

    &_active {
        background-color: $primaryColor1;
        color: #fff;
    }
}

.projects-block {
    margin-top: 61px;
    display: flex;
    gap: 30px;

    &_clm {
        display: flex;
        gap: 30px;
        flex-direction: column;
    }

    &__item {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    &__info-el {
        display: flex;
        justify-content: space-between;
    }
}

.star {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>