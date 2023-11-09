<template>
  <PaymentDisplay :items="paymentList"/>
  <AddListComp @addNewPay="addNewPay"/>
</template>

<script>
import PaymentDisplay from './components/PaymentDisplay.vue';
import AddListComp from './components/AddListComp.vue'

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddListComp
  },
  data() {
    return {
      paymentList: []
    }
  },
  methods: {
    fetchData() {
      return [
        {
          data: '28.03.2023',
          category: 'Food',
          value: 169
        },
        {
          data: '24.03.2023',
          category: 'Transport',
          value: 50
        },
        {
          data: '24.03.2023',
          category: 'Food',
          value: 532
        },
        {
          data: '22.03.2023',
          category: 'Clothes',
          value: 769
        },
      ]
    },
    addNewPay(data) {
      this.paymentList.push(data)
    }
  },
  created() {
    this.paymentList = this.fetchData()
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
