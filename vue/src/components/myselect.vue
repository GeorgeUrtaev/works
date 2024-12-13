<template>
	<select @change="$emit('translateFunc',translatedArr, item)" v-model="item">
		<option v-for="lang in translatedArr" :value="lang.lang">{{lang.lang}}</option>
	</select>
</template>

<script>
	export default {
		props:
		{
			translatedArr:Array,
		},
		data()
		{
			return {
				item: 'Ру'
			}
		},
	}
</script>

<style>
	
</style>