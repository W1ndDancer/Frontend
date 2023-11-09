<template>
  <button @click="upCounter">counter = {{ counter }}</button> <br> <br>
</template>

<script>
export default {
  name: 'CounterComp',
  data() {
    return {
      counter: 0
    }
  },

  methods: {
    upCounter() {
      this.counter++
    },
  },
  beforeCreate() {
    this.counter = 1
  },
  created() {
    this.counter = 2
  },
  beforeMount() {
    console.log('before mount');
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
