<template>
  <div class="header__btn-wrapper">
          <button class="container-flex header__btn" @click="openMenu">
            <img src="@/assets/images/svg/dots.svg" alt="">
            <span>Каталог товаров</span>
          </button>
          <div class="header__btn-catalog" :class="{active: show}">
            <ul class="header__btn-list">
              <li class="header__btn-item"
              v-for = "(el,index) in dataMenu" :key = "index"
              @click="openDataMenu (el)"
              >{{el.val}}</li>
            </ul>
         
            <div class="header__btn-images--wrap">
              <img :src ="path">
              
            </div>
          </div>
</div>
</template>
<script>
  import { ref } from 'vue'
  export default{
    setup(){
      let dataMenu = ref ([
      {
        val: "Для работы",
        path: require("@/assets/images/jpg/conp__one.jpg"),
      }, 
      {
        val: "Для дома",
        path: require("@/assets/images/jpg/conp__two.jpg"),
      }, 
      {
        val: "Для игр",
        path: require("@/assets/images/jpg/conp__three.jpg"),
      }, 
      {
        val: "Для учебы",
        path: require("@/assets/images/jpg/conp__four.jpg"),
      },
      ])
      let show = ref (false)
      let path = ref ("")
      const openMenu =()=>
      {
        show.value = !show.value
       
      }
      const openDataMenu = (el)=>
      {
        path.value = el.path
       
      }
      return{
        openMenu,
        show,
        dataMenu,
        openDataMenu,
        path,
      }
    }
  }
</script>
<style>

</style>