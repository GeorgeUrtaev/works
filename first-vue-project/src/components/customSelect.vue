<template>
	<div class="selector">
		<div class="selector__btn" @click = 'showList'>
			<span>{{langVal || 'Ру'}}</span>
			<span class="selector__arr" :class = "{active: isActive}">|</span>
		</div>
		<div class="selector__list" :class = "{active: isActive}">
			<div
				class="selector__item"
				v-for = "(lang, index) in translatedArr"
				@click="changeLang(lang.lang)"
			>
				{{lang.lang}}
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import { ref } from 'vue'
	export default {
		props:
		{
			translatedArr: Array
		},
		setup(props, ctx)
		{
			const isActive = ref(false)
			const langVal = ref('')
			const showList = ()=>
			{
				isActive.value = !isActive.value
			}
			const changeLang = (val)=>
			{
				langVal.value = val
				ctx.emit('translateFunc',props.translatedArr, val)
			}
			return {
				isActive,
				showList,
				changeLang,
				langVal
			}
		}
	}
</script>
<style type="text/css">
	.selector
	{
		width: 400px;
		position: relative;
	}
	.selector__btn
	{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		border: 1px solid black;
		border-radius: 4px;
		padding: 0 10px;
		cursor: pointer;
	}
	.selector__list
	{
		position: absolute;
		background: white;
		width: 100%;
		top: 43px;
		left: 0;
		border: 1px solid black;
		border-radius: 4px;
		transition: .3s;
		visibility: hidden;
		opacity: 0;
	}
	.selector__arr
	{
		transition: .3s;
	}
	.selector__arr.active
	{
		transform: rotate(90deg);
	}
	.selector__list.active
	{
		visibility: visible;
		opacity: 1;
	}
	.selector__item
	{
		cursor: pointer;
		height: 40px;
		line-height: 40px;
		padding: 0 10px;
		transition: .3s;
	}
	.selector__item:hover
	{
		background: blue;
		color: white;
	}
</style>







