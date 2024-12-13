<template> 
<div class="inputVal"> 
  <input type="text" v-model="val"> 
  <button class="btnEnterVal" @click = "$emit('createNewElement', val)">Добавить задачу</button> 
  <button class="btnCompl" @click="$emit('complMyTodolist')">Перенести в выполненные</button> 
</div> 
<ul class="Todolist"> 
  <li  
    class="item" 
    v-for="(el,index) in elements"  
    :key = "el.id" 
  > 
    <span 
      class="item__task" 
      :class="{active: el.completed}" 
    >{{el.text}}</span> 
      <input type="text" v-model="red[index]" class="item__task-input" 
      :class="{active: el.redact}"> 
     <button @click="$emit('deleteEl', index)">Удалить задачу</button> 
     <button @click="$emit('done', el)">Выполнено</button> 
     <button @click="$emit('redact', index, red[index], el)">Редактировать</button>  
     <button @click="show">SHOW</button>  
  </li> 
</ul> 
<ul class="list"> 
   <li>выполнено</li> 
  <li  
    class="item" 
    v-for="el in complList"  
    :key = "el.id" 
  > 
   <span>{{el.id}}.</span> 
   <span>{{el.text}}</span> 
   </li> 
</ul> 
</template> 
<script> 
export default{ 
  props: 
  { 
    elements: Array, 
    complList: Array, 
    red: Array, 
    val: String,
  },
  data()
  {
    return {
      val: '',
    }
  },
  methods: 
  { 
    show(){ 
      console.log(this.red) 
    } 
    
  } 
} 
</script> 
<style> 
.Todolist
 {
  list-style-type: decimal;
 }
.item__task.active 
{ 
  text-decoration: line-through;  
} 
.item__task-input 
{ 
  display: none; 
} 
.item__task-input.active 
{ 
  display: inline-block; 
  width: 200px; 
  border: 0;
  border-bottom: 1px solid black;
} 
</style>