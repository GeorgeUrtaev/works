<template>
	<div class="head">
		<input v-model="newTodoList" type="text">
		<button @click="addTodo">Заполнить</button>
	</div>

	<ul class="list">
		<li 
		v-for="(todo, index) in todoList" 
		:key="todo.id" 
		class="item"
		v-bind:class="{active: todo.completed}"
		>
			<div class="item__flex">
				<span>{{todo.id}}.</span>
				<span>{{todo.name}}</span>
			</div>
			<div class="btns">
			<button @click="adEl(todo)" class="btn-adEl">Добавить элемент</button>
			<button @click="red(todo)" class="btn-red">Редактировать элеменнт</button>
			<button @click="deleteEl(index)" class="btn">Удалить элемент</button>
			</div>
		</li>
	</ul>
</template>

<script>
	export default{
		data()
		{
			return {
				newTodoList: '',
				todoList:
				[
				{
					id: 1,
					name: 'Заполнить банки водой',
					completed: false
				},
				{
					id: 2,
					name: 'Поспать пару часов',
					completed: false
				},
				{
					id: 3,
					name: 'Пойти на тренировки',
					completed: false
				}
				]
			}
		},
		methods:
		{
			addTodo()
			{
				this.todoList.push(
				{
					id: this.todoList.length + 1,
					name: this.newTodoList,
					completed: false
				})
				this.newTodoList = '';
			},
			deleteEl(idx)
			{
				this.todoList.splice(idx,1)
			},
			compl(el)
			{
				el.completed = !el.completed
			}
		}
	}
</script>
<style>
	ul
	{
		list-style-type: none;
		padding: 0;
	}
	.head
	{
		display: flex;
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
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		padding: 20px 0;
		border-bottom: 1px solid black;
	}
	.item.active
	{
		background: black;
	}
	.item__flex
	{
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.btns
	{
		display: flex;
		gap: 20px;
	}
	.btn-coml
	{
		line-height: 40px;
		font-size: 21px;
		padding: 0 20px;
		color: white;
		background: red;
		border-radius: 5px;
		cursor: pointer;
		border: 0;
	}
	.btn
	{
		height: 40px;
		line-height: 40px;
		background: green;
		color: white;
		font-size: 21px;
		padding: 0 20px;
		border-radius: 5px;
		cursor: pointer;
		border: 0;
	}
</style>



