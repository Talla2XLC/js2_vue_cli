<template>
	<div class="product">
		<router-link :to="`/product/${product.id}`" class="product-image">
			<img :src="product.img" alt="product_img" width="205" height="205">
			<div class="product-title">
				{{ product.title }}
			</div>
		</router-link>
		<div class="product-description">
			Some interesting product description
		</div>
		<div class="product-actions">
			<button @click="addToCart">Купить</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['product'],
		methods: {
			addToCart() {
				this.$store.dispatch('addToCart', this.product.id);
			}
		}
	};
</script>

<style lang="sass" scoped>
.product
	height: 304px
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25)

.product-image
	height: 176px
	width: 100%
	padding: 10px
	display: flex
	justify-content: center
	align-items: center
	margin-bottom: 20px
	position: relative
	img
		height: 100%
		width: auto
		object-fit: cover

.product-title
	background-color: #607D8B
	color: #fff
	font-size: 18px
	padding: 0 6px
	line-height: 24px
	height: 24px
	position: absolute
	bottom: 5px
	left: 10px

.product-description
	font-size: 14px
	line-height: 24px
	padding: 0 20px
	margin-bottom: 10px

.product-actions
	height: 44px
	border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>