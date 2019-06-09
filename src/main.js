import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import VTooltip from 'v-tooltip'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(VTooltip)

new Vue({
  render: h => h(App),
}).$mount('#app')