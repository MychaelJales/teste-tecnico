import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import orders from './modules/orders'

export default createStore({
  modules: {
    orders
  },
  actions,
  mutations
});
