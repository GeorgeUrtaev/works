<template>
<div class="inputVal">
  <input type="text" v-model="val">
  <button 
    class="btnEnterVal"
    @click = "createNewElement"
  >Введите задачу</button>
  <button class="btnCompl" @click="complMyTodolist">Перенести в выполненные</button>
</div>
<ul class="list">
  <li 
    class="item"
    v-for="(el,index) in elements" 
    :key = "el.id"
  >
    <span>{{el.id}}</span>
    <span
      class="item__task"
      :class="{active: el.completed}"

    >{{el.text}}</span>
     <button @click="deleteEl(index)">Удалить задачу</button>
     <button @click="done(el)">Выполнено</button> 
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
  data()
  {
    return{
      val: '',
      complList: [],
      elements: 
      [
        {
          id: 1,
          text: 'задача написать',
          completed: false,
        },
        {
          id: 2,
          text: 'задача поспать',
          completed: false,
        },
        {
          id: 3,
          text: 'задача позаниматься',
          completed: false,
        }
      ]
    }
  },
  methods:
  {
    createNewElement()
    {
      this.elements.push(
      {
        id: this.elements.length+1,
        text: this.val,
        completed: false,
      })
    },
    deleteEl(idx)
    {
      this.elements.splice(idx, 1)
    },
    done(el)
    {
      el.completed = !el.completed
    },
    complMyTodolist()
    {
      console.log(true)
      this.complList =  this.elements.filter((el)=>{
        return el.completed === true
      })
    }
  }
}
</script>
<style>
.item__task.active
{
  text-decoration: line-through;
}
</style>