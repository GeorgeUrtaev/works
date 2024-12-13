<template>
	<ul class="wrap">
		<li v-for="(items, index) in todoList" class="flex" v-bind:class="{active : items.tracking}">
			<span>{{items.id}}</span>
			<span>{{items.action}}</span>
			<button @click="redEl(items)">Редактировать!</button>
			<button @click="remEl(index)">Удалить элемент!</button>
			<input type="checkbox" class="check" @click="backColor(items)">
			<button @click="checkEl(items,index)">Выполнено!</button>
		</li>
		<li>
			<input type="text" v-model="flexibility">
			<button @click="addEl">Добавить элемент!</button>
		</li>
		<li>
			<span>Список выполненых задач!</span>
			<ul>
				<li v-for="(items, index) in complTask" class="flex">
					<span>{{items.id}}</span>
					<span>{{items.action}}</span>
				</li>
			</ul>
			<button @click="pochta">Нажми и увидишь</button>
		</li>
	</ul>
</template>
<style>
.flex
{
	display: flex;
	gap: 20px;
	margin-bottom: 10px;
}
.flex.active
{
	background-color: green;
	color: white;
}
ul
{
	list-style-type: none;
}
</style>
<script>
	export default
	{
		data()
		{
			return {
				todoList:
				[
					{
						id: 1,
						action: 'проснутся',
						tracking : false,
					},
					{
						id: 2,
						action: 'умыться',
						tracking : false,
					},
					{
						id: 3,
						action: 'позавтракать',
						tracking : false,
					},
					{
						id: 4,
						action: 'пойти на турник',
						tracking : false,
					},

				],
				flexibility:'',
				complTask:[],
			}
		},
		methods:
		{
			addEl()
			{
				this.todoList.push({action:this.flexibility,
									id:this.todoList.length + 1,
									tracking: false,})
				this.flexibility = ''
			},
			remEl(index)
			{
				this.todoList.splice(index,1);
			},
			redEl(instance)
			{
				if(this.flexibility == '')
				{
					alert("заполните поле!")
				}
				else
				{
					instance.action = this.flexibility
					this.flexibility = ''
				}
			},
			checkEl(obj,index)
			{
					this.complTask.push(
					{
						id:this.complTask.length + 1,
						action: obj.action,
					})
					this.remEl(index)
			},
			backColor(instance)
			{
				if(instance.tracking)
					instance.tracking = false;
				else
					instance.tracking = true;
			},
			pochta()
			{
				this.$emit('qwerty')
			},
		}
	}
</script>