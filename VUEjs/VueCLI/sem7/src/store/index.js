import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    cart: [],
    getData: []
  },
  getters: {
    getCartItems(state) {
      return state.cart
    },
    getTotalCartItems(state) {
      return state.cart.length
    },
    getTotalCartItemsPrice(state) {
      return state.cart.reduce((totalPrice, item) => totalPrice + item.price, 0)
    }
  },
  mutations: {
    increase(state) {
      state.count++
    },
    decrease(state) {
      state.count--
    },
    ADD_ITEM(state, item) {
      state.cart.push(item)
    },
    SET_DATA(state, data) {
      state.data = data
    }
  },
  actions: {
    addItemToCart(context, item) {
      context.commit('ADD_ITEM', item)
    },
    fetchData(context) {
      setTimeout(() => {
        const dataFromServer = ['data1', 'data2', 'data3']
        context.commit('SET_DATA', dataFromServer)
      }, 2000)
    }
  },
  modules: {
  }
})
