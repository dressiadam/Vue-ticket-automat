export const cartTickets = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const ticket = state.tickets.all.find(p => p.id === id)
    return {
      id: ticket.id,
      title: ticket.title,
      zone: ticket.zone,
      type: ticket.type,
      icon: ticket.icon,
      price: ticket.price,
      inventory: ticket.inventory,
      quantity
    }
  })
}
