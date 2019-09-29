<template>
  <div class="home">
  	<div class="product-list"></div>
  </div>
</template>

<script>
import Product from '@/components/product';
export default {
  name: "home",
  created() {
  	this.$store.dispatch('fetchProducts')
  },
  componenets: {
  	Product,
  }
};
</script>

<style lang="sass" scoped>
.product-list
	padding: 0 20px
	display: grid
	grid-gap: 20px
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))
</style>
