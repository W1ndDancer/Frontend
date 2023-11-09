<template>
  <nav>
    <router-link v-for="item in links" :key="item.id" :to="item.url">
      {{ item.title }}
    </router-link>
  </nav>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      links: [
        { id: 1, title: 'Home', url: '/' },
        { id: 2, title: 'About', url: '/about' },
        { id: 3, title: 'Contacts', url: '/contacts' },
        { id: 4, title: 'Catalog', url: '/catalog' }
      ]
    }
  },
}
</script>
<style lang="scss">
  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
</style>