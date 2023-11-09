<template>
    <div class="projects-block center">
        <div class="projects-block__item" v-for="item in projectsData" :key="item">
            <img :src="item.imgSrc" alt="project img" v-bind:class="[item.class, 'img']">
            <div class="projects-block__info">
                <router-link to="/project-details.html" class="title title_25">{{ item.projectName }}</router-link>
                <p class="text text_22">{{ item.tags }}</p>
            </div>
            <router-link to="/project-details.html">
                <svg class="rnd-btn" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                    fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProjectItemComponent',
    data() {
        return {
            projectsData: [
                {
                    id: 0,
                    imgSrc: require('@/assets/img/our_projects_photos/Photo-2.jpg'),
                    projectName: 'Modern Kitchan',
                    tags: 'Decor / Artchitecture',
                    class: { 'img_projects-block-tl': true }
                },
                {
                    id: 1,
                    imgSrc: require('@/assets/img/our_projects_photos/Photo-3.jpg'),
                    projectName: 'Modern Kitchan',
                    tags: 'Decor / Artchitecture',
                    class: { 'img_projects-block-tr': true }
                },
                {
                    id: 2,
                    imgSrc: require('@/assets/img/our_projects_photos/Photo-4.jpg'),
                    projectName: 'Modern Kitchan',
                    tags: 'Decor / Artchitecture',
                    class: { 'img_projects-block-bl': true }
                },
                {
                    id: 3,
                    imgSrc: require('@/assets/img/our_projects_photos/Photo-5.jpg'),
                    projectName: 'Modern Kitchan',
                    tags: 'Decor / Artchitecture',
                    class: { 'img_projects-block-br': true }
                },
            ],
        }
    },
}
</script>
<style scoped lang="scss">
.projects-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 104px;
    row-gap: 56px;

    &__item {
        display: flex;
        flex-wrap: wrap;
        column-gap: 260px;
        row-gap: 24px;
    }
}

.img_projects-block-tl {
    border-top-right-radius: 70px;
}

.img_projects-block-tr {
    border-top-left-radius: 70px;
}

.img_projects-block-bl {
    border-bottom-right-radius: 70px;
}

.img_projects-block-br {
    border-bottom-left-radius: 70px;
}
</style>