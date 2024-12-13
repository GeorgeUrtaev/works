<template>
	<div class="head">
		<input v-model='newTodo' type="text">
		<button @click="addTodo">Заполнить</button>
	</div>
	<ul class="list">
		<li class="item" v-for="(todo, index) in todoList" v-bind:class="{active : todo.completed}">
			<div class="item__flex">	
				<span>{{todo.id}}</span> 
				<span>{{todo.name}}</span>
			</div>
			<div class="btns">
				<button @click="compl(todo)" class="btn-compl">Выполнен</button>
				<button @click="deleteEl(index)" class="btn">Удалить Элемент</button>
			</div>
		</li>
	</ul>
</template>
<script>
	export default 
	{
		data()
		{
			return {
				newTodo: '',
				todoList:
		        [
	              {
	                id:1,
	                name: 'Заполнить банку водой',
	                complited: false,
	              },
	              {
	                id:2,
	                name:'Поспать пару часов',
	                complited: false,
	              },
	              {
	                id:3,
	                name:'Пойти на тренировки',
	                complited: false,
	              },
	              {
	                id:4,
	                name:'Пойти в баню',
	                complited: false,
	              },
		        ]
			}
		},
		methods:
		{
			addTodo()
			{
				this.todoList.push({
					id:this.todoList.length + 1,
					name: this.newTodo,
					complited: false,
				});
				this.newTodo = '';
			},
			deleteEl(idx)
			{
				this.todoList.splice(idx,1)
			},
			compl(el)
			{
				el.copmleted = !el.copmleted
			}
		}
	}
</script>
<style>
	ul{list-style-type: none;}
	.head
	{
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.head input
	{
		height: 40px;
		border-radius: 5px;
		padding-left: 10px;
		width: 400px;
	}
	.head button 
	{
		cursor: pointer;
	}
	.item
	{
		padding: 20px 0;
		border-bottom: 1px solid black;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap:20px;
	}
	.item__flex
	{
		display: flex;
		gap: 20px;
	}
	.btns
	{
		display: flex;
		gap: 20px;
	}
	.btn-compl
	{
		background-color: red;
		color: white;
		border: 0;
		height: 40px;
		line-height: 40px;
		padding: 0 20px;
		cursor: pointer;
		font-size: 21px;
		border-radius: 5px;
	}
	.btn
	{
		background-color: green;
		color: white;
		border: 0;
		height: 40px;
		line-height: 40px;
		padding: 0 20px;
		cursor: pointer;
		font-size: 21px;
		border-radius: 5px;
	}
</style>