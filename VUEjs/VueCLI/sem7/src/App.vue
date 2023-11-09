<template>
  <div class="TASK1 ">
    <h3>TASK1. COUNTER</h3>
    <div>{{ count }}</div>
    <button @click="decrease">-</button>
    <button @click="increase">+</button>
  </div>
  <hr>
  <div class="TASK2">
    <h3>TASK2 CART</h3>
    <ul>
      <li v-for="item in getCartItems" :key="item.id">
        {{ `${item.name}: ${item.price}` }}
      </li>
    </ul>
    <h5>Total items: {{ getTotalCartItems }}</h5>
    <h5>Total cart price: {{ getTotalCartItemsPrice }}</h5>
    <button @click="addItemToCart({id:1, name:'item', price:100})">ADD TO CART</button>
  </div>
  <hr>
  <div class="TASK3">
    <h3>TASK 3. DATA FROM SERVER</h3>
    <ul>
      <li v-for="item in data" :key="item">
        {{ item }}
      </li>
    </ul>
    <button @click="fetchData">GET DATA</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapState(['count', 'data']),
    ...mapGetters(['getCartItems', 'getTotalCartItems', 'getTotalCartItemsPrice'])
  }, methods: {
    ...mapMutations(['increase', 'decrease', 'ADD_ITEM']),
    ...mapActions(['addItemToCart', 'fetchData'])
  },
}
</script>

<style lang="scss"></style>
