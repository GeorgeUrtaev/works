<template>
	<ul v-for="(items, keys) in todos">
		<li>{{todos[keys].action}}</li>
	</ul>
</template>
<script>
	export default 
	{
		props:
		{

		},
		data()
		{
			return {
				todos:
				[
					{
						id:1,
						action: 'докопаться до препода или учеников',
					},
					{
						id:2,
						action: 'позавтракать',
					},
					{
						id:3,
						action: 'изучить fetch',
					},
					{
						id:4,
						action: 'изучить v-for',
					},
				]
			}
		}
	}
</script>
<style>

</style>