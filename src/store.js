import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = 'http://localhost:3000/'

export default new Vuex.Store({
  state: {
  	products: [],
  },
  getters: {},
  mutations: {
  	CACHE_PRODUCTS(state, products) {
  		state.products = products;
  	}
  },
  actions: {
  	async fetchProducts(context, payload) {
  		const { data } = await axios.get('/api/products', {
  			headers: {
				'Access-Control-Allow-Origin': '*',
			},
  		});
  		context.commit('CACHE_PRODUCTS', data);
  	}
  }
});
