<template>
	<div class="product-detail">
		<h1>{{ product.title }}</h1>
		<img :src="product.img" alt="">
	</div>
</template>

<script>
export default {
	computed: {
	  	product() {
	  		return this.$store.state.product;
	  	}
	},
	created() {
		const { productId } = this.$route.params;
		this.$store.dispatch('fetchProduct', productId);
	}
};
</script>

<style lang="sass">
.product-detail
	display: flex
	flex-flow: column nowrap
	justify-content: space-around
	align-items: center
	width: 100%
h1
	font-size: 40px
img
	height: 600px
</style>