import shop from '../api/shop'
import * as types from './mutation-types'

export const addToCart = ({ dispatch }, ticket) => {
  if (ticket.inventory > 0) {
    dispatch(types.ADD_TO_CART, ticket.id)
  }
}

export const removeToCart = ({ dispatch }, ticket) => {
  // @TODO: I need to get the original inventory value from shop.js instead of 10
  // @TODO: However here it will be better to use the own number of this ticket in the cart
  if (ticket.inventory < 10) {
    dispatch(types.REMOVE_TO_CART, ticket.id)
  }
}

export const addOnlyOneTicketToCart = ({ dispatch }, ticket) => {
  // @TODO: this magic number represents the inital value of inventory :S:S
  if (ticket.inventory === 10) {
    dispatch(types.ADD_TO_CART, ticket.id)
  } else {
    dispatch(types.REMOVE_TO_CART, ticket.id)
  }
}

export const checkout = ({ dispatch, state }, tickets) => {
  const savedCartItems = [...state.cart.added]
  dispatch(types.CHECKOUT_REQUEST)
  shop.buyTickets(
      tickets,
    () => dispatch(types.CHECKOUT_SUCCESS),
    () => dispatch(types.CHECKOUT_FAILURE, savedCartItems)
)
}

export const getAllTickets = ({ dispatch }) => {
  shop.getTickets(tickets => {
    dispatch(types.RECEIVE_TICKETS, tickets)
  })
}
