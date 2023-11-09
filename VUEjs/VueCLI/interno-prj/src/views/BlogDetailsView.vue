<template>
  <main class="main-details">
    <div class="banner_blog-details">
    </div>
    <div class="full-post-box center">
      <div class="full-post">
        <h2 class="title title_50">{{ detailedArticle.articleTitle }}</h2>
        <img :src="detailedArticle.imgSrc" alt="article main photo" class="img img_blog-detailed">
        <div class="about-article">
          <p class="text text_16">{{ detailedArticle.date }}</p>
          <nav class="breadcrumb">
            <ul class="breadcrumb__ul">
              <li class="breadcrumb__li"><router-link class="text text_16" to="/">Home</router-link></li>
              <li class="breadcrumb__li"><router-link class="text text_16" to="/blog.html">Blog</router-link></li>
              <li class="breadcrumb__li"><router-link class="text text_16" to="/blog-details.html">{{
                detailedArticle.articleTitle
              }}</router-link></li>
            </ul>
          </nav>
        </div>
        <p class="text text_22">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
          popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injecthumour, or randomised words which don't look even
          slightly believable.
        </p>
        <p class="text text_22">
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
          repeat predefined chunks as necessary.
        </p>
        <div class="quote">
          <img src="@/assets/img/icons/quote.png" alt="quote img" class="img">
          <h3 class="title title_quote">The details are not the details.</h3>
          <h3 class="title title_quote">They make the design.</h3>
        </div>
        <h2 class="title title_50">Design sprints are great</h2>
        <p class="text text_22">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
          popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
        <ol class="text text_22 text_ol">
          <li class="text text_22 text_li">Contrary to popular belief.There are many variations of passages of
            Lorem
            Ipsum
            available, but the majority have suffered.</li>
          <li class="text text_22 text_li">Contrary to popular belief.There are many variations of passages of
            Lorem
            Ipsum
            available, but the majority have suffered.</li>
          <li class="text text_22 text_li">Contrary to popular belief.There are many variations of passages of
            Lorem
            Ipsum
            available, but the majority have suffered.</li>
        </ol>
        <img src="@/assets/img/blog_details/1.jpg" alt="img" class="img img_blog-detailed">
      </div>
      <div class="full-post-filters">
        <h3 class="title title_25">Tags</h3>
        <div class="full-post-filters__tags">
          <div class="full-post-filters__tag" v-for="i in buttons">
            <label :data-id="i.id" @change="sortArticles"><input :data-id="i.id" @click="filterArticles" type="radio"
                name="radio">{{ i.text }}</label>
          </div>
        </div>
        <div class="articles-news-block">
          <h2 class="title title_25">Filtred Articles</h2>
          <div class="articles-news-block__items articles-news-block__items_blog-detailed">
            <div class="articles-news-block__item" v-for="i in filtredArticles"
              @click="ShowDetailedArticle(i)">
              <articles-news-component :imgSrc="i.imgSrc" :imgAlt="i.imgAlt" :roomDesign="i.roomDesign"
                :articleTitle="i.articleTitle" :date="i.date" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import ArticlesNewsComponent from '@/components/ArticlesNewsComponent.vue'

export default {
  components: {
    ArticlesNewsComponent
  },
  data() {
    return {
      buttons: [
        { id: 'kitchen', text: 'Kitchen' },
        { id: 'bedroom', text: 'Bedroom' },
        { id: 'living', text: 'Living' },
        { id: 'interior-design', text: 'Interior Design' },
        { id: 'architecture', text: 'Architecture' },
        { id: 'building', text: 'Building' },
        { id: 'show-all', text: 'Show All' }
      ],
      articlesData: [
        {
          id: 'kitchen',
          imgSrc: require('@/assets/img/articles_db/Photo-2.jpg'),
          roomDesign: 'Kitchen Design',
          articleTitle: 'Lets Get Solution Building Construction Work',
          date: '26 December,2022'
        },
        {
          id: 'living',
          imgSrc: require('@/assets/img/articles_db/Photo-3.jpg'),
          roomDesign: 'Living Design',
          articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 October,2022'
        },
        {
          id: 'interior-design',
          imgSrc: require('@/assets/img/articles_db/Photo-4.jpg'),
          roomDesign: 'Interior Design',
          articleTitle: 'Best For Any Office & Business Interior Solution',
          date: '20 October,2022'
        },
        {
          id: 'kitchen',
          imgSrc: require('@/assets/img/articles_db/Photo-5.jpg'),
          roomDesign: 'Kitchen Design',
          articleTitle: 'Lets Get Solution Building Construction Work',
          date: '14 October,2022'
        },
        {
          id: 'living',
          imgSrc: require('@/assets/img/articles_db/Photo-6.jpg'),
          roomDesign: 'Living Design',
          articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '30 September,2022'
        },
        {
          id: 'building',
          imgSrc: require('@/assets/img/articles_db/Photo-7.jpg'),
          roomDesign: 'Interior Design',
          articleTitle: 'Best For Any Office & Business Interior Solution',
          date: '27 September,2022'
        },
        {
          id: 'architecture',
          imgSrc: require('@/assets/img/blog_details/1.jpg'),
          articleTitle: 'Lets Get Solution Building Construction Work',
          date: '26 December,2022',
          roomDesign: 'Interior Design',
        }
      ],
      filtredArticles: [],
      detailedArticle: {
        id: 'architecture',
        imgSrc: require('@/assets/img/blog_details/1.jpg'),
        articleTitle: 'Lets Get Solution Building Construction Work',
        date: '26 December,2022'
      }
    }
  },
  methods: {
    sortArticles(e) {
      if (document.querySelector('.full-post-filters__tag_active') !== null) {
        document.querySelector('.full-post-filters__tag_active').classList.remove('full-post-filters__tag_active');
      }
      const divButton = e.target.closest('.full-post-filters__tag');
      divButton.classList.add('full-post-filters__tag_active');
    },
    filterArticles(e) {
      if (e.target.dataset.id == 'show-all') {
        this.filtredArticles = this.articlesData
      } else {
        this.filtredArticles = this.articlesData.filter(article => article.id === e.target.dataset.id);
      }
    },
    ShowDetailedArticle(i) {
      this.detailedArticle = {
        imgSrc: i.imgSrc,
        articleTitle: i.articleTitle,
        date: i.date
      }
    }
  },
}
</script>
<style scoped lang="scss">
@import '@/assets/styles/_vars-mixins.scss';
@import '@/assets/styles/style.scss';
@import '@/assets/styles/_articles-news-block.scss';
@import '@/assets/styles/_blog-details.scss';
</style>
