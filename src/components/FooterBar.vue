<template>
    <footer>
        <div class="total_price_wrapper active">
            <var>Total Price : {{ total | currency }}</var>
        </div>
        <div class="footer_wrapper">
            <a v-link="{ path: '/' }" class="back_button navigation_button">
                 <i class="fa fa-arrow-circle-left"></i>
                <span>Back</span>
            </a>
            <a v-link="{ path: '/summarypage' }" class="next_button navigation_button" :class="{ 'active': isPagingEnabled }">
                <span>Next</span>
                <i class="fa fa-arrow-circle-right"></i>
            </a>
        </div>
    </footer>
</template>
<script>
    import { cartTickets } from '../vuex/getters'

    export default {
      vuex: {
        getters: {
          tickets: cartTickets
        }
      },
      computed: {
        total () {
          return this.tickets.reduce((total, p) => {
            return total + p.price * p.quantity
          }, 0)
        },
        isPagingEnabled () {
          // @TODO if the cart is not empty
          return true
        }
      }
    }
</script>
<style lang="scss">
    $white: #fff;
    $navigation_button_background: #9899A6;
    $navigation_button_active_background: #2A2857;
    $navigation_button_color: #DFE8F2;

    footer {
        position: fixed;
        width: 100%;
        bottom: 6vw;
        right: 1vw;
    .footer_wrapper {
        position: absolute;
        right: 3.5vw;
        top: 0;
    .navigation_button {
        display: inline-block;
        margin: 0 0 0 2vw;
        height: 3.5vw;
        width: 20vw;
        background: $navigation_button_background;
        color: $navigation_button_color;
        font: 1.7vw/3.5vw 'Arial',sans-serif;
        padding: 0 0.6vw;
    span {
        margin: 0.5vw;
    }
    &.active {
         background: $navigation_button_active_background;
         color: $white;
     }
    &:hover {
         cursor: pointer;
     }
    }
    .next_button {
        text-align: end;
    }
    }
    }
    .total_price_wrapper {
        display: none;
        position: fixed;
        right: 4.5vw;
        bottom: 6vw;
    &.active {
         display: block;
     }
    var {
        text-align: end;
        font-size: 2vw;
    &.summary_page {
         font-size: 4vw;
     }
    &.paying_page {
         display: none;
     }
    }
    }
</style>