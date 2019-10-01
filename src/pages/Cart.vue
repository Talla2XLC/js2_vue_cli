<template>
	<div class="cart">
		<div class="left">
			<div class="cart-item" v-for="item in cart">
				<div class="product-name">
					{{ item.title }}					
				</div>
				<div class="product-info">
					Количество: {{ item.count }} <br>
					Цена: {{ item.price }} руб.<br>
					Сумма: {{ getProductPrice(item.count, item.price) }} руб.
				</div>
				<button @click="removeFromCart(item.id)">Удалить</button>
			</div>
		</div>
		<div class="right">
			{{ totalPrice}}
		</div>
		
	</div>
</template>

<script type="text/javascript">
export default {
	created() {
		this.$store.dispatch('fetchCart');
	},
	computed: {
		cart() {
			return this.$store.state.cart;
		},
		totalPrice() {
			return this.$store.getters.totalPrice;
		}
	},
	methods: {
		removeFromCart(productId) {
			this.$store.dispatch('removeFromCart', productId);
		},
		getProductPrice(count, price) {
			return price * count;
		}
	}
};
</script>

<style lang="sass" scoped>
.cart
	padding: 20px
	display: flex
	width: 100%

.left, .right
	box-shadow: 0 2px 4px rgba(0,0,0,0.25)
	min-height: 200px

.left
	width: calc(100% - 370px)

.right
	margin-left: auto
	width: 350px

.cart-item
	padding: 25px 20px

.product-info
	font-size: 14px
	color: rgba(0,0,0,.54)

.product-name
	font-size: 16px
	margin-bottom: 10px
	font-weight: 800

</style>