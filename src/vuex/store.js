import Vuex from 'vuex'
import Vue from 'vue'
import cart from './modules/cart'
import tickets from './modules/tickets'
import createLogger from '../middlewares/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    tickets
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
