<template>
    <div class="purchase_process">
        <header-bar></header-bar>

        <div class="cart">
            <h2>Your Cart</h2>
            <p v-show="!tickets.length"><i>Please add some ticket to cart.</i></p>
            <ul>
                <li v-for="p in tickets">
                    {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
                </li>
            </ul>
            <p>Total: {{ total | currency }}</p>
            <p><button :disabled="!tickets.length" @click="checkout(tickets)">Checkout</button></p>
            <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
        </div>

        <div class="content">
            <div class="paying_page process_page is_last_process_page">
                <var>End Price</var>
                <div class="paying_button">
                    <i class="fa fa-credit-card"></i>
                    <span>PAY</span>
                </div>
                <i class="fa fa-spinner fa-pulse paying_inprogress"></i>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar.vue'
    import FooterBar from '../components/FooterBar.vue'
    import { checkout } from '../vuex/actions'
    import { cartTickets } from '../vuex/getters'

    export default {
      components: {
        HeaderBar,
        FooterBar
      },
      vuex: {
        getters: {
          tickets: cartTickets,
          checkoutStatus: ({ cart }) => cart.lastCheckout
        },
        actions: {
          checkout
        }
      },
      computed: {
        total () {
          return this.tickets.reduce((total, p) => {
            return total + p.price * p.quantity
          }, 0)
        }
      }
    }
</script>

<style lang="scss">

</style>