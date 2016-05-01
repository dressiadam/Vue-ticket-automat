import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE
} from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  lastCheckout: null
}

// mutations
const mutations = {
  [ADD_TO_CART] (state, ticketId) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === ticketId)
    if (!record) {
      state.added.push({
        id: ticketId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  [REMOVE_TO_CART] (state, ticketId) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === ticketId)
    if (record && record.quantity !== 1) {
      record.quantity--
    } else {
      record.quantity = 0
    }
  },

  [CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.lastCheckout = null
  },

  [CHECKOUT_SUCCESS] (state) {
    state.lastCheckout = 'successful'
  },

  [CHECKOUT_FAILURE] (state, savedCartItems) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.lastCheckout = 'failed'
  }
}

export default {
  state,
  mutations
}
