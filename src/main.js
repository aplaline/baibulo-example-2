import Vue from 'vue'
import App from './App.vue'

if (process.env.GIT_BRANCH) {
  console.log('branch', process.env.GIT_BRANCH, 'commit', process.env.GIT_COMMIT)
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
