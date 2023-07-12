import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

import products from './mockData.js'

const store = createStore({
  state() {
    return {
      allProducts: products,
      cartItems: []
    }
  },
  mutations: {
    setProducts: (state, products) => (state.allProducts = products),
    setCartItem: (state, item) => state.cartItems.push(item),
    removeCartItem: (state, id) =>
      state.cartItems.splice(
        state.cartItems.findIndex((el) => el.id === id),
        1
      )
  },
  actions: {
    addItemToCart({ commit }, cartItem) {
      commit('setCartItem', cartItem)
    },
    async deleteCartItem({ commit }, id) {
      commit('removeCartItem', id)
    }
  }
})

app.use(store)

app.mount('#app')
