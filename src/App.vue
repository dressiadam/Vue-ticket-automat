<template>
  <div id="app">
      <div class="container">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
  import SelectPage from './pages/SelectPage.vue'
  import SummaryPage from './pages/SummaryPage.vue'
  import PayingPage from './pages/PayingPage.vue'
  import FooterBar from './components/FooterBar.vue'
  import HeaderBar from './components/HeaderBar.vue'
  import store from './vuex/store'
  export default {
    store,
    components: { SelectPage, SummaryPage, PayingPage, FooterBar, HeaderBar }
  }
</script>
<style lang="scss">
  body {
      margin: 0;
      .container {
          display: table;
          width: 100%;
          height: 100%;
          position: fixed;
          h1 {
              font-size: 8vw;
          }
          h2 {
              font-size: 3vw;
          }
          h4 {
              font-size: 1.5vw;
          }
          h5 {
              font-size: 1.5vw;
          }
          var {
                font-weight: bold;
                font-style: normal;
          }
      }
  }
</style>



