import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

import products from './mockData.js'

const store = createStore({
  state: {
    allProducts: products,
    cartItems: [],
    productInPDP: null
  },

  getters: {
    getProducts: (state) => state.allProducts,
    getCartItems: (state) => state.cartItems,

    getCartTotal: (state) => {
      if (state.cartItems.length > 0) {
        return state.cartItems.map((item) => item.price).reduce((prev, curr) => prev + curr)
      } else {
        return 0
      }
    },
    getProductsAsThreeArrays: (state) => {
      const products = state.allProducts

      let firstArray = []
      let secondArray = []
      let thirdArray = []

      for (let i = 0; i < products.length; i++) {
        if (i % 3 === 0) {
          firstArray.push(products[i])
        } else if (i % 3 === 1) {
          secondArray.push(products[i])
        } else {
          thirdArray.push(products[i])
        }
      }
      return [firstArray, secondArray, thirdArray]
    },

    getProductInPDP: (state) => state.productInPDP
  },

  mutations: {
    setProducts: (state, products) => (state.allProducts = products),
    setCartItem: (state, item) => state.cartItems.push(item),
    removeCartItem: (state, id) =>
      state.cartItems.splice(
        state.cartItems.findIndex((el) => el.id === id),
        1
      ),
    addCartItem: (state, item) => state.cartItems.push(item),

    setProductInPDP: (state, product) => (state.productInPDP = product)
  },
  actions: {
    async deleteCartItem({ commit }, id) {
      commit('removeCartItem', id)
    },
    async addCartItem({ commit }, item) {
      commit('addCartItem', item)
    }
  }
})

app.use(store)

app.mount('#app')
