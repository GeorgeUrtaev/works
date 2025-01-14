<template>
	<h1>{{firstTitle}}</h1>
	<div>{{summ}}</div>
	<p v-if="isVisible">Я хочу исчезнуть</p>
	<p>Вывожу на экран вычисляемое свойство: {{test}}</p>
	<button @click = "suumm" >НАЖМИ</button>
	<input type="text" v-model="geor">
	<span>{{geor}}</span>
	<ul>
		<li v-for = "todo in todos" :key = "todo.id">
			{{todo.action}}
		</li>
	</ul>
</template>


<script>
	export default {
		props:
		{
			firstTitle: String
		},
		data()
		{
			return {
				count: 1001,
				firstVal: 6,
				secondVal: 3,
				isVisible: true,
				summ: 0,
				geor: '',
				author:
				{
					name: 'John Doe',
					books: [
					'Vue 2 - Advanced Guide',
					'Vue 3 - Basic Guide',
					'Vue 4 - The Mystery'
					]
				},
				todos:
				[
					{
						id: 1,
						action: 'Провести занятие в 14:00'
					},
					{
						id: 2,
						action: 'Провести занятие в 16:00'
					},
					{
						id: 3,
						action: 'Провести занятие в 18:45'
					},
				]
			}
		},
		methods:
		{
			suumm()
			{
				this.summ = this.firstVal + this.secondVal

				// this.count++
			}
		},
		computed:
		{
			test()
			{
				return this.author.books.length > 0 ? 'Да' : 'Нет'
			}
		}
	}
</script>


<style>
	
</style>