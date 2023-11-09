import { createStore } from 'vuex'

export default createStore({
  state: {
    data: [],
    data2: []
  },
  getters: {
    getDataItems(state) {
      return state.data.lenght
    }
  },
  mutations: {
    SET_DATA1(state, data) {
      state.data = data
    },
    SET_DATA2(state, data) {
      state.data2 = data
    }
  },
  actions: {
    fetchData1(context) {
      setTimeout(() => {
        const data1 = [{
          title: 'Minimal Look Bedrooms',
          p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
          p2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        }
        ]
        context.commit('SET_DATA1', data1)
      }, 300)
    },
    fetchData2(context) {
      setTimeout(() => {
        const data2 = [
          require('@/assets/img/projects_db/Photo-10.jpg'),
          require('@/assets/img/projects_db/Photo-10.jpg'),
          require('@/assets/img/projects_db/Photo-10.jpg'),
          require('@/assets/img/projects_db/Photo-10.jpg'),
          require('@/assets/img/projects_db/Photo-10.jpg')
        ]
        context.commit('SET_DATA2', data2)
      }, 500)
    }
  },
  modules: {
  }
})
