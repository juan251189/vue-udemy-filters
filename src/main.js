import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('to-lowecase');
Vue.filter('length',function (value){
    let textLength = value.length
    return (value+" ("+ textLength +") ")
})



new Vue({
  render: h => h(App),
}).$mount('#app')
