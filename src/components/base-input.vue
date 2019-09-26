<template>
	<div class="base-input">
		<div class="base-input-icon">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.1 26.1" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26.1 26.1">
				<path d="m25.806,22.9l-5.4-5.4c-0.2-0.2-0.2-0.4-0.1-0.6 1.1-1.7 1.7-3.7 1.7-5.9 0-6.1-4.9-11-11-11s-11,4.9-11,11 4.9,11 11,11c2.2,0 4.2-0.6 5.9-1.7 0.2-0.1 0.5-0.1 0.6,0.1l5.4,5.4c0.4,0.4 1,0.4 1.4,0l1.4-1.4c0.5-0.5 0.5-1.1 0.1-1.5zm-14.7-4.9c-3.9,0-7-3.1-7-7s3.1-7 7-7 7,3.1 7,7-3.1,7-7,7z"/>
			</svg>	
		</div>		
		<input type="text" @input="val => $emit('input', val)" :value="value" :placeholder="placeholder">
	</div>
</template>

<script>
export default {
	props: ['value', 'placeholder'],
};
</script>

<style lang="sass" scoped>
@mixin placeholder()
  input::-webkit-input-placeholder
    @content
  input:-moz-placeholder
    @content
  input::-moz-placeholder
    @content
  input:-ms-input-placeholder
    @content

.base-input
	position: relative

.base-input-icon
	position: absolute
	top: 50%
	left: 16px
	transform: translateY(-50%)
	> svg
		fill: white
		width: 26.1px
		height: 26.1px

input
	height: 48px
	width: 344px
	color: rgba(255, 255, 255, 0.68)
	border: none
	border-radius: 2px
	padding: 12px 48px 12px 64px
	background-color: rgba(0, 0, 0, 0.24)
	@include placeholder
		color: rgba(255, 255, 255, 0.68)

</style>
