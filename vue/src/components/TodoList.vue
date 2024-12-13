<template>
  <div class="head">
    <input
      @input="$emit('input', $event.target.value)"
      type="text"
      :value = 'newTodo'
    >
    <button @click="$emit('addTodo')">Заполнить</button>
    <button @click="$emit('complAndMove')" class="btn-compl-move">Перенести в выполненные</button>
    
  </div>

  <ul class="list">
    <li
      v-for="(todo,index) in todoList"
      :key="todo.id"
      class="item"
      :class="{active: todo.completed}"
    >
      <div class="item__flex">
        <span>{{todo.id}}.</span>
        <span>{{todo.name}}</span>
      </div>
      <div class="btns">
        <button @click="$emit('complet',todo)" class="btn-compl">{{btns.btns.btnCompl}}</button>
        <button @click="$emit('redactEl',todo)" class="btn-redact">{{btns.btns.btnRedact}}</button>
        <button @click="$emit('deleteEl',index)" class="btn">Удалить элемент</button>
      </div>
    </li>
  </ul>
  <ul class="list">
    <li>Выполненные</li>
    <li
      class="item"
      v-for="todo in completedTodoList"
      :key="todo.id"
    >
      <div class="item__flex">
        <span>{{todo.id}}.</span>
        <span>{{todo.name}}</span>
      </div>
    </li>
  </ul>
</template>

<script>
  export default{
    props:
    {
      newTodo: String,
      btns: Object,
      completedTodoList: Array,
      todoList: Array
    },
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
  .item.active{background: black;}
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
  .btn-compl
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
  .btn-redact
  {
    height: 40px;
    line-height: 40px;
    background: purple;
    color: white;
    font-size: 21px;
    padding: 0 20px;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
  }
  .btn-compl-move
  {
    height: 40px;
    line-height: 40px;
    background: blue;
    color: white;
    font-size: 21px;
    padding: 0 20px;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
  }
</style>
