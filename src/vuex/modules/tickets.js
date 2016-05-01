// vuex/modules/tickets.js
import {
  RECEIVE_TICKETS,
  ADD_TO_CART,
  REMOVE_TO_CART
} from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [RECEIVE_TICKETS] (state, tickets) {
    state.all = tickets
  },

  [ADD_TO_CART] (state, ticketId) {
    state.all.find(p => p.id === ticketId).inventory--
  },

  [REMOVE_TO_CART] (state, ticketId) {
    state.all.find(p => p.id === ticketId).inventory++
  }
}

export default {
  state,
  mutations
}
