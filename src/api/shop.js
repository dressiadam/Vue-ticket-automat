/**
 * Mocking client-server processing
 */
const _tickets = [
  {'id': 1, 'title': '24-hour', 'zone': 'Budapest-travelcard', 'type': '24h_bp', 'icon': '24h', 'price': 1650, 'inventory': 10},
  {'id': 2, 'title': '5/30 BKK 24-hour', 'zone': 'travelcard', 'type': '5_30_bp', 'icon': '5/30', 'price': 4550, 'inventory': 10},
  {'id': 3, 'title': '24-hour group', 'zone': 'Budapest-travelcard', 'type': '24h_bp_group', 'icon': 'x', 'price': 3300, 'inventory': 10},
  {'id': 4, 'title': 'Seven-day', 'zone': 'Budapest-travelcard', 'type': '7day', 'icon': '7', 'price': 4950, 'inventory': 10}
]

export default {
  getTickets (cb) {
    setTimeout(() => cb(_tickets), 100)
  },

  buyTickets (tickets, cb, errorCb) {
    setTimeout(() => {
    // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
      ? cb()
      : errorCb()
    }, 100)
  }
}
