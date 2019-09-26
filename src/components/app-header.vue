<template>
	<header>
		<div class="search">
			<base-input placeholder="Поиск"></base-input>
		</div>
		<button class="cart-btn">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
		</button>
	</header>
</template>

<script>
import baseInput from '@/components/base-input';

export default {
	name: 'app-header',
	components: {
		baseInput
	}
};
</script>

<style lang="sass" scoped>
header
	height: 56px
	width: 100%
	background-color: #607D8B
	align-items: center
	padding: 4px 20px
	display: flex
	justify-content: space-between

.cart-btn
	background-color: transparent
	border: none
	appearance: none
	outline: none
	cursor: pointer
	> svg
		fill: white
</style>