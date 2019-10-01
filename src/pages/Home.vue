<template>
  <div class="home">
  	<div class="product-list">
  		<product v-for="product in products" :product="product" :key="product.id"></product>
  	</div>
  </div>
</template>

<script>
import product from '@/components/product';
export default {
  name: "home",
  created() {
  	this.$store.dispatch('fetchProducts')
  },
  computed: {
  	products() {
  		return this.$store.state.products;
  	}
  },
  components: {
  	product
  }
};
</script>

<style lang="sass" scoped>
.home
	width: 100%
	padding: 40px 20px
.product-list
	padding: 0 20px
	display: grid
	grid-gap: 20px
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))
</style>
