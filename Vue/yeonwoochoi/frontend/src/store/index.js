import Vue from 'vue'
import Vuex from 'vuex'

import boardModule from '@/store/board/BoardModule.js'
import productModule from '@/store/Product/ProductModule.js'
import uiVuetifyModule from '@/store/uiVuetify/UiVuetifyModule.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
  boardModule: boardModule,
  productModule: productModule,
  uiVuetifyModule: uiVuetifyModule
},
})

export default store