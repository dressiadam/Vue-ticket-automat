<template>
    <div class="purchase_process">
        <header-bar></header-bar>
        <div class="content">
            <div class="summary_page process_page">
                <div v-for="p in tickets" data-ticket-type="{{ p.type }}"  class="one_ticket_type_row">
                    <button  data-ticket-type="{{ p.type }}" class="ticket_box">
                        <div class="ticket_sign">
                            <div class="circle_full circle">{{ p.icon }}</div>
                        </div>
                        <div class="ticket_text">
                            <h4 class="ticket_validity">{{ p.title }}</h4>
                            <h4 class="ticket_type">{{ p.zone }}</h4>
                            <h5 class="ticket_price">{{ p.price | currency }}</h5>
                        </div>
                    </button>
                    <div class="ticket_counter">
                        <button @click="removeToCart(p)" class="remove_ticket counter_buttons">
                            <i class="fa fa-minus">-</i>
                        </button>
                        <div class="counter_display">{{ p.quantity }}</div>
                        <button @click="addToCart(p)" class="add_ticket counter_buttons">
                            <i class="fa fa-plus">+</i>
                        </button>
                        <!--<h4 class="ticket_type_total_price">{{ p.quantity * p.price }}</h4>-->
                        <h4 class="ticket_type_total_price">{{ p.price }}</h4>
                    </div>
                </div>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar.vue'
    import FooterBar from '../components/FooterBar.vue'
    import { getAllTickets, addToCart, removeToCart } from '../vuex/actions'
    export default {
      components: {
        HeaderBar,
        FooterBar
      },
      vuex: {
        getters: {
          tickets: ({ tickets }) => tickets.all
        },
        actions: {
          getAllTickets,
          addToCart,
          removeToCart
        }
      },
      created () {
        this.getAllTickets()
      }
    }
</script>

<style lang="scss">

</style>