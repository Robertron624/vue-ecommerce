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
    productInPDP: null,
    isMinicartOpen: false
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
    getProductFromMiniCart: (state) => (id) => {
      return state.cartItems.find((el) => el.id === id)
    },
    getQuantityOfProductInCart: (state) => (id) => {
      const product = state.cartItems.find((el) => el.id === id)
      return product.quantity
    },
    getProductInPDP: (state) => state.productInPDP,

    getIsMiniCartOpen: (state) => state.isMinicartOpen
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

    setProductInPDP: (state, product) => (state.productInPDP = product),

    addQuantityByOne: (state, id) => {
      const product = state.cartItems.find((el) => el.id === id)

      if(product) {
        product.quantity++
      }
    },
    removeQuantityByOne: (state, id) => {
      const product = state.cartItems.find((el) => el.id === id)
      product.quantity--
    },
    toggleMiniCart: (state) => (state.isMinicartOpen = !state.isMinicartOpen), // for opening and closing mini cart in the header icon
    closeMiniCart: (state) => (state.isMinicartOpen = false) // for closing mini cart when selecting a product from product grid
  },
  actions: {

    async addQuantityByOne({ commit }, id) {
      commit('addProductQuantityByOne', id)
    },

    async removeQuantityByOne({ commit }, id) {
      commit('removeProductQuantityByOne', id)
    },

    async toggleMiniCart({ commit, state }) {

      if (state.isMinicartOpen) {
        commit('toggleMiniCart')
        document.body.style.overflow = 'unset'
      } else {
        commit('toggleMiniCart')
        document.body.style.overflow = 'hidden'
      }
    },      
  }
})

app.use(store)

app.mount('#app')
