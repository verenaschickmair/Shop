// Vue.use(Vuex)

// Module importieren

import {createStore} from 'vuex'

import auth from './modules/auth';
import cart from './modules/cart';
import product from './modules/product';

//VUE.JS 2
// export default new Vuex.Store({
//   modules: {
//     auth,
//     cart,
//     product
//   }
// })

//VUE.JS 3
const store = createStore({
  modules: {
    auth,
    cart,
    product
  }
})

export default store;