import VueRouter from 'vue-router'
import Vue from 'vue'
import HomePage from '../pages/HomePage.vue'
import SelectPage from '../pages/SelectPage.vue'
import SummaryPage from '../pages/SummaryPage.vue'
import PayingPage from '../pages/PayingPage.vue'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/selectpage': {
    component: SelectPage
  },
  '/summarypage': {
    component: SummaryPage
  },
  '/payingpage': {
    component: PayingPage
  },
  '/': {
    component: HomePage
  }
})

export default router
