<template>
  <MoovieList />
</template>

<script>
import MoovieList from './components/task2/MoovieList.vue';
export default {
  name: 'App',
  components: {
    MoovieList
  },
}
</script>

<style lang="scss">
#app {
  margin: 60px 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
