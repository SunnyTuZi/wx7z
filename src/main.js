import 'lib-flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './until/axios';

import {NavBar,Button,Field,Circle,Cell,CellGroup,RadioGroup, Radio,Image,Checkbox  } from 'vant';

Vue.use(NavBar);
Vue.use(Button);
Vue.use(Field);
Vue.use(Circle);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Image);
Vue.use(Checkbox);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
