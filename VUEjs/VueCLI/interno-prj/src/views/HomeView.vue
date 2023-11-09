<template>
  <main class="main-home">
    <div class="get-started center">
      <img src="@/assets/img/home/Photo.jpg" alt="background" class="img img_get-started">
      <div class="get-started__info">
        <h2 class="title title_65">Let Your Home Unique</h2>
        <p class="text text_22">There are many variations of the passages of
          lorem Ipsum fromavailable, majority.</p>
        <router-link to="/project.html" class="rect-btn">Get Started<img src="@/assets/img/icons/arrow.svg" alt="arrow"></router-link>
      </div>
    </div>
    <div class="projects-info center">
      <h3 class="title title_50">Follow Our Projects</h3>
      <p class="text text_22">It is a long established fact that a reader will be distracted by the of readable
      </p>
      <p class="text text_22">content of page lookings at its layouts points.</p>
    </div>
    <project-item-component />
    <div class="counter-block">
      <div class="counter vertical-line">
        <h3 class="title title_counter">12</h3>
        <p class="text text_counter">Years Of Experiance</p>
      </div>
      <div class="counter vertical-line">
        <h3 class="title title_counter">95</h3>
        <p class="text text_22">Success Project</p>
      </div>
      <div class="counter vertical-line">
        <h3 class="title title_counter">15</h3>
        <p class="text text_counter">Active Project</p>
      </div>
      <div class="counter">
        <h3 class="title title_counter">95</h3>
        <p class="text text_counter">Happy Customers</p>
      </div>
    </div>
    <div class="articles-news-block center">
      <h3 class="title title_50 text-center">Articles & News</h3>
      <p class="text text_22 text-center">It is a long established fact that a reader will be distracted by the of
        readable content<br>of a page when lookings at its layouts the points of using.</p>
      <div class="articles-news-block__items">
        <div class="articles-news-block__item" v-for="i in articlesData">
          <articles-news-component :imgSrc="i.imgSrc" :imgAlt="i.imgAlt" :roomDesign="i.roomDesign"
            :articleTitle="i.articleTitle" :date="i.date" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ArticlesNewsComponent from '@/components/ArticlesNewsComponent.vue'
import ProjectItemComponent from '@/components/ProjectItemComponent.vue'

export default {
  name: 'HomeView',
  components: {
    ArticlesNewsComponent,
    ProjectItemComponent
  },
  data() {
    return {
      articlesData: [
        {
          imgSrc: require('@/assets/img/articles_db/Photo-2.jpg'),
          imgAlt: 'Kitchen',
          roomDesign: 'Kitchen Design',
          articleTitle: 'Lets Get Solution Building Construction Work',
          date: '26 December,2022'
        },
        {
          imgSrc: require('@/assets/img/articles_db/Photo-3.jpg'),
          imgAlt: 'Living',
          roomDesign: 'Living Design',
          articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 October,2022'
        },
        {
          imgSrc: require('@/assets/img/articles_db/Photo-4.jpg'),
          imgAlt: 'Interior',
          roomDesign: 'Interior Design',
          articleTitle: 'Best For Any Office & Business Interior Solution',
          date: '2 January,2023'
        }
      ],
    }
  }
}

</script>

<style scoped lang="scss">
@import '@/assets/styles/_vars-mixins.scss';
@import '@/assets/styles/style.scss';
@import '@/assets/styles/_articles-news-block.scss';
@import '@/assets/styles/_home.scss';
</style>
