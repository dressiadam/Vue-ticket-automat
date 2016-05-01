<template>
    <div class="purchase_process">
        <header-bar></header-bar>
         <div class="content">
            <div class="select_page process_page is_first_process_page active">
                <h2>Please select travelcard</h2>
                <button @click="addOnlyOneTicketToCart(p)" v-for="p in tickets" data-ticket-type="{{ p.type }}" class="ticket_box">
                   <strong>{{ p.quantity }}</strong>
                    <div class="ticket_sign">
                        <div class="circle_full circle">{{ p.icon }}</div>
                    </div>
                    <div class="ticket_text">
                        <h4 class="ticket_validity">{{ p.title }}</h4>
                        <h4 class="ticket_type">{{ p.zone }}</h4>
                        <h5 class="ticket_price">{{ p.price | currency }}</h5>
                    </div>
                </button>
            </div>
         </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar.vue'
    import FooterBar from '../components/FooterBar.vue'
    import { getAllTickets, addOnlyOneTicketToCart } from '../vuex/actions'
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
          addOnlyOneTicketToCart
        }
      },
      created () {
        this.getAllTickets()
      }
    }
</script>

<style lang="scss">
    $white: #fff;
    $black: #000;
    $site_border_color: #92A2B9;
    $purchase_process_background: #C7C9C8;
    $ticket_price_color: #CDD6FA;
    $ticket_box_background: #282F75;
    $ticket_type_1_color: #619240;
    $ticket_type_2_color: #C6710D;
    $ticket_type_3_color: #158AB5;
    $select_page_background: #657183;
    $counters_button_background: #9E9EA2;
    $paying_button_background: #7CB252;

    .purchase_process {
        width: 100%;
        height: 100%;
        border: 15px solid $site_border_color;
        background: $purchase_process_background;
    &.active {
         display: table-cell;
     }

    .content {
    .ticket_validity,
    .ticket_type {
        color: white;
        position: absolute;
        top: 0.5vw;
        left: 0.5vw;
    }
    .ticket_type {
        color: white;
        position: absolute;
        top: 4vw;
        left: 0.5vw;
    }
    .ticket_price {
        color: $ticket_price_color;
        position: absolute;
        bottom: 1vw;
        right: 1vw;
        margin: 0;
    }
    .ticket_box {
        width: 44.5vw;
        height: 11vw;
        position: relative;
        display: inline-block;
        background: $ticket_box_background;
        margin: 1vw 0 0 3vw;
        padding: 0;
        border: 0;
    &.selected {
         -moz-box-shadow: 0 0 0 5px hsl(0, 0%, 80%), 0 0 0 10px hsl(0, 0%, 90%);
         -webkit-box-shadow: 0 0 0 5px hsl(0, 0%, 80%), 0 0 0 10px hsl(0, 0%, 90%);
         box-shadow: 0 0 0 5px hsl(0, 0%, 80%), 0 0 0 10px hsl(0, 0%, 90%);
     }
    .ticket_sign {
        width: 11vw;
        height: 11vw;
        float: left;
    .circle {
        border-radius: 50%;
        background: $white;
        width: 8vw;
        height: 8vw;
        position: absolute;
        top: 1.5vw;
        left: 1.5vw;
        text-align: center;
        font: 3vw/8vw 'Arial',sans-serif;
    .fa-users {
        font-size: 5vw;
        line-height: 8vw;
    }
    }
    }
    .ticket_text {
        position: relative;
        display: inline-block;
        width: 33.5vw;
        height: 11vw;
    }
    &:hover {
         cursor: pointer;
     }
    &[data-ticket-type="24h_bp"] {
    .ticket_sign {
        background: $ticket_type_1_color;
    .circle {
        color: $ticket_type_1_color;
    }
    }
    }
    &[data-ticket-type="5_30_bp"] {
    .ticket_sign {
        background: $ticket_type_1_color;
    .circle {
        color: $ticket_type_1_color;
    }
    }
    }
    &[data-ticket-type="24h_bp_group"] {
    .ticket_sign {
        background: $ticket_type_2_color;
    .circle {
        color: $ticket_type_2_color;
    }
    }
    }
    &[data-ticket-type="7day"] {
    .ticket_sign {
        background: $ticket_type_3_color;
    .circle {
        color: $ticket_type_3_color;
    }
    }
    }
    }


    .select_page {
        /*display: none;*/
    h2 {
        margin: 2vw 0 0 3vw;
        color: $select_page_background;
    }
    &.active {
         display: block;
     }
    }
    .summary_page {
        /*display: none;*/
        max-height: 29vw;
        margin: 3vw 0 0 0;
    &.active {
         display: block;
     }
    &.many_tickets {
         overflow-y: scroll;
     }
    .one_ticket_type_row {
        position: relative;
        width: 90vw;
        height: 11vw;
        margin: 1vw 0 0 3vw;
    &.active {
         display: block;
    }
    .ticket_counter {
        display: block;
        float: left;
        margin: 2.8vw 0 0 5vw;
    .counter_buttons {
        width: 5.5vw;
        height: 5.5vw;
        background: $counters_button_background;
        float: left;
        font: 3vw/5.5vw 'Arial',sans-serif;
        color: $white;
        text-align: center;
        -moz-box-shadow: inset -1px -2px 5px $black, inset 1px 2px 5px $white;
        -webkit-box-shadow: inset -1px -2px 5px $black, inset 1px 2px 5px $white;
        box-shadow: inset -1px -2px 5px $black, inset 1px 2px 5px $white;

    &:hover {
         cursor: pointer;
         -moz-box-shadow: inset -1px -2px 5px $white, inset 1px 2px 5px $black;
         -webkit-box-shadow: inset -1px -2px 5px $white, inset 1px 2px 5px $black;
         box-shadow: inset -1px -2px 5px $white, inset 1px 2px 5px $black;
     }
    }
    .counter_display {
        background: $white;
        width: 7.5vw;
        height: 5.5vw;
        float: left;
        font: 3vw/5.5vw 'Arial',sans-serif;
        text-align: center;
    }
    }
    .ticket_type_total_price {
        float: left;
        margin: 1vw 0 0 13vw;
    }
    }
    .ticket_box {
        display: block;
        margin: 0;
        float: left;
    }
    }
    .paying_page {
        /*display: none;*/
        text-align: center;
    &.active {
         display: block;
     }
    .paying_button {
        margin: auto;
        width: 17vw;
        background: $paying_button_background;
        color: $white;
        font: 3vw 'Arial',bold;
        padding: 0 0.6vw;
        text-align: center;
    span {
        margin: 0 0 0 4vw;
    }
    &:hover {
         cursor: pointer;
     }
    }
    .paying_inprogress {
        display: none;
    &.active {
         display: block;
         font-size: 7vw;
         color: $white;
     }
    }
    var {
        margin: 9vw 0 2vw 0;
        font-size: 5vw;
    }
    }
    }
    }
</style>
