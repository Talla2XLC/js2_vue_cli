import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = 'http://localhost:3000/'

export default new Vuex.Store({
  state: {
  	products: [],
  	cart: [],
  	product: null
  },
  getters: {
  	totalPrice(state) {
  		return state.cart.reduce((sum, item) => {
  			return sum += item.price * item.count;
  		}, 0);
  	}
  },
  mutations: {
  	CACHE_PRODUCTS(state, products) {
  		state.products = products;
  	},
  	CACHE_CART(state, products) {
  		state.cart = products;
  	},
  	CACHE_PRODUCT(state, product) {
  		state.product = product;
  	},
  },
  actions: {
  	async fetchProduct(context, id) {
  		const { data } = await axios.get(`/api/products/${id}`, {
  			headers: {
				'Access-Control-Allow-Origin': '*',
			},
  		});
  		context.commit('CACHE_PRODUCT', data);
  	},
  	async fetchCart(context) {
  		const { data } = await axios.get(`/api/cart`, {
  			headers: {
				'Access-Control-Allow-Origin': '*',
			},
  		});
  		context.commit('CACHE_CART', data);
  	},
  	async fetchProducts(context) {
  		const { data } = await axios.get('/api/products', {
  			headers: {
				'Access-Control-Allow-Origin': '*',
			},
  		});
  		context.commit('CACHE_PRODUCTS', data);
  	},
  	async addToCart(context, productId) {
  		await axios.post(`/api/products/${productId}`);  		
  	},
  	async removeFromCart(context, productId) {
  		await axios.delete(`/api/cart/${productId}`);
  		context.dispatch('fetchCart');
  	}
  }
});
